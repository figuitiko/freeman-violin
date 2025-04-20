import { events } from "@/lib/constants";
import React from "react";
import EventCard from "../event-card";

export const UpcomingEvents = () => {
  return (
    <section
      id="events"
      className="bg-gradient-to-b from-light-pink/30 to-medium-pink/30 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Upcoming Events
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
