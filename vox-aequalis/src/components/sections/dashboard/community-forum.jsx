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
          name: "Aisha Grant",
          username: "AishaVoices",
          subject: "How can we address wage inequality?",
          date: "2 days ago",
          teaser:
            "I’ve been researching wage gaps across industries and it's frustrating how persistent they are.\nWhat local initiatives or policies have worked in your communities?",
        },
        {
          id: 2,
          name: "Carlos Rivera",
          email: "c.rivera@example.com",
          subject: "Disparities in education funding",
          date: "1 week ago",
          teaser:
            "Public schools in low-income areas are seriously underfunded.\nAnyone here working on campaigns or volunteer tutoring programs?",
        },
        {
          id: 3,
          name: "Mei Lin",
          email: "mei_lin@example.com",
          subject: "Affordable housing stories?",
          date: "1 week ago",
          teaser:
            "I’m compiling personal experiences related to housing inequality.\nIf you've faced eviction, long waitlists, or rent spikes, I’d love to hear your story.",
        },
        {
          id: 4,
          name: "David Okoye",
          email: "d.okoye@example.com",
          subject: "Racial equity roundtable next week",
          date: "5 days ago",
          teaser:
            "We’re hosting an online roundtable to talk about systemic racial inequality and how to build more inclusive policies.\nRSVP if you'd like to join!",
        },
        {
          id: 5,
          name: "Nina Patel",
          email: "nina.p@example.com",
          subject: "Rural vs Urban healthcare inequality",
          date: "3 days ago",
          teaser:
            "Access to healthcare in rural areas is still so limited.\nAnyone here from a rural background willing to share how it affects your family?",
        },
      ],
      groups: [
        {
          id: 1,
          name: "Equity in Education",
          username: "edufair_group",
          subject: "Closing the School Funding Gap",
          date: "3 days ago",
          teaser:
            "This group focuses on addressing educational disparities across socioeconomic lines.\nWe share resources, policy updates, and collaborate on outreach programs.",
        },
        {
          id: 2,
          name: "Wage Justice Coalition",
          username: "fairpay_now",
          subject: "Fighting for Fair Wages",
          date: "1 week ago",
          teaser:
            "A space for labor activists, economists, and community leaders pushing for equitable pay.\nJoin us to discuss living wages, union efforts, and salary transparency.",
        },
        {
          id: 3,
          name: "Housing for All",
          username: "affordablehomes",
          subject: "Tackling the Housing Crisis",
          date: "2 days ago",
          teaser:
            "From rent control to public housing policy, this group advocates for housing as a human right.\nWe support tenants, share legal aid, and drive campaigns.",
        },
        {
          id: 4,
          name: "Healthcare Equity Circle",
          username: "healthequal",
          subject: "Access for Every Community",
          date: "5 days ago",
          teaser:
            "We aim to improve healthcare access in underserved areas.\nMembers include public health experts, rural healthcare workers, and patients.",
        },
        {
          id: 5,
          name: "Voices Against Discrimination",
          username: "inclusivevoices",
          subject: "Fighting Racial & Social Injustice",
          date: "6 days ago",
          teaser:
            "This is a safe space for dialogue, support, and activism around racial and systemic injustice.\nShare your experiences, organize events, and learn together.",
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
                                {data.groups.slice(0, 5).map((group) => (
                                    <div
                                        key={group.id}
                                        className="flex flex-col w-full items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                    >
                                        <div>
                                            <span>{group.name}</span>{" "}
                                            <span className="ml-auto text-xs">{group.date}</span>
                                        </div>
                                        <span className="font-medium">{group.subject}</span>
                                        <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                                            {group.teaser}
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