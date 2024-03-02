function EventCard(props) {
    const handleClick = () => {
        alert(props.title + ' sign up successful!');
    };

    return (
        <div id={props.id} className='event-card'>
            <h2 className="card-title">{props.title}</h2>
            <img src={props.imgUrl} alt={props.imgAlt} title={props.imgAlt} />
            <p className="card-date">{props.date}</p>
            <p className="card-location">{props.location}</p>
            <p className="card-description">{props.description}</p>

            <button className="sign-up-btn" type="button" onClick={handleClick}>Sign Up</button>
        </div>
    );
}

export default EventCard;