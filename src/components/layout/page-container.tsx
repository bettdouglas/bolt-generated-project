import { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">{children}</div>
    </div>
  )
}
