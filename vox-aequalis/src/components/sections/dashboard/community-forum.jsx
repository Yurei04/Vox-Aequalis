import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArchiveX, Command, File, Inbox, Send, Trash2 } from "lucide-react"

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
            name: "Bob Johnson",
            username: "BobB0b",
            subject: "Weekend Plans",
            date: "2 days ago",
            teaser:
              "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
        },
        {
            name: "James Martin",
            email: "jamesmartin@example.com",
            subject: "Re: Conference Registration",
            date: "1 week ago",
            teaser:
              "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
        },
        {
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
        <div className="flex flex-col w-full h-screen items-center">
            <div>
                <Card className="px-1.5 md:px-0">
                    <CardHeader>
                        <CardTitle></CardTitle>
                    </CardHeader>
                    <CardContent>
                        {data.comments.map((comment) => (
                            <a
                                href="#"
                                key={comment.username}
                                className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            >
                                <div>
                                    <span>{comment.name}</span>{" "}
                                    <span className="ml-auto text-xs">{data.comments.date}</span>
                                </div>
                                <span className="font-medium">{comment.subject}</span>
                                <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                                    {comment.teaser}
                                </span>
                            </a>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}