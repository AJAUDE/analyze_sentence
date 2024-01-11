const GreetFriends = ( props ) => {
    console.log("props", props)
    return (
        <div className="profile">
            <h2>{props.name}</h2>
            <p>{props.job}</p>
            <img src={props.imgurl} alt="" />
        </div>
    );
};

GreetFriends.proptypes = {
    imgUrl: PropTypes.string,
    job: PropTypes.string,
    name: PropTypes.string
}
export default GreetFriends