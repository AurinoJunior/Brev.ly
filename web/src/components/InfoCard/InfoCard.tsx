interface InfoCardProps {
  img: string
  title: string
  children: React.ReactNode
}

export const InfoCard = ({ img, title, children }: InfoCardProps) => {
  return (
    <div className="flex items-center flex-col gap-6 bg-white rounded-lg w-full max-w-[580px] px-5 py-12">
      <div>
        <img src={img} alt={title} />
      </div>
      <h3 className="text-xl font-bold text-gray-600">{title}</h3>
      <div className="text-center">{children}</div>
    </div>
  )
}
