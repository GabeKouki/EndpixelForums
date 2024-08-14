import './ContentSection.css';

import React from "react";

export default function ContentSection() {
  return (
    <>
      <div className="ContentSection">
        <h2>Explore the Wiki</h2>
        <p>
          Dive into our detailed guides on all the features in-game, including
          items, mechanics, and strategies. Stay up to date with the latest
          updates, events, and special announcements. Our community-driven wiki
          is constantly evolving, so be sure to check back often!
        </p>
        <h2>Rules and Guidelines</h2>
        <p>
          Stay informed about our community rules and guidelines. Each rule is
          outlined in its own tab for easy navigation, ensuring you understand
          how to play fairly and respectfully.
        </p>
        <h2>Player Resources</h2>
        <p>
          Find helpful resources, including tutorials, walkthroughs, and FAQs to
          assist you in your journey on EndPixel.
        </p>
        <h2>Community Contributions</h2>
        <p>
          Learn from the community and share your knowledge. Contribute to the
          wiki by adding your insights and experiences.
        </p>
      </div>
    </>
  );
}
