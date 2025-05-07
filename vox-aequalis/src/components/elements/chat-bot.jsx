"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileChartLine, Send } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function ChatBotAI() {
    const [messages, setMessages] = useState([{ role: "bot", content: "Greetings, how can I help you today?" }]);
    const chatEndRef = useRef(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            event.preventDefault();
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!query.trim()) return;
        const userMessage = { role: "user", content: query };
        setMessages(prev => [...prev, userMessage]);
    
        try {
            const res = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: query }),
            });
    
            const data = await res.json();
            const botMessage = { role: "bot", content: data.response || "Sorry, I do not understand." };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("API error:", error);
            setMessages(prev => [
                ...prev,
                { role: "bot", content: "Server error. Please try again later." },
            ]);
        }
    
        setQuery("");
    };
    

    return (
        <div className="flex flex-col w-full h-screen items-center gap-5 p-5">
            <div>
                <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-600 to-rose-400 mb-5">
                    Vox Chat Bot AI
                </span>
            </div>
            <Card className="w-[60%] h-full flex flex-col">
                <CardHeader>
                    <CardTitle>Vox AI</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden p-4">
                    <ScrollArea className="h-full flex flex-col-reverse p-5">
                        <div className="flex flex-col gap-3">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-3 rounded-lg max-w-[80%] ${
                                        msg.role === "user"
                                            ? "self-end bg-rose-500 text-white"
                                            : "self-start bg-gray-300 text-black"
                                    }`}
                                >
                                    {msg.content}
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="p-4">
                    <div className="flex flex-row w-full gap-3">
                        <Input
                            type="text"
                            placeholder="Type your message here..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                  e.preventDefault(); // Prevent newline
                                  sendMessage();
                                } else if (e.key === "Enter" && e.shiftKey) {
                                  e.preventDefault();
                                  alert("Shift + Enter pressed");
                                }
                            }}
                        />
                        <Button onClick={sendMessage}>
                            <Send />
                        </Button>
                        <Button >
                            <FileChartLine />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
