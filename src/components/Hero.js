import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Mia</h1>
            <h4>A Northern Colorado Full Stack Developer</h4>
            <h4>And I make awesome</h4>
            <Link to="/contact" className="btn btn2">
              contact me
            </Link>
          
            <Link href="https://drive.google.com/uc?export=download&id=12Q8uIxWq9c604Dqnxh9xX0z_6UvoqEDw" className="btn btn2">
              resume /  cv
            </Link>
            
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero