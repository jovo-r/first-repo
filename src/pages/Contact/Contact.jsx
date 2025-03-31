import ContactForm from './components/ContactForm';
import './contact.style.css'

const Contact = () => {
    return (
        <div className="contact_wrapper">
            <div className="contact_main">
                <h1 className='shadow'>CONTACT US</h1>
                <p className='shadow'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact; 