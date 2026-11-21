
import '../index.css';
import './footer.css';

function Footer() {
  return (
    <section id="footer-section">
      <div className="footer-royal-frame">

        <div className="footer-top-ornament">
          <span></span>
          <div>✦</div>
          <span></span>
        </div>

        <div className="footer-title-wrap">
          <span className="footer-name">
            Kavya B.V <span className="footer-title-heart">&amp;</span> Madhusudan T.L
          </span>

          <div className="footer-heart-divider">
            <span></span>
            <div>♥</div>
            <span></span>
          </div>

          <p className="footer-blessing">
            Two hearts, one beautiful beginning
          </p>
        </div>

        <div className="footer-grid">

          <div className="reveal revealed footer-family">
            <span className="footer-heading">With Compliments From</span>

            <div className="footer-small-ornament">❧</div>

            <ul className="footer-list">
              <li>Smt. Jyothilakshmi &amp; Sri Venkataraju B.V.</li>
              <li>Smt. Nirmala &amp; Sri Lakshman murthy T.M.</li>
            </ul>
          </div>

          <div className="reveal reveal-delay-2 revealed footer-message">
            <div className="footer-message-ornament">✧</div>

            <div className="footer-kids">
              <strong>Vinod Kumar</strong>
              <em>
                "Nanna Preethiya Thangiya Maduvege Thapade Banni...."
              </em>
            </div>

            <div className="footer-message-ornament">✧</div>
          </div>

          <div className="footer-endnote reveal revealed">
            <div className="foot-line"></div>

            <div className="footer-event-details">
              <p className="footer-date">
                28–29th November, Sat–Sun 2026
              </p>

              <span className="footer-detail-divider">✦</span>

              <p className="p-style">
                Sri Kollapuradamma Samudaya Bhavana
              </p>
            </div>
          </div>

        </div>

        <div className="footer-bottom-ornament">
          <span>❧</span>
          <div></div>
          <span>❧</span>
        </div>

        <p className="footer-closing">
          Your presence will make our celebration more special
        </p>

      </div>
    </section>
  );
}

export default Footer;
