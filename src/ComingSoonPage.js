import React from 'react';
import './ComingSoonPage.css';

function ComingSoonPage() {
  return (
    <div className="coming-soon-container">
      <h1 className="coming-soon-text">New Site Coming Soon</h1>
      <a href="https://goteamup.com/p/4384575-headquarters-belfast/memberships/125216/" target="_blank" rel="noopener noreferrer">
        <button className="free-trial-button">Free Trial</button>
      </a>
      <a href="https://www.instagram.com/headquartersbelfast/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/instagram.svg" alt="Instagram Logo" className="instagram-icon" />
      </a>
    </div>
  );
}

export default ComingSoonPage;
