interface InfoCardProps {
  children: React.ReactNode
}

export const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <div className="flex items-center flex-col gap-6 bg-white rounded-lg w-full max-w-[580px] px-5 py-12 lg:px-12 lg:py-16">
      {children}
    </div>
  )
}
