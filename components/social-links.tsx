import { Instagram, Youtube, Music, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-lavender bg-transparent text-black hover:bg-lavender hover:text-black"
        asChild
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-light-pink bg-transparent text-black hover:bg-light-pink hover:text-black"
        asChild
      >
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-medium-pink bg-transparent text-black hover:bg-medium-pink hover:text-black"
        asChild
      >
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
          <Music className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-light-blue bg-transparent text-black hover:bg-light-blue hover:text-black"
        asChild
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-medium-blue bg-transparent text-black hover:bg-medium-blue hover:text-black"
        asChild
      >
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="h-5 w-5" />
        </a>
      </Button>
    </div>
  )
}
