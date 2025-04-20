"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Textarea } from "../ui/textarea";
import { Calendar } from "lucide-react";

export const PreBooking = () => {
  return (
    <section
      id="booking"
      className="bg-gradient-to-b from-medium-pink/30 to-light-blue/30 px-4 py-24 text-black sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Book the Artist
        </h2>
        <div className="mx-auto max-w-2xl rounded-lg bg-white/80 p-6 shadow-lg">
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-lavender/50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-lavender/50"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="eventDate"
                className="mb-2 block text-sm font-medium"
              >
                Date of Event
              </label>
              <div className="relative">
                <Input
                  id="eventDate"
                  type="date"
                  className="bg-lavender/50 pl-10"
                  required
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Event details, requirements, etc."
                className="min-h-[120px] bg-lavender/50"
                required
              />
            </div>

            <div>
              <label htmlFor="file" className="mb-2 block text-sm font-medium">
                Upload Rider or Event Specs (optional)
              </label>
              <Input
                id="file"
                type="file"
                className="cursor-pointer bg-lavender/50"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="prePayment"
                className="h-4 w-4 rounded border-gray-300 text-medium-pink focus:ring-medium-pink"
              />
              <label htmlFor="prePayment" className="text-sm font-medium">
                I would like to make a pre-reservation payment (50% deposit)
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-medium-pink text-black hover:bg-light-pink"
            >
              Submit Booking Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
