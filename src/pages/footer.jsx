import '../index.css';
import './footer.css';

function Footer(){
    return(
        <section id="footer-section">
        <div >
            <span className='footer-name'>
              Yashaswini S &amp; Achutha R
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
                    <li>Late Smt. Saraswathi &amp; Sri Subramani R.G</li>
                    <li>Late Smt. B Padma &amp; Sri H.M Ravi</li>
                    
                </ul>
            </div>

            <div className="reveal reveal-delay-2 revealed">

                <div className="footer-kids">
                    <strong>Aishwarya S</strong> <code><br /></code>
                    <em>"Namma Akkana Maduvege Thapade Banni...."</em>
                </div>
            </div>

            <div className="footer-endnote reveal revealed">
                <div className='foot-line'></div>
                <p className='p-style' >
                    · 19-20th April, Sun-Mon 2026 · <code><br /></code>
                    <p >Chowdeshwari Devi Kalyanamantapa</p>
                </p>
            </div>
        </div>
        <code><br /> <br /></code>       
    </section>
    )
}

export default Footer;