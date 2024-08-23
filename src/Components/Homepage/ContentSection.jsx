import './ContentSection.css';
import React from "react";
import { Link } from 'react-router-dom';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ContentSection() {
  return (
    <>
      <div className="content-section">
        <div className="content-box">
          <h2>Explore the Wiki</h2>
          <p>
            Dive into our detailed guides on all the features in-game, including
            items, mechanics, and strategies. Stay up to date with the latest
            updates, events, and special announcements. Our community-driven wiki
            is constantly evolving, so be sure to check back often!
          </p>
          <Link to="/wiki" className="text-link">Go to Wiki <FontAwesomeIcon icon={faAnglesRight} /></Link>
        </div>
        <div className="content-box">
          <h2>Rules and Guidelines</h2>
          <p>
            Stay informed about our community rules and guidelines. Each rule is
            outlined in its own tab for easy navigation, ensuring you understand
            how to play fairly and respectfully.
          </p>
          <Link to="/Rules" className="text-link">Go to Rules <FontAwesomeIcon icon={faAnglesRight} /></Link>
        </div>
        <div className="content-box">
          <h2>Player Resources</h2>
          <p>
            Find helpful resources, including tutorials, walkthroughs, and FAQs to
            assist you in your journey on EndPixel.
          </p>
          <Link to="/Resources" className="text-link">Go to Resources <FontAwesomeIcon icon={faAnglesRight} /></Link>
        </div>
        <div className="content-box">
          <h2>Community Contributions</h2>
          <p>
            Learn from the community and share your knowledge. Contribute to the
            wiki by adding your insights and experiences.
          </p>
          <Link to="/Contributions" className="text-link">Go to Contributions <FontAwesomeIcon icon={faAnglesRight} /></Link>
        </div>
      </div>
    </>
  );
}
