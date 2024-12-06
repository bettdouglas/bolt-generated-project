import { DareCard } from "./dare-card"
import { MapPinned } from "lucide-react"

const MOCK_DARES = [
  {
    id: "1",
    title: "Ice Bucket Challenge",
    description: "Pour a bucket of ice water over your head for charity",
    location: "Central Park, New York",
    prize: "$100",
    participants: 156,
    deadline: "2024-03-01",
    creator: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    }
  },
  {
    id: "2",
    title: "Dance Challenge",
    description: "Learn and perform the latest viral dance routine",
    location: "Times Square, New York",
    prize: "$50",
    participants: 89,
    deadline: "2024-03-15",
    creator: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
    }
  }
]

export function Explore() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Explore Dares</h1>
        <p className="text-muted-foreground">
          Discover exciting challenges in your area
        </p>
      </div>

      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPinned className="h-4 w-4" />
        <span>New York, NY</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_DARES.map((dare) => (
          <DareCard key={dare.id} dare={dare} />
        ))}
      </div>
    </div>
  )
}
