import React from 'react'
import "./css/Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer-container">
      <div className="footer-section1">
        <h1>GitHub</h1>
        <p> Subscribe to our developer newsletter
        <br />
         <span> Get tips, technical guides, and best practices. Once a month. Right in your inbox.</span></p>
         <button className="footer-btn">Subscribe</button>
      </div>
      <br/>
      <div className="footer-section2">
      <div>
        <p>Product</p>
        <p>Features</p>
        <p>Enterprise</p>
        <p>Copilot</p>
        <p>Security</p>
        <p>Pricing</p>
        <p>Team</p>
        <p>Resources</p>
        <p>Roadmap</p>
        <p>Compare GitHub</p>
      </div>
      <div>
        <p>Platform</p>
        <p>Developer API</p>
        <p>Partners</p>
        <p>Electron</p>
        <p>GitHub Desktop</p>
      </div>
      <div>
        <p>Support</p>
        <p>Docs</p>
        <p>Community Forum</p>
        <p>Professional Services</p>
        <p>Premium Support</p>
        <p>Skills</p>
        <p>Status</p>
        <p>Contact GitHub</p>
      </div>
      <div>
        <p>Company</p>
        <p>About</p>
        <p>Customer stories</p>
        <p>Blog</p>
        <p>The ReadME Project</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Inclusion</p>
        <p>Social Impact</p>
        <p>Shop</p>
      </div>
      </div>
    </div>
    <div className="footer-last-card">
        <div className="footer-last-card1">
          <p>© 2023 GitHub, Inc.</p>
          <p>Terms</p>
          <p>Privacy (Updated 08/2022)</p>
          <p>Sitemap</p>
          <p>What is Git?</p>
        </div>
        <div className="footer-last-card2">
        <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub" />
        <img src="https://github.githubassets.com/assets/facebook-de85282d23e6.svg" alt="Facebook" />
        <img src="https://github.githubassets.com/assets/linkedin-3c0ace8edb5f.svg" alt="LinkedIn" />
        <img src="https://github.githubassets.com/assets/youtube-25bc21e924c8.svg" alt="YouTube" />
        <img src="https://github.githubassets.com/assets/x-023c3ca5e173.svg" alt="Twitch" />
        <img src="https://github.githubassets.com/assets/tiktok-5d12d948d920.svg" alt="TikTok" />
        </div>
      </div>
    </>
    
  )
}

export default Footer
