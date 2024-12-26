import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { IconButton } from '@mui/material';
import { SvgIcon } from '@mui/material';
import { CreditCard, AccountBalance, TransferWithinAStation, Close } from '@mui/icons-material'; // Material UI Icons

import './PaymentModal.scss'; // External SCSS for styling

const PaymentModal = ({ isOpen, onClose, onSelectPaymentMethod }) => {
  const FlutterwaveIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path m="../../img/Flutterwave.png"/> 
    </SvgIcon>
  );

  const config = {
    public_key: 'FLWPUBK_TEST-e23bd41bdf2d3fec3655c0d56aaa9bb9-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
       phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  if (!isOpen) return null;

  const handleBankCardPayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // Close the modal programmatically after payment
      },
      onClose: () => {},
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className='close-cont'>
      <div className="close-modal" onClick={onClose}>
          &times;
        </div>
        </div>
        <h1>Select Payement Method</h1>
        <div className="payment-options">
          <div 
            className="payment-option"
          
            title="Bank Card"
            onClick={() => {
              onSelectPaymentMethod('bankCard');
              handleBankCardPayment(); // Trigger the payment process for Bank Card
            }}
          >
            <FlutterwaveIcon className="option-icon" />
            <h3>Flutterwave</h3>
            <p className="description">Pay securely with your credit/debit card.</p>
          </div>
          <div 
            className="payment-option"
            onClick={() => onSelectPaymentMethod('bankTransfer')}
            title="Bank Transfer"
          >
            <TransferWithinAStation className="option-icon" />
            <h3>Bank Transfer</h3>
            <p className="description">Transfer money directly from your bank account.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
