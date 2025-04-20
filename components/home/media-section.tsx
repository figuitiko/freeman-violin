import Image from "next/image";
import MusicPlayer from "../music-player";
import VideoGallery from "../video-gallery";
import { tracks, videos } from "@/lib/constants";

export const MediaSection = () => {
  return (
    <section
      id="media"
      className="bg-gradient-to-b from-lavender/30 to-light-pink/30 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Music & Videos
        </h2>

        {/* Music Samples */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-black">
            Latest Tracks
          </h3>
          <div className="space-y-4">
            {tracks.map((track) => (
              <MusicPlayer key={track.id} track={track} />
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-black">
            Live Performances
          </h3>
          <VideoGallery videos={videos} />
        </div>

        {/* Image Gallery */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-black">Gallery</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=Gallery+${i}`}
                  alt={`Gallery image ${i}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
