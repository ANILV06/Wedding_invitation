import '../index.css';
import './venue.css';

function Venue(){
return(
        <section className="venue-section" id='venue-section'>
        <div className="text-center reveal revealed">
            <span className="section-label">Where Love Awaits</span>
            <h2 className="section-heading" >Our Wedding <code><br /></code> Venue</h2>
            <div className="ornament mt-4 mb-8">
                <div className="ornament-line rev"></div>
                <div className="ornament-line"></div>
            </div>

            <div className="venue-card reveal reveal-delay-2 revealed">
            <img className="venue-img" src="https://res.cloudinary.com/dwtzcpmzo/image/upload/v1775896723/venue_zhnz6b.png" alt="convention Hall" type='o' />
            <div className="venue-info text-center">
                <h3 className="venue-name">Chowdeshwari Devi Kalyanamantapa</h3>
                <p className="venue-address">
                    Tank Bund Rd, Chowdeshwari Layout,<code><br /></code> old town, Yelahanka <code><br /></code>Bengaluru, Karnataka 
                    
                </p>
               
                <a className="directions-btn" href="https://maps.app.goo.gl/f4VV5kk7cBgNVnrd8" target="_blank" rel="noreferrer">Get Directions</a>
            </div>
        </div>
        </div>
    </section>
)
}

export default Venue;