import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Flag, Trophy } from "lucide-react"

const MOCK_ACTIVE_DARES = [
  {
    id: "1",
    title: "Ice Bucket Challenge",
    progress: "In Progress",
    deadline: "2024-03-01",
    prize: "$100"
  },
  {
    id: "2",
    title: "Dance Challenge",
    progress: "Pending Verification",
    deadline: "2024-03-15",
    prize: "$50"
  }
]

const MOCK_CREATED_DARES = [
  {
    id: "3",
    title: "Fitness Challenge",
    participants: 45,
    totalPrize: "$500",
    status: "Active"
  }
]

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your dares and track your progress
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Dares</CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reputation</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">850</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="participating" className="space-y-4">
        <TabsList>
          <TabsTrigger value="participating">Participating</TabsTrigger>
          <TabsTrigger value="created">Created</TabsTrigger>
        </TabsList>
        <TabsContent value="participating" className="space-y-4">
          {MOCK_ACTIVE_DARES.map((dare) => (
            <Card key={dare.id}>
              <CardHeader>
                <CardTitle>{dare.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>{dare.progress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deadline:</span>
                    <span>{dare.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prize:</span>
                    <span>{dare.prize}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="created" className="space-y-4">
          {MOCK_CREATED_DARES.map((dare) => (
            <Card key={dare.id}>
              <CardHeader>
                <CardTitle>{dare.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participants:</span>
                    <span>{dare.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Prize:</span>
                    <span>{dare.totalPrize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>{dare.status}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
