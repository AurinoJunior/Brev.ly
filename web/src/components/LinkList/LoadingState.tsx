export const LoadingState = () => {
  return (
    <div className="mt-8 mb-6 text-center">
      <svg className="w-8 h-8 mx-auto animate-spin" viewBox="0 0 50 50">
        <title>Loading spinner</title>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={Math.random()}
            x="23"
            y="6"
            width="4"
            height="12"
            rx="2"
            fill="#6B7280"
            opacity={i / 12}
            transform={`rotate(${i * 30} 25 25)`}
          />
        ))}
      </svg>
      <p className="text-xs text-gray-500 mt-4">CARREGANDO LINKS...</p>
    </div>
  )
}
