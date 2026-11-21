
import '../index.css';
import './form.css';
import { useState } from 'react';

export default function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "1158ca67-5643-4c45-9508-ccf8cf5566c9"
    );

    try {
      const response = await fetch("", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your wishes have been received ♥");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Unable to submit. Please check your internet connection.");
    }
  };

  return (
    <section id="rsvp-section">

      <div className="text-center reveal revealed">

        <div className="form-top-ornament">
          <span></span>
          <div>✦</div>
          <span></span>
        </div>

        <span className="section-label">Join the Celebration</span>

        <h2 className="section-heading">
          Celebrate
          <br />
          With Us
        </h2>

        <p className="reveal-p reveal-delay-2 mt-4 revealed">
          A few fun questions before the big day!
        </p>

        <div className="form-royal-divider">
          <span></span>
          <div>❧</div>
          <span></span>
        </div>

        <form
          id="rsvp-form"
          className="rsvp-form"
          onSubmit={onSubmit}
        >

          <div className="form-card reveal revealed">
            <div className="form-card-ornament">✧</div>

            <p className="form-card-title">Guest Details</p>

            <div className="field-group">
              <label className="field-label" htmlFor="f-name">
                Your Name
              </label>

              <input
                className="field-input"
                type="text"
                id="f-name"
                name="name"
                required
                placeholder="Full name"
              />
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="f-phone">
                Phone Number
              </label>

              <input
                className="field-input"
                type="tel"
                id="f-phone"
                name="phone"
                required
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="form-card reveal reveal-delay-2 revealed">
            <div className="form-card-ornament">✧</div>

            <p className="form-card-title">Leave Us a Note</p>
            <p className="form-card-subtitle">
              Share a wish or memory.
            </p>

            <textarea
              className="text-area"
              name="message"
              rows="3"
              placeholder="Write something from the heart..."
            ></textarea>

            <p className="memory-p">
              🔥 This becomes a digital memory book.
            </p>
          </div>

          <div className="form-card reveal reveal-delay-3 revealed">
            <div className="form-card-ornament">✧</div>

            <p className="form-card-title">Words for Forever</p>
            <p className="form-card-subtitle">
              Advice for married life.
            </p>

            <textarea
              className="text-area"
              name="advice_for_forever"
              rows="3"
              placeholder="One piece of advice..."
            ></textarea>
          </div>

          <div className="reveal reveal-delay-3 revealed form-submit-wrap">
            <button
              type="submit"
              className="submit-btn"
              id="submit-btn"
              disabled={result === "Sending..."}
            >
              <span id="btn-text">
                {result === "Sending..." ? "Sending..." : "Send Love"}
              </span>
              <span className="submit-heart">♥</span>
            </button>

            <p className="form-result" aria-live="polite">
              {result}
            </p>
          </div>

        </form>

        <div className="form-bottom-ornament">
          <span>✧</span>
          <div></div>
          <span>✧</span>
        </div>

      </div>
    </section>
  );
}
