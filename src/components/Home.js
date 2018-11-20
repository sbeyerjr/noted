import React from "react";

import "./Home.css";

export default function Home(props) {
  return (
    <section className="fp-section">
      <div className="section-one">
        <h2>Can't remember what you practiced yesterday? Noted can help!</h2>
      </div>
      <div className="section-two">
        <h2>
          Noted is for piano students who want to set consistent practice goals
          and keep track of what they have practiced.
        </h2>
      </div>
      <div className="section-three">
        <h2>
          How does it work? 1. Set your week 2. Set your goals 3. Input your
          practice
        </h2>
      </div>
    </section>
  );
}
