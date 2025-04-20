import HeroSection from "@/components/home/hero-section";
import { AboutArtist } from "@/components/home/about-artist";
import { MediaSection } from "@/components/home/media-section";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { PreBooking } from "@/components/home/pre-booking";
import { ContactInfo } from "@/components/home/contact-info";
import { Footer } from "@/components/footer";
import FloatingMenu from "@/components/floating-menu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingMenu />
      <HeroSection />

      {/* About the Artist */}
      <AboutArtist />
      {/* Media Section */}

      <MediaSection />

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Pre-Booking Section */}
      <PreBooking />

      {/* Contact Information */}
      <ContactInfo />

      {/* Footer */}
      <Footer />
    </main>
  );
}
