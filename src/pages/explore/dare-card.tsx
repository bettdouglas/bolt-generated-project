import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MapPin, Trophy, Users } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface DareCardProps {
  dare: {
    id: string
    title: string
    description: string
    location: string
    prize: string
    participants: number
    deadline: string
    creator: {
      name: string
      avatar: string
    }
  }
}

export function DareCard({ dare }: DareCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={dare.creator.avatar} />
            <AvatarFallback>{dare.creator.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{dare.title}</h3>
            <p className="text-sm text-muted-foreground">
              by {dare.creator.name}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{dare.description}</p>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{dare.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="h-4 w-4" />
            <span>{dare.prize}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{dare.participants}</span>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Ends {formatDistanceToNow(new Date(dare.deadline), { addSuffix: true })}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Accept Challenge</Button>
      </CardFooter>
    </Card>
  )
}
