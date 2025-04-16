import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ThumbsUp, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function WarRoom() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Tesla (TSLA) Analysis</CardTitle>
              <CardDescription>Q4 2024 10-K + Recent News</CardDescription>
            </div>
            <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
              Hold with Caution
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Avatar className="border-2 border-red-500/20 h-10 w-10">
                <AvatarFallback className="bg-red-500/20 text-red-500">HF</AvatarFallback>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
              </Avatar>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">Hedge Fund Analyst</h4>
                  <Badge variant="destructive" className="text-xs">
                    Sell
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p>
                    Margins dropped 2%, questionable accounting on energy segment. Red flag on inventory buildup. Cash
                    burn accelerating while competition intensifies in China and Europe.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>2 min ago</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="border-2 border-amber-500/20 h-10 w-10">
                <AvatarFallback className="bg-amber-500/20 text-amber-500">SA</AvatarFallback>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
              </Avatar>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">Sell-Side Analyst</h4>
                  <Badge variant="outline" className="text-xs">
                    Hold
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p>
                    Mixed signals. Revenue growth solid at 15% YoY, but margin compression concerning. Robotaxi
                    potential remains speculative but promising. Valuation stretched relative to auto peers.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>1 min ago</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="border-2 border-green-500/20 h-10 w-10">
                <AvatarFallback className="bg-green-500/20 text-green-500">RI</AvatarFallback>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
              </Avatar>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">Retail Investor</h4>
                  <Badge variant="default" className="bg-green-600 text-xs">
                    Buy
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p>
                    HODL. Elon said 'we're just getting started.' Robotaxi reveal coming in August could be huge. Reddit
                    sentiment still bullish despite recent dip.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Just now</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="border-2 border-blue-500/20 h-10 w-10">
                <AvatarFallback className="bg-blue-500/20 text-blue-500">NB</AvatarFallback>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
              </Avatar>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">News Digest Bot</h4>
                  <Badge variant="outline" className="text-xs">
                    Neutral
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p>
                    Reuters reported layoffs in charging division, CNBC bullish on robotaxi potential. WSJ highlighted
                    growing inventory concerns. Twitter sentiment down 15% this week.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Just now</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-md border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h4 className="font-semibold">Final Recommendation</h4>
              </div>
              <p className="text-sm mb-2">Team vote → 1 Sell, 1 Hold, 1 Buy, 1 Neutral</p>
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-amber-500" />
                <p className="font-medium">Hold with caution</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Textarea placeholder="Ask a follow-up question..." className="flex-1" />
        <Button>Send</Button>
      </div>
    </div>
  )
}
