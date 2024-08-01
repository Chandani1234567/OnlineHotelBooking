import React from 'react';
import TestimonialItem from './TestimonialItem';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css';
import withAnimation from '../../hoc/withAnimation';

const testimonials = [
  {
    quote: "Outstanding experience! The rooms were spotless, staff incredibly friendly, and the location perfect. Highly recommend for both business and leisure stays.",
    imgSrc: 'img/manisha.jpeg',
    name: 'Manisha Rani',
    profession: 'Social media influencer and dancer'
  },
  {
    quote: "Impeccable service and a beautiful property. The staff were courteous and attentive, making our stay truly memorable. Highly recommended for a luxurious stay.",
    imgSrc: 'img/nancy.jpeg',
    name: 'Nancy Tyagi',
    profession: 'Self-taught designe'
  },
  {
    quote: "Amazing hotel with fantastic facilities. The pool area was stunning, and the concierge was very helpful with local tips. Great value for money. Would stay again!",
    imgSrc: 'img/kangna.jpeg',
    name: 'Kangana Ranaut',
    profession: 'Bollywood Actress'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="container-xxl testimonial my-5 py-5 bg-dark " >
        <div className="container">
          <Carousel indicators={false} controls={true} interval={null}>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <TestimonialItem {...testimonial} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default withAnimation(Testimonials, 'animate__fadeIn');
