import { AnalysisInput } from "@/components/analysis-input"
import { WarRoom } from "@/components/war-room"
import { RecentAnalyses } from "@/components/recent-analyses"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Financial War Room</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AnalysisInput />
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Analyses</CardTitle>
              <CardDescription>Your recent financial analyses</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentAnalyses />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="war-room">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="war-room">War Room</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
            </TabsList>
            <TabsContent value="war-room">
              <WarRoom />
            </TabsContent>
            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>Extracted insights from the analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Select an analysis to view insights</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="data">
              <Card>
                <CardHeader>
                  <CardTitle>Source Data</CardTitle>
                  <CardDescription>Raw data used in the analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Select an analysis to view source data</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
