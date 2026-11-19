import '../index.css';
import './Invitations.css'

function Invite(){
    return(
        <div className="invite-card" >
            <span className="section-label">The Celebration Unfolds</span>
                    {/* ----------------- */}
        <div className="event-block reveal revealed">
            <div className="text-center mb-4">
                {/* <p className="event-subtitle">Ceremony I</p> */}
                <h3 className="event-title">Reception</h3>
            </div>
            <div className="event-video-wrap unlocked">
                <video autoPlay muted loop playsInline>
                    <source src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795075727/Receptation_rabxcl.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

                    {/* ----------------- */}
        <div className="event-block reveal revealed">
            <div className="text-center mb-4">
                {/* <p className="event-subtitle">Ceremony II</p> */}
                <h3 className="event-title">Muhurtha</h3>
            </div>
            <div className="event-video-wrap unlocked">
                <video autoPlay muted loop playsInline>
                    <source src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795075727/muhurtha_rahfwy.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

                            {/* ----------------- */}
        <div className="event-block reveal revealed">
            <div className="text-center mb-4">
                {/* <p className="event-subtitle">Ceremony I</p> */}
                <h3 className="event-title">Beegara Oota</h3>
            </div>
            <div className="event-video-wrap unlocked">
                <video autoPlay muted loop playsInline>
                    <source src="https://res.cloudinary.com/dwtzcpmzo/image/upload/v1795075735/beegara_oota_raattp.png" type="video/mp4" />
                </video>
            </div>
        </div>


        </div>
    )
}

export default Invite;
