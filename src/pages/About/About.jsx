import AboutCard from './components/AboutCard';
import './about.style.css'

const About = () => {

    // drugi nacin je ovo, da definisemo niz i njega sa mapom prodjemo i komponentu
    let cards = [
        {
            id: 1,
            icon: '🔔',
            header: 'Here is a pokok',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!'
        },
        {
            id: 2,
            icon: '❤️',
            header: "Here's a heart",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!'
        },
        {
            id: 3,
            icon: '💧',
            header: 'Waterfall maybe?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!'
        },
    ];

    return (
        <div className="about_wrapper">
            <div className="about_main">
                <h1>ABOUT</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='about_items'>
                {/* <AboutCard
                    icon="🔔"
                    header="Here is a pokok"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!" />
                <AboutCard
                    icon="❤️"
                    header="Here's a heart"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!" />
                <AboutCard
                    icon="💧"
                    header="Waterfall maybe?"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!" /> */}

                {cards.map((card) => (
                    <AboutCard
                        key={card.id}
                        icon={card.icon}
                        header={card.header}
                        text={card.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default About;