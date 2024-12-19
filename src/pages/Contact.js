import React, { useState } from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);

    // Simulate sending email (replace with actual email sending logic)
    sendEmail(formData);

    // Show confirmation message
    setConfirmationMessage('Message received!');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const sendEmail = (data) => {
    // Simulate sending email to Mryoussefaymangad@gmail.com
    console.log(`Sending email to Mryoussefaymangad@gmail.com with data:`, data);
    // In a real application, you would use an API to send the email
  };

  return (
    <div className="contact-container">
      <div className="cyber-container slide-up" data-augmented-ui="tl-clip br-clip exe">
        <div className="contact-content">
          <div className="header">CONTACT TERMINAL</div>
          <div className="contact-grid">
            <div className="form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>NAME:</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    data-augmented-ui="tl-clip br-clip exe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>PHONE:</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    data-augmented-ui="tl-clip br-clip exe"
                    pattern="[0-9]{11}"
                    title="Please enter a valid 11-digit phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>EMAIL:</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    data-augmented-ui="tl-clip br-clip exe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>MESSAGE:</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    rows="5"
                    data-augmented-ui="tl-clip br-clip exe"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="submit-btn"
                  data-augmented-ui="tl-clip br-clip exe"
                >
                  TRANSMIT MESSAGE
                </button>
              </form>
              {confirmationMessage && (
                <div className="confirmation-message" style={{ border: '2px solid green', padding: '1rem', marginTop: '1rem', color: 'green' }}>
                  {confirmationMessage}
                </div>
              )}
            </div>
            <div className="map-section" data-augmented-ui="tl-clip br-clip exe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789012!2d31.123456789012!3d30.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458456789abcdef%3A0x1234567890abcdef!2sSecond%20Cup%20Masaken%20Sheraton!5e0!3m2!1sen!2seg!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="location-map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
