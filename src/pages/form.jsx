import '../index.css';
import './form.css';
import { useState } from 'react';

export default function Form(){

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "4e69747c-d2ef-44d4-a163-6371f2da8f1d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
    return(
        <section id='rsvp-section'>
                    <div className="text-center reveal revealed">
            <span className="section-label">Join the Celebration</span>
            <h2 className="section-heading" >Celebrate <code><br /></code>With Us</h2>
            <p className="reveal-p reveal-delay-2 mt-4 revealed" >
                A few fun questions before the big day!
            </p>

            <form id="rsvp-form" className="rsvp-form" onSubmit={onSubmit}>

            <div className="form-card reveal revealed">
                <p className="form-card-title">Guest Details</p>
                <div className="field-group">
                    <label className="field-label" for="f-name">Your Name</label>
                    <input className="field-input" type="text" id="f-name" name="name" required placeholder="Full name" />
                </div>
                <div className="field-group" >
                    <label className="field-label" for="f-phone">Phone Number</label>
                    <input className="field-input" type="tel" id="f-phone" name="phone" required placeholder="+91 00000 00000" />
                </div>
            </div>

            <div className="form-card reveal reveal-delay-2 revealed">
                <p className="form-card-title">Leave Us a Note</p>
                <p className="form-card-subtitle">Share a wish or memory.</p>
                <textarea className="text-area" name="message" rows="3" placeholder="Write something from the heart..."></textarea>
                <p className='memory-p'>🔥 This becomes a digital memory book.</p>
            </div>

            <div className="form-card reveal reveal-delay-3 revealed">
                
                <p className="form-card-title">Words for Forever</p>
                <p className="form-card-subtitle">Advice for married life.</p>
                <textarea className="text-area" name="advice_for_forever" rows="3" placeholder="One piece of advice..."></textarea>
            </div>

            <div className="reveal reveal-delay-3 revealed" >
                <button type="submit" className="submit-btn" id="submit-btn">
                    <span id="btn-text">Send Love</span>
                </button>
                <p className="form-result">{result}</p>
            </div>
        </form>
        </div>
        </section>

    )
}

