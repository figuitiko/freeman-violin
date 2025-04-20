interface Video {
  id: number
  title: string
  embedUrl: string
  thumbnail: string
}

export default function VideoGallery({ videos }: { videos: Video[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {videos.map((video) => (
        <div key={video.id} className="overflow-hidden rounded-lg">
          <iframe
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          ></iframe>
          <h4 className="mt-2 text-lg font-medium text-black">{video.title}</h4>
        </div>
      ))}
    </div>
  )
}
