import '../index.css';
import './hero-frame.css';

function Hero() {
  return (
    <section className="hero-main">
      
      <img className="ganesh-icon" src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/Shriya%20%26%20Ashutosh/Vianyak%20png.png" alt="Shri Ganesh" />
      <p className="blessings-text">
                With the blessings of the Almighty &amp; our respected elders,<code><br /></code>
                we joyfully request your gracious presence on the wedding celebration of
            </p>

      <div className="couple-block">
                <span className="couple-name shimmer-gold">Miss. Yashaswini S</span>
                <p className="family-line">Late Smt. Saraswathi &amp; Sri Subramani R.G</p>
            </div>
      <div class="ampersand-wrap">
                <div class="ampersand-line"></div>
                <span class="ampersand">&amp;</span>
                <div class="ampersand-line"></div>
            </div>

        <div className="couple-block">
                <span className="couple-name shimmer-gold">Mr Achutha R</span>
                <p className="family-line">Late Smt. B Padma &amp; Sri H.M Ravi</p>
            </div>
        
        <div class="scroll-cue">
            <p>Scroll</p>
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>

            

    </section>
  );
}

export default Hero;