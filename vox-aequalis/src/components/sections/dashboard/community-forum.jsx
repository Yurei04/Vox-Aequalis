import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { ArchiveX, Command, ThumbsUp, File, Inbox, Send, Trash2, ThumbsDown, MessageSquareText, MessageSquareWarning, Upload } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const data = {
    post: {
        name: "user1",
        username: "johnDoe777",
        avatar: ""
    },
    forumContents: [
        {
            title: "Inbox",
            url: "#",
            icon: Inbox,
            isActive: true,
          },
          {
            title: "Drafts",
            url: "#",
            icon: File,
            isActive: false,
          },
    ],
    comments: [
        {
            id: 1,
            name: "Bob Johnson",
            username: "BobB0b",
            subject: "Weekend Plans",
            date: "2 days ago",
            teaser:
              "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
        },
        {
            id: 2,
            name: "James Martin",
            email: "jamesmartin@example.com",
            subject: "Re: Conference Registration",
            date: "1 week ago",
            teaser:
              "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
        },
        {
            id: 3,
            name: "Sophia White",
            email: "sophiawhite@example.com",
            subject: "Team Dinner",
            date: "1 week ago",
            teaser:
              "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
        },
        {
            id: 4,
            name: "James Martin",
            email: "jamesmartin@example.com",
            subject: "Re: Conference Registration",
            date: "1 week ago",
            teaser:
              "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
        },
        {
            id: 5,
            name: "Sophia White",
            email: "sophiawhite@example.com",
            subject: "Team Dinner",
            date: "1 week ago",
            teaser:
              "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
        },
    ]
}

export default function CommunityForum (...props) {
    return (
        <div className="flex flex-col w-full h-[90%] items-center ">
            <div className="w-full flex flex-col gap-5 sm:flex-row">
                <Card className="px-1.5 w-full md:px-0">
                    <CardHeader>
                        <CardTitle> Community Forum </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                        <ScrollArea className="h-[90%] w-full  rounded-md">
                            {data.comments.slice(0, 5).map((comment) => (
                                <div
                                    key={comment.id}
                                    className="flex flex-col w-full items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                >
                                    <div>
                                        <span>{comment.name}</span>{" "}
                                        <span className="ml-auto text-xs">{data.comments.date}</span>
                                    </div>
                                    <span className="font-medium">{comment.subject}</span>
                                    <span className="line-clamp-2 w-full whitespace-break-spaces text-xs">
                                        {comment.teaser}
                                    </span>
                                    <div className="flex flex-row gap-2">
                                        <Button variant="outline"> <ThumbsUp /></Button>
                                        <Button variant="outline"> <ThumbsDown/></Button>
                                        <Button variant="outline" > <MessageSquareText /> </Button>
                                        <Button variant="destructive" ><MessageSquareWarning /></Button>
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                        <div className="flex flex-row gap-2 items-center w-full">
                            <div className="flex flex-col gap-2 w-full">
                                <Label htmlFor="message">Your message</Label>
                                <Textarea  placeholder="Type your post here." id="message"></Textarea>
                            </div>
                        <Button> <Send /> </Button>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex flex-col">
                    <Card>
                        <CardHeader>
                            <CardTitle> Community Group </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-row gap-5">
                            <ScrollArea className="h-[90%] w-full  rounded-md">
                                {data.comments.slice(0, 5).map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="flex flex-col w-full items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                    >
                                        <div>
                                            <span>{comment.name}</span>{" "}
                                            <span className="ml-auto text-xs">{data.comments.date}</span>
                                        </div>
                                        <span className="font-medium">{comment.subject}</span>
                                        <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                                            {comment.teaser}
                                        </span>
                                    </div>
                                ))}
                            </ScrollArea>
                        </CardContent>
                    </Card>

                </div>
                
            </div>

        </div>
    )
}