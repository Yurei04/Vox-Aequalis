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
            title: "What is Vox Aequalis?",
            des: "Vox Aequalis is a data analytics platform that visualizes and forecasts inequality trends using datasets from Kaggle and the World Bank. It leverages machine learning to present insights on social and economic disparities, helping users understand the broader landscape of global inequality.",
            value: "item-1"
        },
        {
            title: "What features does Vox Aequalis offer?",
            des: "Vox Aequalis combines interactive data visualizations, machine learning-based predictions, a community forum, a job evaluation tool, and an NLP chatbot. Users can explore real-world inequality metrics, join discussions, evaluate workplaces, and ask questions related to social justice.",
            value: "item-2"
        },
        {
            title: "Who is Vox Aequalis for?",
            des: "Vox Aequalis is designed for researchers, job seekers, students, HR professionals, and anyone interested in understanding or addressing inequality. It creates a space for data-driven learning, community sharing, and activism around social and economic fairness.",
            value: "item-3"
        },
    ],

    research: [
        {
            title: "What is the research all about?",
            des: "The core research behind Vox Aequalis focuses on collecting, analyzing, and forecasting inequality data using statistical methods and machine learning. It draws from reputable sources to build evidence-based insights that expose systemic disparities in gender, income, labor, and more.",
            value: "item-1"
        },
        {
            title: "What is Vox Aequalis' research goal?",
            des: "The goal is to quantify inequality using global data, develop predictive models to anticipate future trends, and translate complex findings into accessible visuals. Vox Aequalis aims to empower users with knowledge that fuels advocacy and informed decisions.",
            value: "item-2"
        },
        {
            title: "How can this research help?",
            des: "By making inequality data transparent and interactive, this research helps policymakers, HR teams, and the general public recognize disparities and push for fairer treatment. It supports evidence-based action in education, employment, and governance.",
            value: "item-3"
        },
    ],

    gender: [
        {
            title: "What is gender inequality?",
            des: "Gender inequality refers to the unequal treatment or perception of individuals based on their gender, often manifesting in pay gaps, limited opportunities, workplace bias, and social expectations. It affects all genders but disproportionately impacts women and marginalized identities.",
            value: "item-1"
        },
        {
            title: "How does gender inequality affect people?",
            des: "Gender inequality limits access to resources, career advancement, education, and safety. It contributes to mental health challenges, economic disparity, and systemic oppression, especially in workplaces and institutions that lack inclusive policies.",
            value: "item-2"
        },
        {
            title: "How can Vox Aequalis help mitigate gender inequality?",
            des: "Vox Aequalis highlights gender disparity data across industries and regions, enabling users to identify patterns and demand change. Its job review tool exposes workplace bias, and its forum and chatbot foster discussions that raise awareness and promote gender equity.",
            value: "item-3"
        },
    ],

    social: [
        {
            title: "What is inequality?",
            des: "Inequality is the uneven distribution of resources, opportunities, and rights across different groups in society. It can be economic, racial, educational, or based on gender, geography, or disability, and often leads to marginalization and social unrest.",
            value: "item-1"
        },
        {
            title: "How does inequality affect people?",
            des: "People affected by inequality often face limited access to education, healthcare, fair wages, and representation. It deepens poverty, hinders development, and fosters resentment and division within communities and institutions.",
            value: "item-2"
        },
        {
            title: "How can Vox Aequalis reduce or help mitigate inequality?",
            des: "Vox Aequalis informs the public with real-time inequality data, encourages collective discussion in its forum, and provides tools for workplace transparency. By making disparities visible, it equips users to challenge injustice and promote equality-driven solutions.",
            value: "item-3"
        },
    ]
};

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