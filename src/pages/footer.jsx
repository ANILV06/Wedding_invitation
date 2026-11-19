import '../index.css';
import './footer.css';

function Footer(){
    return(
        <section id="footer-section">
        <div >
            <span className='footer-name'>
              Kavya B.V  &amp; Madhusudana T.L
            </span>
            <div >
                <div ></div>
                <span>♥</span>
                <div></div>
            </div>
        </div>

        <div className="footer-grid">
            <div className="reveal revealed">
                <span className="footer-heading">With Compliments From</span>
                <ul className="footer-list">
                    <li>Smt. Jyothilakshmi &amp; Sri Venkataraju B.V.</li>
                    <li>Smt. Nirmala &amp; Sri Lakshmimurthy T.M.</li>
                    
                </ul>
            </div>

            <div className="reveal reveal-delay-2 revealed">

                <div className="footer-kids">
                    <strong>Vinod Kumar</strong> <code><br /></code>
                    <em>"Nanna Preethiya Thangiya Maduvege Thapade Banni...."</em>
                </div>
            </div>

            <div className="footer-endnote reveal revealed">
                <div className='foot-line'></div>
                <p className='p-style' >
                    · 28-29th November, Sat-Sun 2026 · <code><br /></code>
                    <p >Sri Kollapuradamma Samudaya Bhavana</p>
                </p>
            </div>
        </div>
        <code><br /> <br /></code>       
    </section>
    )
}

export default Footer;
