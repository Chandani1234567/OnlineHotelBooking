import React from 'react';
import TeamMember from './TeamMember';
import withAnimation from '../../hoc/withAnimation';

const TeamSection = () => {
  return (
    <section id="team">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title text-center fontColor fontWeight text-uppercase">Our Team</h6>
            <h1 className="mb-5 fontWeight">Explore Our <span className="fontColor fontWeight text-uppercase">Team</span></h1>
          </div>
          <div className="row g-4">
            <TeamMember
              imgSrc="img/chandani.jpg"
              name="Chandani Verma"
              designation="Full Stack Developer"
              delay="0.1s"
              linkedin="https://www.linkedin.com/in/chandni-verma-947519206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              github="https://github.com/Chandani1234567"
              instagramLink="https://www.instagram.com/chandaniverma565?igsh=MWNkNjluZm94dGFseQ=="
            />
            <TeamMember
              imgSrc="img/aanchal.jpg"
              name="Aanchal Kumari"
              designation="Full Stack Developer"
              delay="0.3s"
              linkedin="https://www.linkedin.com/in/aanchal-kumari-29a40a252/"
              github="https://github.com/aanchal5555"
              instagramLink="https://twitter.com/AnchalK68223112"
            />
            <TeamMember
              imgSrc="img/khushboo.jpg"
              name="Khushboo Rai"
              designation="Full Stack Developer"
              delay="0.5s"
              linkedin="https://www.linkedin.com/in/khushboo-rai-a331a7244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              github="https://github.com/khushboo55555"
              instagramLink="https://instagram.com/khushboo"
            />
            <TeamMember
              imgSrc="img/vinita.jpg"
              name="Vinita Rawat"
              designation="Full Stack Developer"
              delay="0.7s"
              linkedin="https://facebook.com/vinita"
              github="https://twitter.com/vinita"
              instagramLink="https://instagram.com/vinita"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withAnimation(TeamSection, 'animate__fadeInUp');
