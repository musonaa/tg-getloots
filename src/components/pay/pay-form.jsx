import React from 'react';
import './pay-form.css';

const Payment = ({ email, subject }) => {
  const handlePayment = (method) => {
    // Handle payment logic based on the method (TON Wallet, Apple Pay, etc.)
    console.log(`Processing payment with ${method}`);
    // Here, you can integrate with the payment API
  };

  return (
    <div className="payment">
      <h3>Оплатите заказ</h3>
      <p>Email: {email}</p>
      <p>Subject: {subject}</p>
      <button onClick={() => handlePayment('TON Wallet')}>TON Wallet</button>
      <button onClick={() => handlePayment('Apple Pay')}>Apple Pay</button>
      <button onClick={() => handlePayment('Sberbank')}>Sberbank</button>
      <button onClick={() => handlePayment('Mastercard')}>Mastercard</button>
      <button onClick={() => handlePayment('Visa')}>Visa</button>
    </div>
  );
};

export default Payment;
