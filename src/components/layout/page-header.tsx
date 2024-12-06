interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return <h1 className="text-4xl font-bold mb-8">{title}</h1>
}
