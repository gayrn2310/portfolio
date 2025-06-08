import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "740ec543-da94-4cdb-8288-ab26c7508c56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's connect</h1>
                <p>I'm currently available to take on new project and collaborate, so feel free to reach out.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>crce.9922.ce@gmail.com</p>
                    </div>
                    <div className="contact-detail"> 
                        <img src={call_icon} alt="" /> <p>+91 7718964600</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Mumbai, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact