// Sample upcoming events data
const events = [
  {
    id: 1,
    date: "June 15, 2025",
    time: "8:00 PM",
    venue: "The Sound Garden",
    location: "New York, NY",
    ticketLink: "https://example.com/tickets",
    isNext: true,
  },
  {
    id: 2,
    date: "July 3, 2025",
    time: "9:30 PM",
    venue: "Melody Club",
    location: "Los Angeles, CA",
    ticketLink: "https://example.com/tickets",
    isNext: false,
  },
  {
    id: 3,
    date: "July 28, 2025",
    time: "7:00 PM",
    venue: "Rhythm House",
    location: "Chicago, IL",
    ticketLink: "https://example.com/tickets",
    isNext: false,
  },
];

// Sample music tracks
const tracks = [
  {
    id: 1,
    title: "Summer Nights",
    duration: "3:45",
    audioSrc: "/audio/track1.mp3",
  },
  {
    id: 2,
    title: "City Lights",
    duration: "4:12",
    audioSrc: "/audio/track2.mp3",
  },
  {
    id: 3,
    title: "Ocean Waves",
    duration: "3:28",
    audioSrc: "/audio/track3.mp3",
  },
];

const videos = [
  {
    id: 1,
    title: "Live at The Sound Garden",
    embedUrl: "https://www.youtube.com/embed/19g66ezsKAg",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: 2,
    title: "Music Festival Performance",
    embedUrl: "https://www.youtube.com/embed/19g66ezsKAg",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
];

export { events, tracks, videos };
