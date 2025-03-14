import PropTypes from 'prop-types'
import './styles/usergreeting.css'

function UserGreeting(props) {
    console.log('Username:', props.username);
    const welcomeMsg = <p className="welcome-greeting">Welcome back! {props.username}</p>

    const notLogIn = <p className="not-logged-in">Please log in to continue.</p>

    return (props.isLoggedIn ? welcomeMsg : notLogIn);
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}
UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: 'Guest name',
}

export default UserGreeting