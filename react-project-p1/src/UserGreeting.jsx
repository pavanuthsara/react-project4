import './styles/usergreeting.css'

function UserGreeting(props) {

    const welcomeMsg = <p className="welcome-greeting">Welcome back! {props.username}</p>

    const notLogIn = <p className="not-logged-in">Please log in to continue.</p>

    return (props.isLoggedIn ? welcomeMsg : notLogIn);
}

export default UserGreeting