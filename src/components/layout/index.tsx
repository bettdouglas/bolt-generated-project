import { UserNav } from "@/components/layout/user-nav"
import { MainNav } from "@/components/layout/main-nav"
import { ModeToggle } from "@/components/layout/mode-toggle"
import { Outlet } from "react-router-dom"
import { Compass } from "lucide-react"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-bold">
            <Compass className="h-6 w-6" />
            <span>Dares</span>
          </div>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <Outlet />
      </main>
    </div>
  )
}
