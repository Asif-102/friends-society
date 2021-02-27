import React from 'react';
import './FriendsInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const FriendsInfo = (props) => {
    const users = props.userInfo;
    return (
        <div>
            {
                users.map(user =><div className="friendsInfo">
                    <img src={user.image} alt=""/>
                    <h3>Name: {user.name}</h3>
                    <p>Email: <small>{user.email}</small></p>
                    <p>Phone: <small>{user.phone}</small></p>
                    <p>Salary: <small>{user.salary}</small></p>
                    <button onClick={()=>props.handleAddFriend(user.salary)} className="add-btn">add <FontAwesomeIcon icon={faUserPlus} /></button>
                </div>)
            }
        </div>
    );
};

export default FriendsInfo;