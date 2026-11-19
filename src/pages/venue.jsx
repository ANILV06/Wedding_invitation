
import '../index.css';
import './venue.css';

function Venue(){
    return(
        <section className="venue-section" id='venue-section'>

            <div className="venue-royal-ornament">
                ✦ ❧ ✦
            </div>

            <div className="text-center reveal revealed">

                <span className="section-label">Where Love Awaits</span>

                <h2 className="section-heading">
                    Our Wedding <br />
                    Venue
                </h2>

                <div className="ornament mt-4 mb-8">
                    <div className="ornament-line rev"></div>
                    <span className="venue-flower">❦</span>
                    <div className="ornament-line"></div>
                </div>

                <div className="venue-card reveal reveal-delay-2 revealed">

                    <div className="venue-image-frame">
                        <span className="venue-image-corner venue-corner-tl">❧</span>
                        <span className="venue-image-corner venue-corner-tr">❧</span>

                        <img
                            className="venue-img"
                            src="https://res.cloudinary.com/dwtzcpmzo/image/upload/v1795072171/copy_of_copy_of_anwiy9tdthdurl7qb7ks-x8halg0mcfacxtktjd9qyvhwcmfwvduez-p-eb2tpmtoxcilqynyrbvcoiqt5pk-yt0gcfh_tpg2lditaxor8c201ttbco8-6jwehb7zrtrbmi44fhfp8ib_s680-w680-h510-rw_tzso1a.webp"
                            alt="Kollapuradamma Samudaya Bhavana"
                        />

                        <span className="venue-image-corner venue-corner-bl">❧</span>
                        <span className="venue-image-corner venue-corner-br">❧</span>
                    </div>

                    <div className="venue-info text-center">

                        <span className="venue-info-ornament">✧</span>

                        <h3 className="venue-name">
                            Kollapuradamma Samudaya Bhavana
                        </h3>

                        <p className="venue-address">
                            Hanumanthapura, Tumakuru<br />
                            (near Kuvempunagar and Hanumanthapura bus stand)<br />
                            Karnataka 572103
                        </p>

                        <div className="venue-divider">
                            <span></span>
                            ❦
                            <span></span>
                        </div>

                        <a
                            className="directions-btn"
                            href="https://maps.app.goo.gl/gaFaGxxtyEVu1EuP6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Get Directions <span>↗</span>
                        </a>

                    </div>
                </div>

                <div className="venue-bottom-ornament">
                    ❧ &nbsp; We look forward to welcoming you &nbsp; ❧
                </div>

            </div>
        </section>
    )
}

export default Venue;
