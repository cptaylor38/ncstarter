import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
    return (
        <div>
            {props.user ? (<h4>Welcome, {props.user.displayName}</h4>) : 'Welcome,'}
            {props.user ? (<img src={props.user.profilePhoto} />) : 'placeholder'}
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {user: auth};
}
  
  export default connect(mapStateToProps)(Profile);