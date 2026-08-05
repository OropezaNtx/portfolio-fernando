import { useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
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

function GalleryImage({ src, alt, onLoad, onError, className = "", eager = false }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable="false"
      className={className}
      onLoad={onLoad}
      onError={onError}
    />
  )
}

function Lightbox({ images, index, title, onClose, onChange, prefersReducedMotion }) {
  const [direction, setDirection] = useState(1)
  const pointerStartRef = useRef(null)
  const dialogRef = useRef(null)

  const goTo = (nextIndex, nextDirection) => {
    setDirection(nextDirection)
    onChange(nextIndex)
  }

  const previous = () => goTo((index - 1 + images.length) % images.length, -1)
  const next = () => goTo((index + 1) % images.length, 1)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowLeft" && images.length > 1) previous()
      if (event.key === "ArrowRight" && images.length > 1) next()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [index, images.length, onClose])

  useEffect(() => {
    if (images.length <= 1) return
    const nextImage = new Image()
    nextImage.src = images[(index + 1) % images.length]
  }, [images, index])

  const handlePointerDown = (event) => {
    pointerStartRef.current = { x: event.clientX, y: event.clientY }
  }

  const handlePointerUp = (event) => {
    const start = pointerStartRef.current
    pointerStartRef.current = null
    if (!start || images.length <= 1) return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) <= Math.abs(deltaY)) return
    if (deltaX > 0) previous()
    else next()
  }

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} fullscreen gallery`}
      tabIndex={-1}
      className="fixed inset-0 z-[9999] flex flex-col bg-slate-950/96 p-3 outline-none backdrop-blur-2xl sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.1 : 0.28 }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="flex items-center justify-between gap-4 px-1 pb-3 sm:px-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">{title}</p>
          <p className="mt-1 text-xs tabular-nums text-slate-400">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur-xl transition hover:scale-105 hover:bg-white/20"
          aria-label="Close fullscreen gallery"
        >
          ×
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 sm:rounded-[2rem]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={images[index]}
            custom={direction}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 48, scale: 0.985 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -36, scale: 0.985 }}
            transition={{ duration: prefersReducedMotion ? 0.12 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center p-3 sm:p-8"
          >
            <GalleryImage
              src={images[index]}
              alt={`${title} fullscreen image ${index + 1} of ${images.length}`}
              eager
              className="max-h-full max-w-full select-none object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                previous()
              }}
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-3xl text-white shadow-xl backdrop-blur-xl transition hover:scale-105 hover:bg-slate-900 sm:left-6"
              aria-label="Previous fullscreen image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                next()
              }}
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-3xl text-white shadow-xl backdrop-blur-xl transition hover:scale-105 hover:bg-slate-900 sm:right-6"
              aria-label="Next fullscreen image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-2 overflow-x-auto px-1 pt-4">
          {images.map((image, imageIndex) => {
            const active = imageIndex === index
            return (
              <button
                key={image}
                type="button"
                onClick={() => goTo(imageIndex, imageIndex > index ? 1 : -1)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition duration-300 sm:h-20 sm:w-32 ${
                  active
                    ? "border-cyan-300 ring-2 ring-cyan-300/30"
                    : "border-white/10 opacity-55 hover:opacity-100"
                }`}
                aria-label={`Open fullscreen image ${imageIndex + 1}`}
                aria-current={active ? "true" : undefined}
              >
                <GalleryImage
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-1 right-1 rounded bg-slate-950/75 px-1.5 py-0.5 text-[10px] text-white">
                  {String(imageIndex + 1).padStart(2, "0")}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </motion.div>,
    document.body,
  )
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    setAvailableImages(normalizedImages)
    setIndex(0)
    setLoadedImages(new Set())
  }, [normalizedImages.join("|")])

  useEffect(() => {
    const element = containerRef.current
    if (!element || typeof IntersectionObserver === "undefined") return
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.22 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentVisible(!document.hidden)
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  useEffect(() => {
    if (availableImages.length <= 1) return
    const adjacent = [
      availableImages[(index + 1) % availableImages.length],
      availableImages[(index - 1 + availableImages.length) % availableImages.length],
    ]
    adjacent.forEach((src) => {
      const preloadImage = new Image()
      preloadImage.src = src
    })
  }, [availableImages, index])

  const autoplayPaused =
    prefersReducedMotion || isHovered || isFocused || !isVisible || !isDocumentVisible ||
    isInteractionPaused || isLightboxOpen

  useEffect(() => {
    if (availableImages.length <= 1 || autoplayPaused) return
    const interval = window.setInterval(() => {
      setDirection(1)
      setIsChanging(true)
      setIndex((current) => (current + 1) % availableImages.length)
    }, AUTOPLAY_DELAY)
    return () => window.clearInterval(interval)
  }, [availableImages.length, autoplayPaused])

  useEffect(() => () => {
    if (interactionTimerRef.current) window.clearTimeout(interactionTimerRef.current)
  }, [])

  const pauseAfterInteraction = () => {
    setIsInteractionPaused(true)
    if (interactionTimerRef.current) window.clearTimeout(interactionTimerRef.current)
    interactionTimerRef.current = window.setTimeout(() => setIsInteractionPaused(false), INTERACTION_PAUSE)
  }

  const removeUnavailableImage = (src) => {
    setAvailableImages((current) => {
      const next = current.filter((image) => image !== src)
      setIndex((currentIndex) => (next.length ? Math.min(currentIndex, next.length - 1) : 0))
      return next
    })
  }

  const markImageLoaded = (src) => {
    setLoadedImages((current) => new Set(current).add(src))
    setIsChanging(false)
  }

  const goToImage = (nextIndex, nextDirection = 1, manual = true) => {
    if (!availableImages.length || nextIndex === index) return
    setDirection(nextDirection)
    setIsChanging(true)
    setIndex(nextIndex)
    if (manual) pauseAfterInteraction()
  }

  const previous = () => goToImage((index - 1 + availableImages.length) % availableImages.length, -1)
  const next = () => goToImage((index + 1) % availableImages.length, 1)

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setIsLightboxOpen(true)
      return
    }
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
    if (availableImages.length > 1) pointerStartRef.current = { x: event.clientX, y: event.clientY }
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
      <div className={`flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/70 px-6 text-center text-sm text-slate-500 ${className}`}>
        {folder ? `Add 01.png, 02.png and 03.png inside public${folder}.` : "Add up to three images for this item."}
      </div>
    )
  }

  const currentImage = availableImages[index]
  const currentImageLoaded = loadedImages.has(currentImage)

  return (
    <>
      <motion.div
        ref={containerRef}
        tabIndex={0}
        role="region"
        aria-label={`${title} image gallery. Press Enter to open fullscreen.`}
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
        onPointerCancel={() => { pointerStartRef.current = null }}
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
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="absolute inset-0 z-20 cursor-zoom-in"
          aria-label={`Open ${title} fullscreen gallery`}
        >
          <span className="sr-only">Open fullscreen gallery</span>
        </button>

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
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 28, scale: 1.035, filter: "blur(16px)" }}
            animate={{ opacity: 1, x: 0, scale: isHovered ? 1.028 : 1, filter: "blur(0px)" }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -18, scale: 0.992, filter: "blur(10px)" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            onLoad={() => markImageLoaded(currentImage)}
            onError={() => removeUnavailableImage(currentImage)}
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-white/[0.04]" />
        <div className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] ring-1 ring-inset ring-white/[0.06]" />

        <div className="pointer-events-none absolute left-4 top-4 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs text-white/80 opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
          <span>⌗</span><span>View fullscreen</span>
        </div>

        {availableImages.length > 1 && (
          <>
            <button type="button" onClick={(event) => { event.stopPropagation(); previous() }} className="absolute left-4 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-2xl text-white opacity-0 shadow-lg backdrop-blur-xl transition hover:scale-105 group-hover:opacity-100 focus:opacity-100" aria-label="Previous image">‹</button>
            <button type="button" onClick={(event) => { event.stopPropagation(); next() }} className="absolute right-4 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-2xl text-white opacity-0 shadow-lg backdrop-blur-xl transition hover:scale-105 group-hover:opacity-100 focus:opacity-100" aria-label="Next image">›</button>

            <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/55 p-1.5 shadow-xl backdrop-blur-xl">
              {availableImages.map((image, imageIndex) => {
                const active = imageIndex === index
                return (
                  <button
                    key={image}
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToImage(imageIndex, imageIndex > index ? 1 : -1)
                    }}
                    className={`relative flex h-7 items-center justify-center overflow-hidden rounded-full text-[10px] font-semibold transition-all duration-500 ${active ? "w-12 bg-white text-slate-950" : "w-7 bg-white/10 text-white/70 hover:bg-white/20"}`}
                    aria-label={`Go to image ${imageIndex + 1}`}
                    aria-current={active ? "true" : undefined}
                  >
                    {String(imageIndex + 1).padStart(2, "0")}
                    {active && !autoplayPaused && (
                      <motion.span className="absolute bottom-0 left-0 h-0.5 bg-cyan-500" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }} />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="absolute right-4 top-4 z-40 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs tabular-nums text-white/75 opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
              {index + 1} / {availableImages.length}
            </div>
          </>
        )}
      </motion.div>

      <AnimatePresence>
        {isLightboxOpen && (
          <Lightbox
            images={availableImages}
            index={index}
            title={title}
            onClose={() => setIsLightboxOpen(false)}
            onChange={(nextIndex) => {
              setIndex(nextIndex)
              setIsChanging(true)
            }}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageGallery
