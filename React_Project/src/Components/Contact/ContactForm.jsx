import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError('All fields are required');
            return;
        }
        
        console.log('Submitting data:', formData); // Log the form data
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            if (response.status === 201) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (err) {
            console.error('Submission error:', err);
            if (err.response) {
                console.error('Response data:', err.response.data); // Log server response
                setError('Error: ' + err.response.data.error); // Use the error message from the server
            } else {
                setError('There was an issue submitting your message. Please try again.');
            }
        }
    };
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="name">Your Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Your Email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Leave a message here"
                                id="message"
                                style={{ height: '150px' }}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button
                            className="btn BackgroundColor text-white w-100 py-3"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
                {submitted && <p className="text-success">Message sent successfully!</p>}
                {error && <p className="text-danger">{error}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
