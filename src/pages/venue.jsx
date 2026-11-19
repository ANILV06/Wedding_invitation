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
            <img className="venue-img" src="https://res.cloudinary.com/dwtzcpmzo/image/upload/v1795072171/copy_of_copy_of_anwiy9tdthdurl7qb7ks-x8halg0mcfacxtktjd9qyvhwcmfwvduez-p-eb2tpmtoxcilqynyrbvcoiqt5pk-yt0gcfh_tpg2lditaxor8c201ttbco8-6jwehb7zrtrbmi44fhfp8ib_s680-w680-h510-rw_tzso1a.webp" alt="convention Hall" type='o' />
            <div className="venue-info text-center">
                <h3 className="venue-name">Kollapuradamma Samudaya Bhavana</h3>
                <p className="venue-address">
                    Hanumanthapura, Tumakuru<code><br /></code> (near Kuvempunagar and Hanumanthapura bus stand)<code><br /></code>Karnataka 572103
                    
                </p>
               
                <a className="directions-btn" href="https://maps.app.goo.gl/gaFaGxxtyEVu1EuP6" target="_blank" rel="noreferrer">Get Directions</a>
            </div>
        </div>
        </div>
    </section>
)
}

export default Venue;
  
