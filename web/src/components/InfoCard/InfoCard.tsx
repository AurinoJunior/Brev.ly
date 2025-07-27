interface InfoCardProps {
  img: string
  title: string
  children: React.ReactNode
}

export const InfoCard = ({ img, title, children }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-lg w-full max-w-[580px]">
      <div>
        <img src={img} alt={title} />
      </div>
      <h3 className="text-xl font-bold text-gray-600 mb-6">{title}</h3>
      {children}
    </div>
  )
}
