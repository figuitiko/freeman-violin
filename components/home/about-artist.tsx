import Image from "next/image";

export const AboutArtist = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-medium-blue/20 to-lavender/30 px-4 py-24 text-black sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold">
          About the Artist
        </h2>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Alex Rivera"
              width={300}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <blockquote className="border-l-4 border-primary pl-4 text-lg italic">
              <p className="mb-6">
                "Music has been my life's journey since I was six years old.
                What started as curious plucking on my father's old guitar has
                evolved into a lifelong passion for creating sounds that move
                people."
              </p>
            </blockquote>
            <p className="mb-4">
              Alex Rivera is an award-winning musician known for blending
              electronic elements with classical instrumentation. With three
              studio albums and countless live performances across the globe,
              Alex continues to push the boundaries of contemporary music.
            </p>
            <p>
              When not touring, Alex can be found in the studio working on new
              material or collaborating with other artists across various
              genres. The upcoming album "Horizons" is set to release in Fall
              2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
