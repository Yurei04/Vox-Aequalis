"use client"

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ModeToggle from "../elements/styles-modes";


const components = [
    {
        title: "About",
        href: "vox-aequalis/src/components/sections/homepage/home.jsx",
        description:
          "Come to About Us and learn the goal and purpose of Vox-Aequalis.",
      },
      {
        title: "Vox AI",
        href: "/research-hub/research-hub",
        description:
          "An AI chat-bot that uses NLP and can answer your questions regarding the website or inequality.",
      },
      {
        title: "Research Hub",
        href: "",
        description:
          "A data analytic page where you can see statistical data as well our community forum and groups",
      },
      {
        title: "Community Page",
        href: "",
        description: "One of the data analytic page where you can check statistical data aswell as job market information.",
      },
      {
        title: "Contact",
        href: "",
        description:
          "Contact us for recommendations, infomartion or suggestions.",
      },
]

export default function NavigationMenuMain () {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>      
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 p-6 no-underline outline-none focus:shadow-md"
                                            href="#"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Vox Aequalis
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                            Vox Aequalis is a data analytics platform that visualizes and forecasts inequality trends using datasets from Kaggle and the World Bank.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="#" title="Introduction">
                                    Welcome to Vox-Aequalis
                                </ListItem>
                                <ListItem href="#" title="About">
                                    Whats is Vox-Aequalis
                                </ListItem>
                                <ListItem href="#" title="Contact">
                                    Come join us!
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger> Sections </NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

const ListItem = React.forwardRef(({ className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={
                        cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" 
                        )}
                        {...props}
                >

                    <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}) 

ListItem.displayName = "ListItem"