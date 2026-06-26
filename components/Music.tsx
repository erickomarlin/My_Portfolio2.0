import { useState, useEffect, useRef } from "react";
import { IoPlay, IoPause, IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { motion } from "framer-motion";
import track4 from "../src/assets/Music/Chica Linda - Quincas Moreira.mp3";
import track2 from "../src/assets/Music/Easy Stroll - TrackTribe.mp3";
import track3 from "../src/assets/Music/Last Cappuccino in Rio - Chris Haugen.mp3";
import track1 from "../src/assets/Music/Mas Cafe - Casa Rosa.mp3";
import track5 from "../src/assets/Music/Peacefully - E's Jammy Jams.mp3";
import track6 from "../src/assets/Music/Remember September - Freedom Trail Studio.mp3";
import track7 from "../src/assets/Music/River Blues - TrackTribe.mp3";
import track8 from "../src/assets/Music/Three Wise People - E's Jammy Jams.mp3";
import track9 from "../src/assets/Music/We Share This - Freedom Trail Studio.mp3";

const PLAYLIST = [
  track1,
  track2,
  track3,
  track4,
  track5,
  track6,
  track7,
  track8,
  track9,
];

const Music = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Synchronize volume updates
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Track change handler: auto-plays the next track once the index advances
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = PLAYLIST[trackIndex];
      if (isPlaying) {
        audioRef.current.play().catch((err) => console.log("Blocked:", err));
      }
    }
  }, [trackIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log("Blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Triggers automatically when a song finishes playing
  const handleNextTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex + 1) % PLAYLIST.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 5,
        delay: 0.2,
      }}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-0.5 rounded-full shadow-md text-white transition-all duration-100 hover:bg-white/20"
    >
      {/* HTML5 Audio element with the onEnded hook */}
      <audio ref={audioRef} onEnded={handleNextTrack} />

      {/* Play / Pause Toggle */}
      <button
        onClick={togglePlay}
        className="p-1 hover:scale-110 active:scale-95 transition text-white"
      >
        {isPlaying ? <IoPause size={18} /> : <IoPlay size={18} />}
      </button>

      {/* Hover-to-Reveal Volume Slider */}
      <div className="flex items-center gap-1.5 max-w-5 hover:max-w-22.5 overflow-hidden transition-all duration-300 ease-in-out group">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="opacity-80 hover:opacity-100"
        >
          {isMuted || volume === 0 ? (
            <IoVolumeMute size={16} />
          ) : (
            <IoVolumeHigh size={16} />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value));
            setIsMuted(false);
          }}
          className="w-12 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
        />
      </div>
    </motion.div>
  );
};

export default Music;
