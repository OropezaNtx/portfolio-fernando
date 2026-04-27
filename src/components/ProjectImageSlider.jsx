import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function ProjectImageSlider({ images = [], title }) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (images.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length, isPaused])

  if (!images.length) {
    return (
      <div className="aspect-video flex items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 text-slate-500">
        No images available
      </div>
    )
  }

  return (
    <div
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950 border border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

      {images.length > 1 && (
        <>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-7 bg-cyan-400"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          {!isPaused && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
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

      {isPaused && images.length > 1 && (
        <div className="absolute top-4 right-4 rounded-full bg-slate-950/70 border border-slate-700 px-3 py-1 text-xs text-slate-300 backdrop-blur">
          Paused
        </div>
      )}
    </div>
  )
}

export default ProjectImageSlider