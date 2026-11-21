
import '../index.css';
import './hero-frame.css';

function Hero() {
  return (
    <section className="hero-main">

      <div className="hero-royal-frame">
        <span className="hero-corner hero-corner-tl">❧</span>
        <span className="hero-corner hero-corner-tr">❧</span>
        <span className="hero-corner hero-corner-bl">❧</span>
        <span className="hero-corner hero-corner-br">❧</span>

        <div className="hero-top-ornament">
          <span></span>
          <div className="hero-ornament-diamond">✦</div>
          <span></span>
        </div>

        <img
          className="ganesh-icon"
          src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/Shriya%20%26%20Ashutosh/Vianyak%20png.png"
          alt="Shri Ganesh"
        />

        <p className="blessings-text">
          With the blessings of the Almighty &amp; our respected elders,
          <br />
          we joyfully request your gracious presence on the wedding celebration of
        </p>

        <div className="couple-block">
          <span className="couple-name shimmer-gold">Miss. Kavya B.V</span>
          <p className="family-line">
            Smt. Jyothilakshmi &amp; Sri Venkataraju B.V.
          </p>
        </div>

        <div className="ampersand-wrap">
          <div className="ampersand-line"></div>
          <span className="ampersand">&amp;</span>
          <div className="ampersand-line"></div>
        </div>

        <div className="couple-block">
          <span className="couple-name shimmer-gold">Mr. Madhusudan T.L.</span>
          <p className="family-line">
            Smt. Nirmala &amp; Sri. Laksham murthy T.M.
          </p>
        </div>

        <div className="hero-bottom-ornament">
          <span>✧</span>
          <div></div>
          <span>✧</span>
        </div>

        <div className="scroll-cue">
          <p>Scroll</p>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

    </section>
  );
}

export default Hero;
