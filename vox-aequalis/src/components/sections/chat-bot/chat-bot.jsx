"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"
import { useEffect, useState, useRef } from "react"



export default function ChatBotAI () {
    const [QNADatabase, setQNADatabase] = useState([]);
    const [messages, setMessages] = useState([{ role: "Vox", content: "Greetings, How can I help you today? " }])
    const chatEndRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch("")
                .then((res) => res.json())
                .then((data) => {
                    console.log("Database has been loaded", data)
                    setQNADatabase(data)
                })
            } catch(error) {
                console.log("Failed to load Databse ", error)
                setMessages([{ role: "Vox", content: "There is a error in loading resources please come back later :)"}])
            }
        }
        fetchData()
    }, [])

    const sendMessage = async () => {

    }

    return (
        <div className="flex flex-col w-full h-screen items-center">
            <div>
                <h1></h1>
            </div>
            <Card
                className="w-full max"
            >
                <CardHeader>
                    <CardTitle>

                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea>
                        <div>
                            {messages.map((msg, index) => (
                                <div>
                                </div>    
                            ))}

                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <div>
                        <Input type="text" placeholder="Type your message here... " value={query}/>
                        <Button onclick={sendMessage}> <Send /></Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}