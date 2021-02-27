import React from 'react';
import './FriendsCart.css';
const FriendsCart = (props) => {
    // console.log(props);
    const salary = props.cart;
    const totalSalary = salary.reduce((total,slry)=>total+Number(slry),0);
    return (
        <div className="cartStyle">
            <h3>Overview</h3>
            <h4>Total Added: {salary.length} </h4>
            <h5>Total Salary: <small>${totalSalary}</small></h5>
        </div>
    );
};

export default FriendsCart;