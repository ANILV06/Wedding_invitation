
import { useRef, useState } from "react";
import video from "./bg.mp4";

import PetalFall from "./PetalFall";
import "./PetalFall.css";

import Hero from "./pages/hero-frame";
import Timer from "./pages/Countdown";
import Glimps from "./pages/Glimps";
import Venue from "./pages/venue";
import Invite from "./pages/Invitations";
import Form from "./pages/form";
import Footer from "./pages/footer";

const OPENING_VIDEO =
  "https://res.cloudinary.com/dwtzcpmzo/video/upload/f_mp4,vc_h264,ac_aac/v1795088390/mk_ygr1mj.mp4";

function App() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const [showMain, setShowMain] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioNeedsTap, setAudioNeedsTap] = useState(false);
  const [entryStarted, setEntryStarted] = useState(false);

  // Play opening video when visitor taps the landing screen
  const handleClick = async () => {
    const vid = videoRef.current;

    if (!vid || entryStarted) return;

    setEntryStarted(true);

    try {
      vid.defaultMuted = true;
      vid.muted = true;
      vid.playsInline = true;

      await vid.play();
    } catch (error) {
      console.error("Opening video playback failed:", error);
      setEntryStarted(false);
    }
  };

  // Open main website after opening video finishes
  const handleVideoEnd = async () => {
    setShowMain(true);

    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
      setAudioNeedsTap(false);
    } catch (error) {
      console.log("Audio autoplay blocked:", error);
      setIsPlaying(false);
      setAudioNeedsTap(true);
    }
  };

  // Keep landing screen clean if video fails
  const handleVideoError = () => {
    console.error("Opening video could not be loaded.");
    setEntryStarted(false);
  };

  // Background music control
  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setAudioNeedsTap(false);
    } catch (error) {
      console.log("Audio playback failed:", error);
      setIsPlaying(false);
      setAudioNeedsTap(true);
    }
  };

  return (
    <section>
      {/* BACKGROUND MUSIC */}
      <audio ref={audioRef} loop preload="none">
        <source
          src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/Ashish%20%26%20Ayushi/Jashn-E-Bahaaraa%20(Instrumental%20-%20Flute)%20%5B-2w18bd-ZQ4%5D.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* MUSIC CONTROL */}
      {showMain && (
        <button
          id="audio-btn"
          onClick={toggleAudio}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          type="button"
        >
          {isPlaying ? (
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
              />
            </svg>
          ) : (
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"
              />
            </svg>
          )}
        </button>
      )}

      {/* OPENING LANDING VIDEO */}
      {!showMain && (
        <div
          id="entry-gate"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-label="Tap to play wedding invitation"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick();
            }
          }}
        >
          <video
            ref={videoRef}
            className="entry-video"
            playsInline
            webkit-playsinline="true"
            muted
            defaultMuted
            preload="auto"
            controls={false}
            disablePictureInPicture
            onEnded={handleVideoEnd}
            onError={handleVideoError}
          >
            <source src={OPENING_VIDEO} type="video/mp4" />
          </video>
        </div>
      )}

      {/* MAIN WEDDING WEBSITE */}
      {showMain && (
        <section className="main-container">
          {/* BACKGROUND VIDEO */}
          <video
            className="bg-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={video} type="video/mp4" />
          </video>

          {/* FALLING PETALS */}
          <PetalFall />

          {/* WEBSITE SECTIONS */}
          <div className="App">
            <div className="content-1"><Hero /></div>
            <div className="content-2"><Timer /></div>
            <div className="content-3"><Glimps /></div>
            <div className="content-4"><Venue /></div>
            <div className="content-5"><Invite /></div>
            <div className="content-6"><Form /></div>
            <div className="content-7"><Footer /></div>
          </div>

          {/* MUSIC FALLBACK */}
          {audioNeedsTap && (
            <button
              type="button"
              onClick={toggleAudio}
              className="music-fallback"
            >
              Tap to play music ♫
            </button>
          )}
        </section>
      )}
    </section>
  );
}

export default App;
