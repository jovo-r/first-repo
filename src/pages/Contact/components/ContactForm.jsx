import '../contact.style.css'

const ContactForm = () => {
    return (
        <div className='form_wrapper'>
            <div className='form_input_fields'>
                <section className='form_section_fields'>
                    <input className='form_input' type='text' placeholder='Your Name *'></input>
                    <input className='form_input' type='text' placeholder='Your Email *'></input>
                    <input className='form_input' type='text' placeholder='Your Phone *'></input>
                </section>
                <textarea placeholder='Your Messange *'></textarea>
            </div>

            <button className='form_btn'>SEND MESSAGE</button>


        </div>
    );
};

export default ContactForm;