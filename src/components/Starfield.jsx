const stars = [
  [6, 14, 1, 0.35, 11], [12, 37, 2, 0.55, 8], [18, 72, 1, 0.28, 13],
  [24, 22, 1, 0.5, 9], [29, 61, 2, 0.42, 12], [34, 85, 1, 0.32, 10],
  [41, 17, 2, 0.5, 14], [46, 48, 1, 0.36, 8], [52, 75, 1, 0.45, 11],
  [57, 29, 2, 0.48, 13], [63, 64, 1, 0.34, 9], [68, 11, 1, 0.44, 12],
  [73, 42, 2, 0.52, 10], [78, 81, 1, 0.3, 14], [84, 26, 1, 0.46, 9],
  [89, 58, 2, 0.5, 13], [94, 18, 1, 0.34, 11], [97, 74, 1, 0.42, 8],
  [9, 88, 1, 0.28, 12], [37, 34, 1, 0.38, 10], [66, 91, 2, 0.42, 14],
  [81, 53, 1, 0.32, 9], [21, 49, 1, 0.4, 13], [49, 8, 2, 0.45, 11],
]

function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      <div className="starfield-haze" />
      {stars.map(([left, top, size, opacity, duration], index) => (
        <span
          key={`${left}-${top}`}
          className="ambient-star"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${(index % 7) * -1.6}s`,
          }}
        />
      ))}
      <span className="shooting-star shooting-star-one" />
      <span className="shooting-star shooting-star-two" />
      <span className="shooting-star shooting-star-three" />
    </div>
  )
}

export default Starfield
