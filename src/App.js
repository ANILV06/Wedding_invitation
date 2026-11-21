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
  const [entryStarted, setEntryStarted] = useState(false);

  // The intro is optional: visitors can always skip it and open the invitation.
  // Keep it muted because iOS Safari restricts videos with sound until a gesture.
  const handleOpenInvitation = async () => {
    const introVideo = videoRef.current;

    if (!introVideo) {
      setShowMain(true);
      return;
    }

    // A second tap skips the intro immediately.
    if (entryStarted) {
      introVideo.pause();
      setShowMain(true);
      return;
    }

    setEntryStarted(true);
    introVideo.muted = true;

    try {
      await introVideo.play();
    } catch (error) {
      // Never leave the visitor stuck on the intro if Safari blocks playback.
      console.warn("Intro video could not play; opening invitation instead.", error);
      setShowMain(true);
    }
  };

  const handleVideoEnd = () => {
    setShowMain(true);
  };

  const handleVideoError = () => {
    // A missing/unsupported intro video must not prevent access to the invitation.
    setShowMain(true);
  };

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
    } catch (error) {
      console.warn("Music playback was blocked by the browser.", error);
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source
          src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/Ashish%20%26%20Ayushi/Jashn-E-Bahaaraa%20(Instrumental%20-%20Flute)%20%5B-2w18bd-ZQ4%5D.mp3"
          type="audio/mpeg"
        />
      </audio>

      {!showMain && (
        <div id="entry-gate">
          <video
            ref={videoRef}
            className="entry-video"
            playsInline
            muted
            preload="metadata"
            onEnded={handleVideoEnd}
            onError={handleVideoError}
          >
            <source
              src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795088390/mk_ygr1mj.mp4"
              type="video/mp4"
            />
          </video>

          <button
            type="button"
            className="entry-open-button"
            onClick={handleOpenInvitation}
          >
            {entryStarted ? "Skip Intro · Open Invitation" : "Tap to Open Invitation"}
          </button>
        </div>
      )}

      {showMain && (
        <>
          <button
            id="audio-btn"
            type="button"
            onClick={toggleAudio}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            title={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
              </svg>
            )}
          </button>

          <main className="main-container">
            <video
              className="bg-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
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
          </main>
        </>
      )}
    </>
  );
}

export default App;
