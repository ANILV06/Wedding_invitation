
import '../index.css';
import './Glimps.css';

function Glimps(){
    return(
        <div className="text-center">

            <div className="glimps-top-ornament">
                ✦ ❧ ✦
            </div>

            <span className="section-label">A Glimpse of Us</span>

            <h2 className="section-heading">
                Our Beautiful <br />
                Moments
            </h2>

            <div className="ornament mt-4">
                <div className="ornament-line rev"></div>
                <span className="glimps-flower">❦</span>
                <div className="ornament-line"></div>
            </div>

            <div className="memories-frame reveal reveal-delay-2 revealed">

                <span className="memories-corner memories-tl">❧</span>
                <span className="memories-corner memories-tr">❧</span>

                <div className="memories-inner">
                    <video autoPlay loop muted playsInline>
                        <source
                            src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795069375/kavya_vrku7e.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <span className="memories-corner memories-bl">❧</span>
                <span className="memories-corner memories-br">❧</span>

            </div>

            <p className="element text-center reveal reveal-delay-3 mt-8 revealed">
                A moment captured in time, forever in our hearts
            </p>

            <div className="glimps-bottom-ornament">
                ✧ &nbsp; A Lifetime of Memories &nbsp; ✧
            </div>

        </div>
    )
}

export default Glimps;
