"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileUp, Link2, Search, TrendingUp } from "lucide-react"

export function AnalysisInput() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Analysis</CardTitle>
        <CardDescription>Input financial data for the AI agents to analyze</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ticker">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ticker">Ticker</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="url">URL</TabsTrigger>
          </TabsList>

          <TabsContent value="ticker" className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Enter ticker symbol (e.g., TSLA)" />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Include:</div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  10-K Report
                </Button>
                <Button variant="outline" size="sm">
                  Recent News
                </Button>
                <Button variant="outline" size="sm">
                  Earnings Call
                </Button>
                <Button variant="outline" size="sm">
                  Social Sentiment
                </Button>
              </div>
            </div>
            <Button className="w-full" onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>Analyzing...</>
              ) : (
                <>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Run Analysis
                </>
              )}
            </Button>
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <FileUp className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Drag and drop files or click to browse</p>
              <Button variant="outline" size="sm">
                Browse Files
              </Button>
            </div>

            <Button className="w-full" onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>Analyzing...</>
              ) : (
                <>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Run Analysis
                </>
              )}
            </Button>
          </TabsContent>

          <TabsContent value="url" className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Enter URL to financial report or news article" />
              <Button variant="outline" size="icon">
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
            <Textarea placeholder="Add notes or specific questions for the analysis (optional)" />
            <Button className="w-full" onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>Analyzing...</>
              ) : (
                <>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Run Analysis
                </>
              )}
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
