"use client"

import React from "react"
import { GitCommitVertical, TrendingUp } from "lucide-react"
import { Pie, PieChart, Bar, BarChart, CartesianGrid, Label, LabelList,  Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import "@/app/globals.css";

const chartData = [
    { subject: "men", total: 2688, fill: "var(--primary)" },
    { subject: "women", total: 1856, fill: "var(--chart-4)" },
  ]


  const chartConfig = {
    total: {
      label: "total",
    },
    men: {
      label: "men",
      color: "var(--primary)",
    },
    women: {
      label: "women",
      color: "var(--chart-4)",
    },
  }
  


const chartDataTwo = [
    { country: "SouthKorea", value: 33.82 },
    { country: "Estonia", value: 28.16 },
    { country: "Austria", value: 24.50 },
    { country: "Russia", value: 24.42 },
    { country: "Germany", value: 23.20 },
    { country: "Brazil", value: 22.25 },
]

const chartConfigTwo = {
  value: {
    label: "Value",
    color: "var(--primary)",
  },
  country: {
    color: "var(--primary)",
  },
} 

const chartDataThree = [
    { year: 2025, forecast: 34.52 },
    { year: 2026, forecast: 34.20 },
    { year: 2027, forecast: 33.89 },
    { year: 2028, forecast: 33.57 },
    { year: 2029, forecast: 33.25 },
    { year: 2030, forecast: 32.94 },
];
  
const chartConfigThree = {
    forecast: {
        label: "forecast",
        color: "var(--primary)",
    },
}

const chartDataFour = [
    { year: 2025, forecast: -0.13 },
    { year: 2026, forecast: -0.13 },
    { year: 2027, forecast: -0.13 },
    { year: 2028, forecast: -0.13 },
    { year: 2029, forecast: -0.13 },
    { year: 2030, forecast: -0.13 },
];
  
const chartConfigFour = {
    forecast: {
        label: "forecast",
        color: "var(--primary)",
    },
}

export function GraphCards() {
    const totalSubject = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.total, 0)
      }, [])


  return (
    <div
      className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
         <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Pie Chart - Labor Force Percentage</CardTitle>
                <CardDescription>1970 - 2024 Data</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
                >
                <PieChart>
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                    data={chartData}
                    dataKey="total"
                    nameKey="subject"
                    innerRadius={60}
                    strokeWidth={5}
                    >
                    <Label
                        content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                            <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                                >
                                {totalSubject.toLocaleString()}
                                </tspan>
                                <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                                >
                                Total %
                                </tspan>
                            </text>
                            )
                        }
                        }}
                    />
                    </Pie>
                </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                Statistical Data of labor work force <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                Showing OBS data average.
                </div>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Line Chart - Inequality Prediction</CardTitle>
                <CardDescription>2025 - 2030</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfigFour}>
                <LineChart
                    accessibilityLayer
                    data={chartDataFour}
                    margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.toString()}
                    />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                    />
                    <Line
                    dataKey="forecast"
                    type="natural"
                    stroke="var(--primary)"
                    strokeWidth={2}
                    dot={{
                        fill: "var(--primary)",
                    }}
                    activeDot={{
                        r: 6,
                    }}
                    >
                    <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                    />
                    </Line>
                </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Decrease of 0.66% in 5 Years <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing of predicted Inequality
                </div>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Bar Chart - Gender Wage Gap</CardTitle>
                <CardDescription>Top 6 Countries</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfigTwo}>
                <BarChart
                    accessibilityLayer
                    data={chartDataTwo}
                    layout="vertical"
                    margin={{
                    right: 16,
                    }}
                >
                    <CartesianGrid horizontal={false} />
                    <YAxis
                    dataKey="country"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.toString()}
                    hide
                    />
                    <XAxis dataKey="value" type="number" hide />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                    />
                    <Bar
                    dataKey="value"
                    layout="vertical"
                    fill="var(--primary)"
                    radius={4}
                    >
                    <LabelList
                        dataKey="country"
                        position="insideLeft"
                        offset={8}
                        className="fill-[--color-label]"
                        fontSize={12}
                    />
                    <LabelList
                        dataKey="value"
                        position="right"
                        offset={8}
                        className="fill-foreground"
                        fontSize={12}
                    />
                    </Bar>
                </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Gender wage gap percentages
                </div>
                <div className="leading-none text-muted-foreground">
                    Source: Kaggle Dataset
                </div>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Line Chart - Gender Inequality Prediction</CardTitle>
                <CardDescription>2024 - 2030</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfigThree}>
                <LineChart
                    accessibilityLayer
                    data={chartDataThree}
                    margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.toString()}
                    />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                    />
                    <Line
                    dataKey="forecast"
                    type="natural"
                    stroke="var(--primary)"
                    strokeWidth={2}
                    dot={{
                        fill: "var(--primary)",
                    }}
                    activeDot={{
                        r: 6,
                    }}
                    >
                    <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                    />
                    </Line>
                </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Decrease of 0.96% in 5 Years <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing of predicted gender Inequality
                </div>
            </CardFooter>
        </Card>

        
    </div>
  );
}
