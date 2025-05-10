"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

/* 
  Data below are calculated average per year from their respective csv data for further clearance
  Please check the uploaded csv or the research paper publish on devpost thank you
*/
const chartData = [
  { year: 2010, GiniIndex: 43 },
  { year: 2011, GiniIndex: 35 },
  { year: 2012, GiniIndex: 47 },
  { year: 2013, GiniIndex: 42 },
  { year: 2014, GiniIndex: 44 },
  { year: 2015, GiniIndex: 38 },
  { year: 2016, GiniIndex: 39 },
  { year: 2017, GiniIndex: 39 },
  { year: 2018, GiniIndex: 41 },
  { year: 2019, GiniIndex: 44 },
  { year: 2020, GiniIndex: 45 },
  { year: 2021, GiniIndex: 40 },
  { year: 2022, GiniIndex: 40 },
  { year: 2023, GiniIndex: 48 },
  { year: 2024, GiniIndex: 42 },
  { year: 2025, GiniIndex: 42 },
];

const chartConfig = {
  giniIndex: {
    label: "Gini Index",
    color: "var(--primary)",
  },
};

export default function ChartAreaInteractive() {
  const [activeChart, setActiveChart] = React.useState("giniIndex");

  const total = React.useMemo(
    () => ({
      giniIndex: chartData.reduce((acc, curr) => acc + curr.GiniIndex, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Gini Index</CardTitle>
          <CardDescription>
            Showing Statistical Data of Gini Index from 2010 to 2025
          </CardDescription>
        </div>
        <div className="flex">
          {["giniIndex"].map((key) => {
            return (
              <button
                key={key}
                data-active={activeChart === key}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[key].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartData}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickFormatter={(value) => value.toString()}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="GiniIndex"
                  labelFormatter={(value) => `Year: ${value}`}
                />
              }
            />
            <Bar dataKey="GiniIndex" fill={chartConfig.giniIndex.color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
