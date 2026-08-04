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

  useEffect(() => {
    setAvailableImages(normalizedImages)
    setIndex(0)
  }, [normalizedImages.join("|")])

  useEffect(() => {
    const element = containerRef.current
    if (!element || typeof IntersectionObserver === "undefined") return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 },
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

  const goToImage = (nextIndex, nextDirection = 1, manual = true) => {
    if (!availableImages.length || nextIndex === index) return
    setDirection(nextDirection)
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

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label={`${title} image gallery`}
      aria-roledescription="carousel"
      className={`group relative aspect-video w-full touch-pan-y overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${className}`}
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
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={availableImages[index]}
          src={availableImages[index]}
          alt={`${title} image ${index + 1} of ${availableImages.length}`}
          loading="lazy"
          decoding="async"
          draggable="false"
          className="absolute inset-0 h-full w-full select-none object-cover"
          custom={direction}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 36, scale: 1.015 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -24, scale: 0.99 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          onError={() => removeUnavailableImage(availableImages[index])}
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" />

      {availableImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-2xl text-white opacity-0 shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-slate-900 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-2xl text-white opacity-0 shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-slate-900 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/65 p-1.5 shadow-lg backdrop-blur-md">
            {availableImages.map((image, imageIndex) => {
              const active = imageIndex === index
              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => goToImage(imageIndex, imageIndex > index ? 1 : -1)}
                  className={`relative flex h-7 items-center justify-center overflow-hidden rounded-full text-[10px] font-semibold transition-all duration-300 ${
                    active
                      ? "w-12 bg-cyan-300 text-slate-950"
                      : "w-7 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                  aria-label={`Go to image ${imageIndex + 1}`}
                  aria-current={active ? "true" : undefined}
                >
                  {String(imageIndex + 1).padStart(2, "0")}
                  {active && !autoplayPaused && (
                    <motion.span
                      key={`${index}-${isInteractionPaused}`}
                      className="absolute bottom-0 left-0 h-0.5 bg-slate-950/55"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1.5 text-xs tabular-nums text-white/75 opacity-0 backdrop-blur-md transition group-hover:opacity-100 focus-within:opacity-100">
            {index + 1} / {availableImages.length}
          </div>

          <p className="sr-only" aria-live="polite">
            Showing image {index + 1} of {availableImages.length}
          </p>
        </>
      )}
    </div>
  )
}

export default ImageGallery
