import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EventProps {
  id: number
  date: string
  time: string
  venue: string
  location: string
  ticketLink: string
  isNext: boolean
}

export default function EventCard({ event }: { event: EventProps }) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1",
        event.isNext ? "border-2 border-medium-pink bg-white/90" : "bg-white/80",
      )}
    >
      {event.isNext && (
        <div className="mb-4 inline-block rounded-full bg-medium-pink px-3 py-1 text-xs font-semibold uppercase text-black">
          Next Event
        </div>
      )}
      <h3 className="mb-4 text-xl font-bold text-black">{event.venue}</h3>
      <div className="mb-4 space-y-2 text-gray-700">
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="mr-2 h-4 w-4" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{event.location}</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button asChild className="flex-1 bg-medium-pink text-black hover:bg-light-pink">
          <a href={event.ticketLink} target="_blank" rel="noopener noreferrer">
            Buy Tickets
          </a>
        </Button>
        <Button variant="outline" className="flex-1 border-medium-blue text-black hover:bg-medium-blue/20">
          More Info
        </Button>
      </div>
    </div>
  )
}
