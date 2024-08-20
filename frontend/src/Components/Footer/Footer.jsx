import React from 'react';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import FooterSocialLink from './FooterSocialLink';
import FooterCopyright from './FooterCopyright';
import './Footer.css'

const Footer = () => {
  return (
    <section>
      <div className="container-fluid bg-dark text-light footer">
        <div className="container pb-5">
          <div className="sections-container">
            <FooterSection title="Hotelier" className="section-item BackgroundColor rounded p-4" >
              <a href="index.html" style={{textDecoration:"none"}}> 
                <h1 className="text-white text-uppercase mb-3" >Paragon</h1>
              </a>
              <p className="text-white mb-0">
              "Experience unparalleled comfort and luxury at our boutique hotel."
              </p>
            </FooterSection>
            <FooterSection title="Contact" className="section-item">
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Sector-1, Block-d, NSTI Noida</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
              <div className="d-flex pt-2">
                <FooterSocialLink href="#" iconClass="fab fa-twitter" />
                <FooterSocialLink href="#" iconClass="fab fa-facebook-f" />
                <FooterSocialLink href="#" iconClass="fab fa-youtube" />
                <FooterSocialLink href="#" iconClass="fab fa-linkedin-in" />
              </div>
            </FooterSection>
            <FooterSection title="Company" className="section-item">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms & Condition</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </FooterSection>
            <FooterSection title="Services" className="section-item">
              <FooterLink href="#">Food & Restaurant</FooterLink>
              <FooterLink href="#">Spa & Fitness</FooterLink>
              <FooterLink href="#">Sports & Gaming</FooterLink>
              <FooterLink href="#">Event & Party</FooterLink>
              <FooterLink href="#">GYM & Yoga</FooterLink>
            </FooterSection>
          </div>
        </div>
        <FooterCopyright />
      </div>
    </section>
  );
};

export default Footer;
