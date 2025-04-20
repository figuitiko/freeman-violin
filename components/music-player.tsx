"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface Track {
  id: number;
  title: string;
  duration: string;
  audioSrc: string;
}

export default function MusicPlayer({ track }: { track: Track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(value[0]);
    }
  };

  return (
    <div className="rounded-lg bg-white/80 p-4 text-black shadow-md">
      <audio
        ref={audioRef}
        src={track.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-medium-pink text-black hover:bg-light-pink"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>
          <div>
            <h4 className="font-medium">{track.title}</h4>
            <p className="text-sm text-gray-600">{track.duration}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-black"
          onClick={toggleMute}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div className="mt-4">
        <Slider
          value={[progress]}
          max={100}
          step={0.1}
          onValueChange={handleSliderChange}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
