
import '../index.css';
import './Invitations.css';

function Invite() {
    const events = [
        {
            title: "Reception",
            subtitle: "A Celebration of Togetherness",
            video: "https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795075727/Receptation_rabxcl.mp4"
        },
        {
            title: "Muhurtha",
            subtitle: "The Sacred Wedding Ceremony",
            video: "https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795075727/muhurtha_rahfwy.mp4"
        },
        {
            title: "Beegara Oota",
            subtitle: "A Feast of Love and Blessings",
            video: "https://res.cloudinary.com/dwtzcpmzo/video/upload/v1795076460/beegara_oota_snfwn9.mp4"
        }
    ];

    return (
        <section className="invite-section">
            <div className="invite-card">

                <div className="invite-heading">
                    <span className="invite-ornament">✦</span>
                    <span className="section-label">
                        The Celebration Unfolds
                    </span>
                    <h2 className="invite-main-title">
                        Moments to Cherish
                    </h2>
                    <div className="invite-heading-divider">
                        <span></span>
                        <b>❧</b>
                        <span></span>
                    </div>
                </div>

                <div className="invite-events">
                    {events.map((event, index) => (
                        <div
                            className="event-block reveal revealed"
                            key={event.title}
                        >
                            <div className="event-title-wrap">
                                <span className="event-number">
                                    0{index + 1}
                                </span>

                                <h3 className="event-title">
                                    {event.title}
                                </h3>

                                <p className="event-subtitle">
                                    {event.subtitle}
                                </p>

                                <span className="event-title-ornament">
                                    ✧
                                </span>
                            </div>

                            <div className="event-video-wrap unlocked">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                >
                                    <source
                                        src={event.video}
                                        type="video/mp4"
                                    />
                                    Your browser does not support video playback.
                                </video>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="invite-bottom-ornament">
                    ❧ &nbsp; With love, joy and blessings &nbsp; ❧
                </div>

            </div>
        </section>
    );
}

export default Invite;
