import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function ImageGallery({ images = [], title = "Gallery", className = "" }) {
  const normalizedImages = useMemo(
    () => [...new Set(images.filter(Boolean))].slice(0, 3),
    [images],
  )
  const [availableImages, setAvailableImages] = useState(normalizedImages)
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setAvailableImages(normalizedImages)
    setIndex(0)
  }, [normalizedImages.join("|")])

  useEffect(() => {
    if (availableImages.length <= 1 || isPaused) return undefined

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % availableImages.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [availableImages.length, isPaused])

  const removeUnavailableImage = (src) => {
    setAvailableImages((current) => {
      const next = current.filter((image) => image !== src)
      setIndex((currentIndex) => (next.length ? Math.min(currentIndex, next.length - 1) : 0))
      return next
    })
  }

  if (!availableImages.length) {
    return (
      <div
        className={`flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/70 px-6 text-center text-sm text-slate-500 ${className}`}
      >
        Add 01.png, 02.png and 03.png to this item&apos;s image folder.
      </div>
    )
  }

  const previous = () => {
    setIndex((current) => (current - 1 + availableImages.length) % availableImages.length)
  }

  const next = () => {
    setIndex((current) => (current + 1) % availableImages.length)
  }

  return (
    <div
      className={`group relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={availableImages[index]}
          src={availableImages[index]}
          alt={`${title} image ${index + 1}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -48 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onError={() => removeUnavailableImage(availableImages[index])}
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

      {availableImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-xl text-white opacity-0 backdrop-blur transition group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-xl text-white opacity-0 backdrop-blur transition group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {availableImages.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(imageIndex)}
                className={`h-2 rounded-full transition-all ${
                  imageIndex === index ? "w-7 bg-cyan-400" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${imageIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ImageGallery
