import '../about.style.css'

const AboutCard = ( {icon, header, text} ) => {
    return (
        <div className='about_item'>
            <span>{icon}</span>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    )
};

export default AboutCard;