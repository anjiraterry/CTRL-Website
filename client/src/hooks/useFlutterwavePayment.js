import { useCallback } from 'react';
import { useFlutterwave } from 'flutterwave-react-v3';

const useFlutterwavePayment = (user, amount, title) => {

  const config = {
    public_key: 'FLWPUBK_TEST-e23bd41bdf2d3fec3655c0d56aaa9bb9-X',
    tx_ref: Date.now(),
    amount: parseFloat(amount) , 
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user?.email,
      phone_number: user?.phone_number,
      name: user?.username,
    },
    customizations: {
      title: title,
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };


  const handleFlutterPayment = useFlutterwave(config);

 
  const handlePayment = useCallback(() => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
       
   
      },
      onClose: () => {
        console.log('Payment modal closed');
      },
    });
  }, [handleFlutterPayment]);

  return { handlePayment };
};

export default useFlutterwavePayment;
