import React, { useEffect, useState } from 'react';
import './Friend.css'
import FriendsInfo from './friendsInfo/FriendsInfo';
import person from '../../data/data.json';
import FriendsCart from './friendsCart/FriendsCart';

const Friend = () => {

    const [friend, setFriend] = useState([]);

    useEffect(()=>{
        setFriend(person);
    },[])

    const [cart , setCart] = useState([]);

    const handleAddFriend=(salary)=>{
    //   console.log('added', salary);
      const newCart = [...cart, salary];
      setCart(newCart);
    }
   
    return (
        <div className="suggestFriend">
            <div className="friends-container">
                <FriendsInfo userInfo = {friend} key={friend.map(frnd => frnd.id)} handleAddFriend={handleAddFriend}></FriendsInfo>
            </div>
            <div className="friends-cart">
                <FriendsCart cart={cart}></FriendsCart>
            </div>
        </div>
    );
};

export default Friend;