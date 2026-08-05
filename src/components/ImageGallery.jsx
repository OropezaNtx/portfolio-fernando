import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

const AUTOPLAY_DELAY = 5000
const INTERACTION_PAUSE = 7000
const SWIPE_THRESHOLD = 45

const mediaFolders = {
  "Commercial Data Integration & Performance Analytics": "/images/projects/commercial-data-integration",
  "Coverage GAP Form": "/images/projects/coverage-gap-form",
  "NAF Commercial Classification Automation": "/images/projects/naf-automation",
  "QR Traceability System": "/images/projects/qr-traceability",
  "GPS & Mobility Data Tools": "/images/projects/gps-mobility-tools",
  AFORA: "/images/projects/afora",
  POLITYCS: "/images/projects/politycs",
  MOBILYTICS: "/images/projects/mobilytics",
  "American Express Mexico": "/images/experience/american-express",
  Merck: "/images/experience/merck",
  "Urban Data": "/images/experience/urban-data",
}

function buildGenericImages(title) {
  const folder = mediaFolders[title]
  if (!folder) return []

  return ["01.png", "02.png", "03.png"].map((fileName) => `${folder}/${fileName}`)
}

function ImageGallery({ images = [], title = "Gallery", className = "" }) {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef(null)
  const pointerStartRef = useRef(null)
  const interactionTimerRef = useRef(null)

  const normalizedImages = useMemo(() => {
    const genericImages = buildGenericImages(title)
    const source = genericImages.length ? genericImages : images
    return [...new Set(source.filter(Boolean))].slice(0, 3)
  }, [images, title])

  const [availableImages, setAvailableImages] = useState(normalizedImages)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isDocumentVisible, setIsDocumentVisible] = useState(true)
  const [isInteractionPaused, setIsInteractionPaused] = useState(false)
  const [loadedImages, setLoadedImages] = useState(() => new Set())
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    setAvailableImages(normalizedImages)
    setIndex(0)
    setLoadedImages(new Set())
  }, [normalizedImages.join("|")])

  useEffect(() => {
    const element = containerRef.current
    if (!element || typeof IntersectionObserver === "undefined") return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.22 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentVisible(!document.hidden)
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  useEffect(() => {
    if (availableImages.length <= 1) return undefined

    const nextIndex = (index + 1) % availableImages.length
    const previousIndex = (index - 1 + availableImages.length) % availableImages.length

    ;[availableImages[nextIndex], availableImages[previousIndex]].forEach((src) => {
      const preloadImage = new Image()
      preloadImage.src = src
    })

    return undefined
  }, [availableImages, index])

  const autoplayPaused =
    prefersReducedMotion ||
    isHovered ||
    isFocused ||
    !isVisible ||
    !isDocumentVisible ||
    isInteractionPaused

  useEffect(() => {
    if (availableImages.length <= 1 || autoplayPaused) return undefined

    const interval = window.setInterval(() => {
      setDirection(1)
      setIsChanging(true)
      setIndex((current) => (current + 1) % availableImages.length)
    }, AUTOPLAY_DELAY)

    return () => window.clearInterval(interval)
  }, [availableImages.length, autoplayPaused])

  useEffect(
    () => () => {
      if (interactionTimerRef.current) window.clearTimeout(interactionTimerRef.current)
    },
    [],
  )

  const pauseAfterInteraction = () => {
    setIsInteractionPaused(true)
    if (interactionTimerRef.current) window.clearTimeout(interactionTimerRef.current)

    interactionTimerRef.current = window.setTimeout(() => {
      setIsInteractionPaused(false)
    }, INTERACTION_PAUSE)
  }

  const removeUnavailableImage = (src) => {
    setAvailableImages((current) => {
      const next = current.filter((image) => image !== src)
      setIndex((currentIndex) => (next.length ? Math.min(currentIndex, next.length - 1) : 0))
      return next
    })
  }

  const markImageLoaded = (src) => {
    setLoadedImages((current) => {
      const next = new Set(current)
      next.add(src)
      return next
    })
    setIsChanging(false)
  }

  const goToImage = (nextIndex, nextDirection = 1, manual = true) => {
    if (!availableImages.length || nextIndex === index) return
    setDirection(nextDirection)
    setIsChanging(true)
    setIndex(nextIndex)
    if (manual) pauseAfterInteraction()
  }

  const previous = () => {
    goToImage((index - 1 + availableImages.length) % availableImages.length, -1)
  }

  const next = () => {
    goToImage((index + 1) % availableImages.length, 1)
  }

  const handleKeyDown = (event) => {
    if (availableImages.length <= 1) return

    if (event.key === "ArrowLeft") {
      event.preventDefault()
      previous()
    }

    if (event.key === "ArrowRight") {
      event.preventDefault()
      next()
    }
  }

  const handlePointerDown = (event) => {
    if (availableImages.length <= 1) return
    pointerStartRef.current = { x: event.clientX, y: event.clientY }
  }

  const handlePointerUp = (event) => {
    const start = pointerStartRef.current
    pointerStartRef.current = null
    if (!start || availableImages.length <= 1) return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) <= Math.abs(deltaY)) return
    if (deltaX > 0) previous()
    else next()
  }

  if (!availableImages.length) {
    const folder = mediaFolders[title]

    return (
      <div
        className={`flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/70 px-6 text-center text-sm text-slate-500 ${className}`}
      >
        {folder
          ? `Add 01.png, 02.png and 03.png inside public${folder}.`
          : "Add up to three images for this item."}
      </div>
    )
  }

  const currentImage = availableImages[index]
  const currentImageLoaded = loadedImages.has(currentImage)

  return (
    <motion.div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label={`${title} image gallery`}
      aria-roledescription="carousel"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.008, y: -2 }}
      className={`group relative aspect-video w-full touch-pan-y overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-[0_30px_90px_rgba(0,0,0,0.34)] outline-none transition-shadow duration-700 hover:shadow-[0_42px_120px_rgba(0,0,0,0.46)] focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false)
      }}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStartRef.current = null
      }}
    >
      <AnimatePresence>
        {(!currentImageLoaded || isChanging) && (
          <motion.div
            key={`skeleton-${currentImage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 overflow-hidden bg-slate-900"
          >
            <motion.div
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
              animate={{ x: ["-120%", "240%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-cyan-300/[0.04]" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt={`${title} image ${index + 1} of ${availableImages.length}`}
          loading="lazy"
          decoding="async"
          draggable="false"
          className="absolute inset-0 h-full w-full select-none object-cover"
          custom={direction}
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction * 28, scale: 1.035, filter: "blur(16px)" }
          }
          animate={{ opacity: 1, x: 0, scale: isHovered ? 1.028 : 1, filter: "blur(0px)" }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction * -18, scale: 0.992, filter: "blur(10px)" }
          }
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          onLoad={() => markImageLoaded(currentImage)}
          onError={() => removeUnavailableImage(currentImage)}
        />
      </AnimatePresence>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-white/[0.04]"
        animate={{ opacity: isChanging ? 0.9 : 0.55 }}
        transition={{ duration: 0.45 }}
      />

      <div className="pointer-events-none absolute inset-x-[8%] bottom-[-10%] z-0 h-1/3 rounded-full bg-cyan-300/10 blur-3xl transition duration-700 group-hover:bg-cyan-300/15" />
      <div className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] ring-1 ring-inset ring-white/[0.06]" />

      {availableImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-2xl text-white opacity-0 shadow-lg backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-slate-900/90 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-2xl text-white opacity-0 shadow-lg backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-slate-900/90 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/55 p-1.5 shadow-xl backdrop-blur-xl">
            {availableImages.map((image, imageIndex) => {
              const active = imageIndex === index
              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => goToImage(imageIndex, imageIndex > index ? 1 : -1)}
                  className={`relative flex h-7 items-center justify-center overflow-hidden rounded-full text-[10px] font-semibold transition-all duration-500 ${
                    active
                      ? "w-12 bg-white text-slate-950 shadow-[0_0_24px_rgba(255,255,255,0.18)]"
                      : "w-7 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                  aria-label={`Go to image ${imageIndex + 1}`}
                  aria-current={active ? "true" : undefined}
                >
                  {String(imageIndex + 1).padStart(2, "0")}
                  {active && !autoplayPaused && (
                    <motion.span
                      key={`${index}-${isInteractionPaused}`}
                      className="absolute bottom-0 left-0 h-0.5 bg-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs tabular-nums text-white/75 opacity-0 shadow-lg backdrop-blur-xl transition duration-300 group-hover:opacity-100 focus-within:opacity-100">
            {index + 1} / {availableImages.length}
          </div>

          <p className="sr-only" aria-live="polite">
            Showing image {index + 1} of {availableImages.length}
          </p>
        </>
      )}
    </motion.div>
  )
}

export default ImageGallery
