
import React, { useState } from "react";

export default function Nyhed() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setPopupMsg("Please enter a valid email address.");
      setShowPopup(true);
      return;
    }
    try {
      const res = await fetch("https://hifi-api-howz.onrender.com/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setPopupMsg("Thank you for signing up!");
        setEmail("");
      } else {
        setPopupMsg("Something went wrong. Please try again.");
      }
    } catch {
      setPopupMsg("Network error. Please try again.");
    }
    setShowPopup(true);
  };

  return (
    <section className="nyhed-section">
      <div className="nyhed">
        <h3>SIGN UP FOR OUR NEWSLETTER</h3>
        <p>
          Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="nyhed-btn">Sign up</button>
        </form>
        {showPopup && (
          <div className="nyhed-popup">
            <div className="nyhed-popup-content">
              <p>{popupMsg}</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}