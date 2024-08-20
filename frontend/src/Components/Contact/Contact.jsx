import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className="container-xxl py-5" id='contact'>
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title text-center fontColor  text-uppercase">Contact Us</h6>
                    <h1 className="mb-5 fontWeight"><span className="fontColor fontWeight text-uppercase">Contact</span> For Any Query</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <ContactInfo type="Booking" email="book@example.com" />
                            <ContactInfo type="General" email="ourhotel@gmail.com" />
                            <ContactInfo type="Technical" email="tech@example.com" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <iframe 
                            className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.678451428804!2d78.32145037539425!3d30.132013274879686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091644c4557c05%3A0xadba3e0b768ab084!2sHotel%20Rishikesh%20Grand!5e0!3m2!1sen!2sin!4v1718994413632!5m2!1sen!2sin" 
                            width="600" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
