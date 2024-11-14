import { toast } from "react-toastify";

export const handlePayment = async (projectId) => {
  const response = await fetch(`http://localhost:5001/api/payment/${projectId}`, {
    method: 'POST',
  });
  const data = await response.json();
  const userPhone = prompt("Please enter your phone number:");

  if (!userPhone || !/^[6-9]\d{9}$/.test(userPhone)) {
    toast.error("Invalid phone number.");
    return;
  }

  if (response.ok) {
    const options = {
      key: 'rzp_live_afo9xw5T1MT8gE', // Replace with your Razorpay live/test key
      amount: data.amount,
      currency: data.currency,
      order_id: data.orderId,
      name: 'Kraf Technology',
      description: 'Payment for Project Purchase',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: userPhone,
      },
      notes: {
        address: 'Customer Address',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } else {
    alert('Error fetching Razorpay order.');
  }
};