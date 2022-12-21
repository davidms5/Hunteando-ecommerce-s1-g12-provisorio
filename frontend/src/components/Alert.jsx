import React from 'react';
import { useSelector } from 'react-redux';
import '../css/alert.css';
export const Alert = () => {
  const { alerts } = useSelector((state) => state.cart);
  return (
    <div className="alert-container">
      {alerts.map((alert, index) => (
        <div key={index} className={`alert alert-${alert}`} role="alert">
          A simple success alert—check it out!
        </div>
      ))}
    </div>
  );
};
