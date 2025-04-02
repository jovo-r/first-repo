import '../team.style.css'

const TeamMember = ( {image, name, about, position, facebookUrl, xUrl, instagramUrl} ) => {
    return (
        <div className='team-member-card'>
            <img className='member-image' src={image}></img>
            <h4 className='member-name'>{name}</h4>
            <p className='member-about'>{about}</p>
            <p className='member-position'>{position}</p>
            <div className='member-social-networks'>
                <a href={facebookUrl} target='_blank'>
                    <img src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png'></img>
                </a>
                <a href={xUrl} target='_blank'>
                    <img src='https://cdn-icons-png.flaticon.com/512/5969/5969020.png'></img>
                </a>
                <a href={instagramUrl} target='_blank'>
                    <img src='https://cdn-icons-png.flaticon.com/512/15707/15707749.png'></img>
                </a>
            </div>
        </div>
    );
};

export default TeamMember;