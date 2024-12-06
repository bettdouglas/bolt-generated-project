import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

const items = [
  {
    title: "Explore",
    href: "/explore",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
]

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  const { pathname } = useLocation()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname !== item.href && "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
