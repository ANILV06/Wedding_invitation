import { useRef, useState } from "react";
import video from "./bg.mp4";

import Hero from "./pages/hero-frame";
import Timer from "./pages/Countdown";
import Glimps from "./pages/Glimps";
import Venue from "./pages/venue";
import Invite from "./pages/Invitations";
import Form from "./pages/form";
import Footer from "./pages/footer";

function App() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const [showMain, setShowMain] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const vid = videoRef.current;

    if (vid) {
      vid.muted = false;
      vid.play();

      vid.onended = () => {
        setShowMain(true);

        // 🔥 start music after video ends
        audioRef.current.play();
        setIsPlaying(true);
      };
    }
  };

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section>

      {/* ✅ AUDIO */}
      <audio ref={audioRef} loop preload="metadata">
        <source
          src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/Ashish%20%26%20Ayushi/Jashn-E-Bahaaraa%20(Instrumental%20-%20Flute)%20%5B-2w18bd-ZQ4%5D.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* ✅ AUDIO BUTTON */}
      {showMain && (
        <button id="audio-btn" onClick={toggleAudio}>
          {isPlaying ? (
            <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
            </svg>
          ) : (
            <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
            </svg>
          )}
        </button>
      )}

      {/* ENTRY VIDEO */}
      {!showMain && (
        <div id="entry-gate" onClick={handleClick}>
          <video
            ref={videoRef}
            playsInline
            preload="auto"
            muted
            className="entry-video"
          >
            <source
              src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1776072706/AY_fdhr6h.mp4"
              type="video/mp4"
            />
          </video>

          
        </div>
      )}

      {/* MAIN WEBSITE */}
      {showMain && (
        <section className="main-container">

          <video className="bg-video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>

          <div className="App">
            <div className="content-1"><Hero /></div>
            <div className="content-2"><Timer /></div>
            <div className="content-3"><Glimps /></div>
            <div className="content-4"><Venue /></div>
            <div className="content-5"><Invite /></div>
            <div className="content-6"><Form /></div>
            <div className="content-7"><Footer /></div>
          </div>

        </section>
      )}

    </section>
  );
}

export default App;