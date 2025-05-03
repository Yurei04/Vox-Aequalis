"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", socialInequality: 222, genderWageGap: 150 },
  { date: "2024-04-02", socialInequality: 97, genderWageGap: 180 },
  { date: "2024-04-03", socialInequality: 167, genderWageGap: 120 },
  { date: "2024-04-04", socialInequality: 242, genderWageGap: 260 },
  { date: "2024-04-05", socialInequality: 373, genderWageGap: 290 },
  { date: "2024-04-06", socialInequality: 301, genderWageGap: 340 },
  { date: "2024-04-07", socialInequality: 245, genderWageGap: 180 },
  { date: "2024-04-08", socialInequality: 409, genderWageGap: 320 },
  { date: "2024-04-09", socialInequality: 59, genderWageGap: 110 },
  { date: "2024-04-10", socialInequality: 261, genderWageGap: 190 },
  { date: "2024-04-11", socialInequality: 327, genderWageGap: 350 },
  { date: "2024-04-12", socialInequality: 292, genderWageGap: 210 },
  { date: "2024-04-13", socialInequality: 342, genderWageGap: 380 },
  { date: "2024-04-14", socialInequality: 137, genderWageGap: 220 },
  { date: "2024-04-15", socialInequality: 120, genderWageGap: 170 },
  { date: "2024-04-16", socialInequality: 138, genderWageGap: 190 },
  { date: "2024-04-17", socialInequality: 446, genderWageGap: 360 },
  { date: "2024-04-18", socialInequality: 364, genderWageGap: 410 },
  { date: "2024-04-19", socialInequality: 243, genderWageGap: 180 },
  { date: "2024-04-20", socialInequality: 89, genderWageGap: 150 },
  { date: "2024-04-21", socialInequality: 137, genderWageGap: 200 },
  { date: "2024-04-22", socialInequality: 224, genderWageGap: 170 },
  { date: "2024-04-23", socialInequality: 138, genderWageGap: 230 },
  { date: "2024-04-24", socialInequality: 387, genderWageGap: 290 },
  { date: "2024-04-25", socialInequality: 215, genderWageGap: 250 },
  { date: "2024-04-26", socialInequality: 75, genderWageGap: 130 },
  { date: "2024-04-27", socialInequality: 383, genderWageGap: 420 },
  { date: "2024-04-28", socialInequality: 122, genderWageGap: 180 },
  { date: "2024-04-29", socialInequality: 315, genderWageGap: 240 },
  { date: "2024-04-30", socialInequality: 454, genderWageGap: 380 },
  { date: "2024-05-01", socialInequality: 165, genderWageGap: 220 },
  { date: "2024-05-02", socialInequality: 293, genderWageGap: 310 },
  { date: "2024-05-03", socialInequality: 247, genderWageGap: 190 },
  { date: "2024-05-04", socialInequality: 385, genderWageGap: 420 },
  { date: "2024-05-05", socialInequality: 481, genderWageGap: 390 },
  { date: "2024-05-06", socialInequality: 498, genderWageGap: 520 },
  { date: "2024-05-07", socialInequality: 388, genderWageGap: 300 },
  { date: "2024-05-08", socialInequality: 149, genderWageGap: 210 },
  { date: "2024-05-09", socialInequality: 227, genderWageGap: 180 },
  { date: "2024-05-10", socialInequality: 293, genderWageGap: 330 },
  { date: "2024-05-11", socialInequality: 335, genderWageGap: 270 },
  { date: "2024-05-12", socialInequality: 197, genderWageGap: 240 },
  { date: "2024-05-13", socialInequality: 197, genderWageGap: 160 },
  { date: "2024-05-14", socialInequality: 448, genderWageGap: 490 },
  { date: "2024-05-15", socialInequality: 473, genderWageGap: 380 },
  { date: "2024-05-16", socialInequality: 338, genderWageGap: 400 },
  { date: "2024-05-17", socialInequality: 499, genderWageGap: 420 },
  { date: "2024-05-18", socialInequality: 315, genderWageGap: 350 },
  { date: "2024-05-19", socialInequality: 235, genderWageGap: 180 },
  { date: "2024-05-20", socialInequality: 177, genderWageGap: 230 },
  { date: "2024-05-21", socialInequality: 82, genderWageGap: 140 },
  { date: "2024-05-22", socialInequality: 81, genderWageGap: 120 },
  { date: "2024-05-23", socialInequality: 252, genderWageGap: 290 },
  { date: "2024-05-24", socialInequality: 294, genderWageGap: 220 },
  { date: "2024-05-25", socialInequality: 201, genderWageGap: 250 },
  { date: "2024-05-26", socialInequality: 213, genderWageGap: 170 },
  { date: "2024-05-27", socialInequality: 420, genderWageGap: 460 },
  { date: "2024-05-28", socialInequality: 233, genderWageGap: 190 },
  { date: "2024-05-29", socialInequality: 78, genderWageGap: 130 },
  { date: "2024-05-30", socialInequality: 340, genderWageGap: 280 },
  { date: "2024-05-31", socialInequality: 178, genderWageGap: 230 },
  { date: "2024-06-01", socialInequality: 178, genderWageGap: 200 },
  { date: "2024-06-02", socialInequality: 470, genderWageGap: 410 },
  { date: "2024-06-03", socialInequality: 103, genderWageGap: 160 },
  { date: "2024-06-04", socialInequality: 439, genderWageGap: 380 },
  { date: "2024-06-05", socialInequality: 88, genderWageGap: 140 },
  { date: "2024-06-06", socialInequality: 294, genderWageGap: 250 },
  { date: "2024-06-07", socialInequality: 323, genderWageGap: 370 },
  { date: "2024-06-08", socialInequality: 385, genderWageGap: 320 },
  { date: "2024-06-09", socialInequality: 438, genderWageGap: 480 },
  { date: "2024-06-10", socialInequality: 155, genderWageGap: 200 },
  { date: "2024-06-11", socialInequality: 92, genderWageGap: 150 },
  { date: "2024-06-12", socialInequality: 492, genderWageGap: 420 },
  { date: "2024-06-13", socialInequality: 81, genderWageGap: 130 },
  { date: "2024-06-14", socialInequality: 426, genderWageGap: 380 },
  { date: "2024-06-15", socialInequality: 307, genderWageGap: 350 },
  { date: "2024-06-16", socialInequality: 371, genderWageGap: 310 },
  { date: "2024-06-17", socialInequality: 475, genderWageGap: 520 },
  { date: "2024-06-18", socialInequality: 107, genderWageGap: 170 },
  { date: "2024-06-19", socialInequality: 341, genderWageGap: 290 },
  { date: "2024-06-20", socialInequality: 408, genderWageGap: 450 },
  { date: "2024-06-21", socialInequality: 169, genderWageGap: 210 },
  { date: "2024-06-22", socialInequality: 317, genderWageGap: 270 },
  { date: "2024-06-23", socialInequality: 480, genderWageGap: 530 },
  { date: "2024-06-24", socialInequality: 132, genderWageGap: 180 },
  { date: "2024-06-25", socialInequality: 141, genderWageGap: 190 },
  { date: "2024-06-26", socialInequality: 434, genderWageGap: 380 },
  { date: "2024-06-27", socialInequality: 448, genderWageGap: 490 },
  { date: "2024-06-28", socialInequality: 149, genderWageGap: 200 },
  { date: "2024-06-29", socialInequality: 103, genderWageGap: 160 },
  { date: "2024-06-30", socialInequality: 446, genderWageGap: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },

  socialInequality: {
    label: "Social Inequality",
    color: "var(--primary)",
  },

  genderWageGap: {
    label: "Gender Wage Gap",
    color: "var(--primary)",
  }
}

export default function ChartAreaInteractiveResearch() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Visitors</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex">
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value">
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSocialInequality" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-socialInequality)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-socialInequality)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillGenderWageGap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-genderWageGap)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-genderWageGap)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }} />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot" />
              } />
            <Area
              dataKey="genderWageGap"
              type="natural"
              fill="url(#fillGenderWageGap)"
              stroke="var(--color-genderWageGap)"
              stackId="a" />
            <Area
              dataKey="socialInequality"
              type="natural"
              fill="url(#fillSocialInequality)"
              stroke="var(--color-socialInequality)"
              stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
