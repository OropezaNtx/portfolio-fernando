import { useMemo } from "react"

const LAYERS = [
  { name: "far", count: 190, minSize: 0.6, maxSize: 1.25, minOpacity: 0.16, maxOpacity: 0.42, drift: 7 },
  { name: "mid", count: 105, minSize: 0.9, maxSize: 1.9, minOpacity: 0.24, maxOpacity: 0.62, drift: 11 },
  { name: "near", count: 42, minSize: 1.3, maxSize: 3.2, minOpacity: 0.38, maxOpacity: 0.9, drift: 16 },
]

function seededRandom(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

function buildStars() {
  let seed = 1

  return LAYERS.flatMap((layer, layerIndex) =>
    Array.from({ length: layer.count }, (_, index) => {
      const left = seededRandom(seed++) * 100
      const top = seededRandom(seed++) * 100
      const size = layer.minSize + seededRandom(seed++) * (layer.maxSize - layer.minSize)
      const opacity = layer.minOpacity + seededRandom(seed++) * (layer.maxOpacity - layer.minOpacity)
      const duration = 4.8 + seededRandom(seed++) * 9.5
      const delay = seededRandom(seed++) * -14
      const driftDuration = 24 + seededRandom(seed++) * 30
      const driftX = (seededRandom(seed++) - 0.5) * layer.drift
      const driftY = (seededRandom(seed++) - 0.5) * layer.drift
      const tint = seededRandom(seed++)

      return {
        id: `${layer.name}-${layerIndex}-${index}`,
        layer: layer.name,
        left,
        top,
        size,
        opacity,
        duration,
        delay,
        driftDuration,
        driftX,
        driftY,
        tint,
      }
    }),
  )
}

const shootingStars = [
  { id: "one", top: "13%", left: "78%", delay: "3s", duration: "22s", rotate: "-22deg" },
  { id: "two", top: "42%", left: "91%", delay: "11s", duration: "31s", rotate: "-28deg" },
  { id: "three", top: "68%", left: "72%", delay: "19s", duration: "27s", rotate: "-18deg" },
  { id: "four", top: "24%", left: "96%", delay: "25s", duration: "38s", rotate: "-24deg" },
]

function Starfield() {
  const stars = useMemo(buildStars, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes portfolio-star-twinkle {
          0%, 100% { opacity: var(--star-min); transform: scale(0.82); }
          42% { opacity: var(--star-opacity); transform: scale(1.12); }
          70% { opacity: calc(var(--star-opacity) * 0.58); transform: scale(0.94); }
        }

        @keyframes portfolio-star-drift {
          0%, 100% { translate: 0 0; }
          50% { translate: var(--drift-x) var(--drift-y); }
        }

        @keyframes portfolio-shooting-star {
          0%, 82%, 100% { opacity: 0; transform: translate3d(0, 0, 0) scaleX(0.15); }
          84% { opacity: 0.95; }
          90% { opacity: 0; transform: translate3d(-520px, 210px, 0) scaleX(1); }
        }

        @keyframes portfolio-nebula-breathe {
          0%, 100% { opacity: 0.32; transform: scale(0.94) translate3d(0, 0, 0); }
          50% { opacity: 0.55; transform: scale(1.06) translate3d(2%, -2%, 0); }
        }

        .portfolio-star {
          position: absolute;
          border-radius: 9999px;
          animation:
            portfolio-star-twinkle var(--twinkle-duration) ease-in-out var(--twinkle-delay) infinite,
            portfolio-star-drift var(--drift-duration) ease-in-out var(--twinkle-delay) infinite;
          will-change: opacity, transform, translate;
        }

        .portfolio-star-far { filter: blur(0.15px); }
        .portfolio-star-mid { box-shadow: 0 0 5px currentColor; }
        .portfolio-star-near { box-shadow: 0 0 9px currentColor, 0 0 18px currentColor; }

        .portfolio-shooting-star {
          position: absolute;
          width: 155px;
          height: 1px;
          transform-origin: right center;
          border-radius: 9999px;
          background: linear-gradient(90deg, transparent, rgba(165,243,252,0.18), rgba(255,255,255,0.95));
          filter: drop-shadow(0 0 5px rgba(103,232,249,0.8));
          animation: portfolio-shooting-star var(--shoot-duration) linear var(--shoot-delay) infinite;
        }

        .portfolio-nebula {
          position: absolute;
          border-radius: 9999px;
          filter: blur(105px);
          animation: portfolio-nebula-breathe 19s ease-in-out infinite;
          will-change: opacity, transform;
        }

        @media (max-width: 768px) {
          .portfolio-star-far:nth-of-type(2n) { display: none; }
          .portfolio-nebula { filter: blur(78px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-star,
          .portfolio-nebula,
          .portfolio-shooting-star { animation: none !important; }
          .portfolio-shooting-star { display: none; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(56,189,248,0.08),transparent_38%),radial-gradient(circle_at_80%_45%,rgba(99,102,241,0.055),transparent_34%)]" />

      <span className="portfolio-nebula left-[-9%] top-[18%] h-[34rem] w-[34rem] bg-cyan-500/[0.055]" />
      <span
        className="portfolio-nebula right-[-12%] top-[48%] h-[38rem] w-[38rem] bg-indigo-500/[0.05]"
        style={{ animationDelay: "-7s", animationDuration: "26s" }}
      />
      <span
        className="portfolio-nebula bottom-[-18%] left-[30%] h-[30rem] w-[42rem] bg-sky-300/[0.035]"
        style={{ animationDelay: "-13s", animationDuration: "31s" }}
      />

      {stars.map((star) => {
        const color =
          star.tint > 0.84
            ? "rgb(165 243 252)"
            : star.tint < 0.12
              ? "rgb(224 231 255)"
              : "rgb(255 255 255)"

        return (
          <span
            key={star.id}
            className={`portfolio-star portfolio-star-${star.layer}`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              color,
              backgroundColor: color,
              "--star-opacity": star.opacity,
              "--star-min": Math.max(0.08, star.opacity * 0.34),
              "--twinkle-duration": `${star.duration}s`,
              "--twinkle-delay": `${star.delay}s`,
              "--drift-duration": `${star.driftDuration}s`,
              "--drift-x": `${star.driftX}px`,
              "--drift-y": `${star.driftY}px`,
            }}
          />
        )
      })}

      {shootingStars.map((star) => (
        <span
          key={star.id}
          className="portfolio-shooting-star"
          style={{
            top: star.top,
            left: star.left,
            rotate: star.rotate,
            "--shoot-delay": star.delay,
            "--shoot-duration": star.duration,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-transparent to-slate-950/25" />
    </div>
  )
}

export default Starfield
