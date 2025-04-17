import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ThumbsUp, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function WarRoomLoading() {
  const stocks = ["AAPL", "NVDA", "TSLA", "NFLX", "GOOGL"];
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3 relative" />
        <CardContent>
          <div className="flex flex-col gap-12 w-full items-center justify-center min-h-56">
            <p className="md:text-4xl text-2xl font-semibold leading-none tracking-tight">
              Loading
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
