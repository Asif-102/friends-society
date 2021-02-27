import React from 'react';
import './FriendsInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const FriendsInfo = (props) => {
    const users = props.userInfo;
    const {image,name,email,phone,salary}=users;
    return (
        <div>
                <div className="friendsInfo">
                    <img src={image} alt=""/>
                    <h3>Name: {name}</h3>
                    <p>Email: <small>{email}</small></p>
                    <p>Phone: <small>{phone}</small></p>
                    <p>Salary: <small>{salary}</small></p>
                    <button onClick={()=>props.handleAddFriend(salary)} className="add-btn">add <FontAwesomeIcon icon={faUserPlus} /></button>
                </div>
        </div>
    );
};

export default FriendsInfo;