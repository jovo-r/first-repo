import TeamMember from './components/TeamMember';
import './team.style.css'

const Team = () => {

    let members = [
        {
            id: 1,
            image: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
            name: 'Alex Smith',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit veniam, quibusdam exercitationem doloremque.',
            position: 'Creative Leader',
            facebookUrl: 'https://www.facebook.com',
            xUrl: 'https://x.com',
            instagramUrl: 'https://www.instagram.com'
        },
        {
            id: 2,
            image: 'https://t4.ftcdn.net/jpg/05/18/84/73/360_F_518847387_d9UNB66RrfeqswUhTx0D5bglU47xEfy3.jpg',
            name: 'May Brown',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit veniam, quibusdam exercitationem doloremque.',
            position: 'Sales Manager',
            facebookUrl: 'https://www.facebook.com',
            xUrl: 'https://x.com',
            instagramUrl: 'https://www.instagram.com'
        },
        {
            id: 3,
            image: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
            name: 'Ann Richmond',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit veniam, quibusdam exercitationem doloremque.',
            position: 'Web Developer',
            facebookUrl: 'https://www.facebook.com',
            xUrl: 'https://x.com',
            instagramUrl: 'https://www.instagram.com'
        },
        {
            id: 4,
            image: 'https://t4.ftcdn.net/jpg/05/18/84/73/360_F_518847387_d9UNB66RrfeqswUhTx0D5bglU47xEfy3.jpg',
            name: 'Roxie Swanson',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit veniam, quibusdam exercitationem doloremque.',
            position: 'Web Designer',
            facebookUrl: 'https://www.facebook.com',
            xUrl: 'https://x.com',
            instagramUrl: 'https://www.instagram.com'
        },
    ];


    return (
        <div className="team-wrapper">
            <h1 className="title">Meet Our Team</h1>

            <div className="member-cards">
                {members.map((member) => (
                    <TeamMember
                        key={member.id}
                        image={member.image}
                        name={member.name}
                        about={member.about}
                        position={member.position}
                        facebookUrl={member.facebookUrl}
                        xUrl={member.xUrl}
                        instagramUrl={member.instagramUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Team;