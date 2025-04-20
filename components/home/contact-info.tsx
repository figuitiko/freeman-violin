import Image from "next/image";
import SocialLinks from "../social-links";

export const ContactInfo = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-light-blue/30 to-medium-blue/30 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Get in Touch
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-black">
                Contact Information
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-medium text-black">Email:</span>{" "}
                  contact@alexrivera.com
                </p>
                <p>
                  <span className="font-medium text-black">Management:</span> +1
                  (555) 123-4567
                </p>
                <p>
                  <span className="font-medium text-black">Based in:</span> Los
                  Angeles, California
                </p>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-xl font-semibold text-black">
                  Follow Alex
                </h4>
                <SocialLinks />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-black">
                Studio Location
              </h3>
              <div className="h-[300px] overflow-hidden rounded-lg bg-zinc-800">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Map"
                  alt="Studio location map"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
