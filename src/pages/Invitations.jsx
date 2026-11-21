
import '../index.css';
import './Invitations.css'

function Invite(){
    return(
        <div className="invite-card">

            <div className="invite-top-ornament">
                ✦ ❧ ✦
            </div>

            <span className="section-label">
                The Celebration Unfolds
            </span>

            <div className="invite-heading-decoration">
                <span></span>
                <b>❦</b>
                <span></span>
            </div>

            {/* ----------------- */}
            <div className="event-block reveal revealed">

                <div className="text-center mb-4">
                    <span className="event-royal-number">I</span>
                    {/* <p className="event-subtitle">Ceremony I</p> */}
                    <h3 className="event-title">Reception</h3>
                    <span className="event-title-decoration">✧</span>
                </div>

                <div className="event-video-wrap unlocked">
                    <span className="video-corner video-corner-tl">❧</span>
                    <span className="video-corner video-corner-tr">❧</span>
                    <video autoPlay muted loop playsInline>
                        <source src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795253743/Green_and_Beige_Traditional_Indian_Wedding_Ceremony_Mobile_Video_ujeir8.mp4" type="video/mp4" />
                    </video>
                    <span className="video-corner video-corner-bl">❧</span>
                    <span className="video-corner video-corner-br">❧</span>
                </div>
            </div>

            {/* ----------------- */}
            <div className="event-block reveal revealed">

                <div className="text-center mb-4">
                    <span className="event-royal-number">II</span>
                    {/* <p className="event-subtitle">Ceremony II</p> */}
                    <h3 className="event-title">Muhurtha</h3>
                    <span className="event-title-decoration">✧</span>
                </div>

                <div className="event-video-wrap unlocked">
                    <span className="video-corner video-corner-tl">❧</span>
                    <span className="video-corner video-corner-tr">❧</span>
                    <video autoPlay muted loop playsInline>
                        <source src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795258881/Red_Yellow_and_Green_Traditional_Diwali_Dinner_Party_Invitation_h9iwgf.mp4" />
                    </video>
                    <span className="video-corner video-corner-bl">❧</span>
                    <span className="video-corner video-corner-br">❧</span>
                </div>
            </div>

            {/* ----------------- */}
            <div className="event-block reveal revealed">

                <div className="text-center mb-4">
                    <span className="event-royal-number">III</span>
                    {/* <p className="event-subtitle">Ceremony I</p> */}
                    <h3 className="event-title">Beegara Oota</h3>
                    <span className="event-title-decoration">✧</span>
                </div>

                <div className="event-video-wrap unlocked">
                    <span className="video-corner video-corner-tl">❧</span>
                    <span className="video-corner video-corner-tr">❧</span>
                    <video autoPlay muted loop playsInline>
                        <source src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795076460/beegara_oota_snfwn9.mp4" type="video/mp4" />
                    </video>
                    <span className="video-corner video-corner-bl">❧</span>
                    <span className="video-corner video-corner-br">❧</span>
                </div>
            </div>

            <div className="invite-bottom-ornament">
                ❧ &nbsp; With Love & Blessings &nbsp; ❧
            </div>

        </div>
    )
}

export default Invite;
