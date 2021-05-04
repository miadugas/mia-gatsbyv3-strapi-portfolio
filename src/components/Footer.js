import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> Mia Codes </span> all rights reserved
        </h4>
        <h6>Built in Gatsby, Data from Strapi and Hosted in Netlify</h6>
      
      </div>
    </footer>
  )
}

export default Footer