import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function ProjectImageSlider({ images = [], title, className = "" }) {
  const normalizedImages = useMemo(
    () => [...new Set(images.filter(Boolean))].slice(0, 3),
    [images],
  )
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setIndex(0)
  }, [normalizedImages.join("|")])

  useEffect(() => {
    if (normalizedImages.length <= 1 || isPaused) return undefined

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % normalizedImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [normalizedImages.length, isPaused])

  if (!normalizedImages.length) {
    return (
      <div className={`flex aspect-video items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 text-slate-500 ${className}`}>
        No images available
      </div>
    )
  }

  const showPrevious = () => {
    setIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length)
  }

  const showNext = () => {
    setIndex((prev) => (prev + 1) % normalizedImages.length)
  }

  return (
    <div
      className={`group relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={normalizedImages[index]}
          src={normalizedImages[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

      {normalizedImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-xl text-white opacity-0 backdrop-blur transition hover:bg-slate-900 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-xl text-white opacity-0 backdrop-blur transition hover:bg-slate-900 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {normalizedImages.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(imageIndex)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  imageIndex === index
                    ? "w-7 bg-cyan-400"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${imageIndex + 1}`}
              />
            ))}
          </div>

          {!isPaused && (
            <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
              <motion.div
                key={index}
                className="h-full bg-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
              />
            </div>
          )}
        </>
      )}

      {isPaused && normalizedImages.length > 1 && (
        <div className="absolute right-4 top-4 z-20 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300 backdrop-blur">
          {index + 1} / {normalizedImages.length}
        </div>
      )}
    </div>
  )
}

export default ProjectImageSlider
