import emailjs from '@emailjs/browser';
import { CartItem } from "@/hooks/use-cart";
import { randomUUID } from "crypto";

interface CustomerDetails {
  // fullName: string;
  // email: string;
  // phone: string;
  // address: string;

   fullName: string;
  email: string;
  phone: string;
  businessName: string;
  address: string;
  additionalInfo: string;
  expectedDate: string;
}

export async function sendOrderEmail(
  customerDetails: CustomerDetails,
  cartItems: CartItem[],
  total: number
): Promise<void> {
  // EmailJS configuration - using environment variables or defaults
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_h8ypspf";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_4qa4jzq";
  const TEMPLATE_ID_SELLER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_SELLER || "template_8tcjsw6";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ByrP-AmIYSlJqlZAL";

//  Prepare order details
const totalAmt = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0); 


const orderItems = cartItems.map(item => ({
  name: item.name,
  units: `${item.quantity}kg`,
  price: item.price * item.quantity, // total price for this item
  image_url: item.image // make sure your cartItems have image_url property
}));

const costObj = {

  shipping : "0.00",
    total: totalAmt
 }

const id = (1e7 + -1e3 + -4e3 + -8e3 + -1e11)
  .toString()
  .replace(/[018]/g, c =>
    (Number(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16)
  );

const orderItemsString = cartItems
  .map(item => `${item.name} - ${item.quantity}kg × ₹${item.price} = ₹${item.price * item.quantity}`)
  .join('\n');

  
  const emailData = {
    email: customerDetails.email,
    from_name: "Zylos Organics Customer Order",
   // reply_to: "shusovanofficial@gmail.com",
    customer_name: customerDetails.fullName,
    customer_email: customerDetails.email,
    customer_phone: customerDetails.phone,
    bussinessName: customerDetails.businessName,
    customer_address: customerDetails.address,
    cost :costObj,
    orders: orderItems,
    order_id: id,
    order_date: new Date().toLocaleDateString('en-IN'),
    order_time: new Date().toLocaleTimeString('en-IN'),
    message: `New order received from ${customerDetails.fullName}\n\nOrder Details:\n${orderItemsString}\n\nTotal: ₹${total}\n\nCustomer Contact:\nEmail: ${customerDetails.email}\nPhone: ${customerDetails.phone}\nAddress: ${customerDetails.address}`,
  };

  const emailDataSeller = {
   // email: customerDetails.email,
    from_name: "Zylos Organics Customer Order",
   // reply_to: "shusovanofficial@gmail.com",
    name: customerDetails.fullName,
    email: customerDetails.email,
    phone: customerDetails.phone,
    address: customerDetails.address,
    expectedDate : customerDetails.expectedDate,
    additionalInfo : customerDetails.additionalInfo,
    bussinessName: customerDetails.businessName,
    order_id: id,
    date: new Date().toLocaleDateString('en-IN'),
    time: new Date().toLocaleTimeString('en-IN'),
    message: `New order received from ${customerDetails.fullName}\n\nOrder Details:\n${orderItemsString}\n\nTotal: ₹${total}\n\nCustomer Contact:\nEmail: ${customerDetails.email}\nPhone: ${customerDetails.phone}\nAddress: ${customerDetails.address}`,
  };

  try {
    // Check if EmailJS environment variables are configured
    const hasEmailJSConfig = SERVICE_ID !== "service_xyz_organics" && 
                            TEMPLATE_ID !== "template_order" && 
                            PUBLIC_KEY !== "your_public_key";

    if (hasEmailJSConfig && emailjs) {
      // Send real email using EmailJS
      console.log('Sending email notification to:', emailData.email);
      
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailData,
        PUBLIC_KEY
      );
      
      console.log('Email sent successfully to customer!');

        await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_SELLER,
        emailDataSeller,
        PUBLIC_KEY
      );


      console.log('Email sent successfully to seller!');

    } else {
      // Simulate email sending for development
      console.log('EmailJS not configured - simulating email sending');
      console.log('Order email would be sent with data:', emailData);
    }
    
    // Log order details for development
    console.log('Order processed successfully:');
    console.log('Customer:', customerDetails);
    console.log('Items:', cartItems);
    console.log('Total:', `₹${total}`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success
    return Promise.resolve();
    
  } catch (error) {
    console.error('Failed to send order email:', error);
    // Still allow order to complete even if email fails
    console.log('Order completed but email notification failed');
    return Promise.resolve();
  }
}
