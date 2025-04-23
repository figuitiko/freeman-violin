"use client";
import { InstagramEmbed } from "react-social-media-embed";

interface Video {
  id: number;
  title: string;
  embedUrl: string;
}

export default function VideoGallery({ videos }: { videos: Video[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {videos.map((video) => (
        <div key={video.id} className="overflow-hidden rounded-lg">
          <InstagramEmbed
            url={video.embedUrl}
            width={328}
            style={{ maxWidth: "100%", margin: "0 auto" }}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <h4 className="mt-2 text-lg font-medium text-black">{video.title}</h4>
        </div>
      ))}
    </div>
  );
}
