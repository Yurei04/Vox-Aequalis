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

{/* Data below are calculated average per year from their respective csv data for further clearance 
    Please check the uploaded csv or the research paper publish on devpost thank
  */}

  const chartData = [
    { year: 2010, IncomeInequality: 24, GiniIndex: 43 },
    { year: 2011, IncomeInequality: 24, GiniIndex: 35 },
    { year: 2012, IncomeInequality: 24, GiniIndex: 47 },
    { year: 2013, IncomeInequality: 24, GiniIndex: 42 },
    { year: 2014, IncomeInequality: 24, GiniIndex: 44 },
    { year: 2015, IncomeInequality: 23, GiniIndex: 38 },
    { year: 2016, IncomeInequality: 23, GiniIndex: 39 },
    { year: 2017, IncomeInequality: 23, GiniIndex: 39 },
    { year: 2018, IncomeInequality: 23, GiniIndex: 41 },
    { year: 2019, IncomeInequality: 23, GiniIndex: 44 },
    { year: 2020, IncomeInequality: 23, GiniIndex: 45 },
    { year: 2021, IncomeInequality: 23, GiniIndex: 40 },
    { year: 2022, IncomeInequality: 23, GiniIndex: 40 },
    { year: 2023, IncomeInequality: 23, GiniIndex: 48 },
    { year: 2024, IncomeInequality: 23, GiniIndex: 42 },
    { year: 2025, IncomeInequality: 24, GiniIndex: 42 },
  ];
  
  


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
  const [timeRange, setTimeRange] = React.useState("25yr")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("10yr")
    }
  }, [isMobile])

  const currentYear = 2025;
  
  const filteredData = chartData.filter((item) => {
    let yearsToSubtract = 25; 
    if (timeRange === "15yr") {
      yearsToSubtract = 15;
    } else if (timeRange === "10yr") {
      yearsToSubtract = 10;
    }
  
    const startYear = currentYear - yearsToSubtract;
    return item.year >= startYear;
  });
  
  
  

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Yearly Percentages</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Increase and Decread of Income Inequality and Gini Index
          </span>
          <span className="@[540px]/card:hidden">Last 25 Years</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden md:flex space-x-2">
            <ToggleGroupItem value="25yr">Last 25 Years</ToggleGroupItem>
            <ToggleGroupItem value="15yr">Last 15 Years</ToggleGroupItem>
            <ToggleGroupItem value="10yr">Last 10 Years</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 truncate md:hidden"
              size="sm"
              aria-label="Select a value">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="10yr" className="rounded-lg">
                Last 10 Years
              </SelectItem>
              <SelectItem value="15yr" className="rounded-lg">
                Last 15 Years
              </SelectItem>
              <SelectItem value="25yr" className="rounded-lg">
                Last 25 Years
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
              dataKey="year"
              tickFormatter={(value) => value.toString()}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}/>
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
                dataKey="IncomeInequality"
                type="natural"
                fill="url(#fillGenderWageGap)"
                stroke="var(--color-genderWageGap)"
                stackId="a"
              />
              <Area
                dataKey="GiniIndex"
                type="natural"
                fill="url(#fillSocialInequality)"
                stroke="var(--color-socialInequality)"
                stackId="a"
              />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
