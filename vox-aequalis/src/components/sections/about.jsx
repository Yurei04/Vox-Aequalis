"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "../ui/label"
import { Card, CardContent } from "../ui/card"

const contents = {

    website: [
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-1"
        },
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-2"
        },
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-3"
        },

    ],

    
    research: [
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-1"
        },
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-2"
        },
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-3"
        },

    ],

    gender: [
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-1"
        },
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-2"
        },
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-3"
        },

    ],

    social: [
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-1"
        },
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-2"
        },
        {
            title: "What is Vox Aequalis",
            des: "Vox Aequalis is a website to show analytics about gender/social inequalities and as well as a place where you can join communities, ask questions from people or our chat bot about your experiences. To spread the word and allow people to be inspired and further undedrstand the situation",
            value: "item-3"
        },

    ]

    
}


export default function About () {
    return (
        <div className="w-full h-screen flex flex-col p-2 m-5 items-center">
            <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-600 to-rose-400 mb-5">
                About
            </span>
            <div className="w-full flex flex-col items-center gap-10">
                <Card className="w-[70%] flex">
                    <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <Label>What is Vox Aequalis is all about?</Label>
                            {contents.website.map((content) => (
                                <AccordionItem value={content.value}>
                                    <AccordionTrigger>{content.title}</AccordionTrigger>
                                    <AccordionContent>
                                        {content.des}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                            
                    </Accordion>
                    </CardContent>
                </Card>

                <Card className="w-[70%] flex">
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <Label>Social/Gender Inequality Vox Aequalis Resaerch</Label>
                            {contents.website.map((content) => (
                                <AccordionItem value={content.value}>
                                    <AccordionTrigger>{content.title}</AccordionTrigger>
                                    <AccordionContent>
                                        {content.des}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="w-[70%] flex">
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                        <Label>What is/are Gender Inequality</Label>    
                            {contents.website.map((content) => (
                                <AccordionItem value={content.value}>
                                    <AccordionTrigger>{content.title}</AccordionTrigger>
                                    <AccordionContent>
                                        {content.des}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>   

                <Card className="w-[70%] flex">
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                        <Label>What is/are Social Inequality</Label>   
                            {contents.website.map((content) => (
                                <AccordionItem value={content.value}>
                                    <AccordionTrigger>{content.title}</AccordionTrigger>
                                    <AccordionContent>
                                        {content.des}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>       
            </div>
            
        </div>
    )
}