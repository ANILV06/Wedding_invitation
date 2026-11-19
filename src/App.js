
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

function App() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const [showMain, setShowMain] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioNeedsTap, setAudioNeedsTap] = useState(false);
  const [entryStarted, setEntryStarted] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  // Start opening video after visitor interaction
  const handleClick = async () => {
    const vid = videoRef.current;

    if (!vid || entryStarted) return;

    setEntryStarted(true);
    setVideoLoading(true);
    setVideoFailed(false);

    try {
      // iPhone Safari compatible muted inline playback
      vid.muted = true;
      vid.playsInline = true;

      await vid.play();
    } catch (error) {
      console.error("Opening video playback failed:", error);

      setEntryStarted(false);
      setVideoLoading(false);
      setVideoFailed(true);
    }
  };

  // Video is ready to play
  const handleVideoReady = () => {
    setVideoLoading(false);
    setVideoFailed(false);
  };

  // When opening video finishes
  const handleVideoEnd = async () => {
    setShowMain(true);
    setVideoLoading(false);

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

  // Opening video error
  const handleVideoError = () => {
    const vid = videoRef.current;

    console.error(
      "Opening video error:",
      vid?.error?.code,
      vid?.error?.message
    );

    setVideoLoading(false);
    setVideoFailed(true);
    setEntryStarted(false);
  };

  // Enter website if opening video is unavailable
  const enterWebsite = () => {
    setShowMain(true);
    setVideoLoading(false);
    setAudioNeedsTap(true);
  };

  // Retry opening video
  const retryVideo = (event) => {
    event.stopPropagation();

    const vid = videoRef.current;

    if (!vid) return;

    setVideoFailed(false);
    setVideoLoading(true);
    setEntryStarted(false);

    vid.load();
  };

  // Play or pause background music
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

      {/* MUSIC CONTROL BUTTON */}
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

      {/* OPENING VIDEO */}
      {!showMain && (
        <div
          id="entry-gate"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-label="Tap to open wedding invitation"
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
            preload="auto"
            muted
            controls={false}
            onLoadedData={handleVideoReady}
            onCanPlay={handleVideoReady}
            onEnded={handleVideoEnd}
            onError={handleVideoError}
          >
            <source
              src="https://res.cloudinary.com/dwtzcpmzo/video/upload/f_mp4,vc_h264,ac_aac/v1795088390/mk_ygr1mj.mp4"
              type="video/mp4"
            />
          </video>

          {/* VIDEO LOADING MESSAGE */}
          {videoLoading && !videoFailed && (
            <div className="entry-loading">
              Preparing your invitation...
            </div>
          )}

          {/* VIDEO ERROR MESSAGE */}
          {videoFailed && (
            <div className="entry-error">
              Opening video unavailable. You can still enter.
            </div>
          )}

          {/* RETRY BUTTON */}
          {videoFailed && (
            <button
              type="button"
              className="entry-retry"
              onClick={retryVideo}
            >
              Retry Video
            </button>
          )}

          {/* ENTER WEBSITE BUTTON */}
          <button
            type="button"
            className="entry-skip"
            onClick={(e) => {
              e.stopPropagation();
              enterWebsite();
            }}
          >
            Enter Invitation
          </button>
        </div>
      )}

      {/* MAIN WEBSITE */}
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

          {/* FALLING FLOWER PETALS */}
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

          {/* AUDIO FALLBACK */}
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
