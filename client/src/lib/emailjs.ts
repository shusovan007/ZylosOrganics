import emailjs from '@emailjs/browser';
import { CartItem } from "@/hooks/use-cart";

interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export async function sendOrderEmail(
  customerDetails: CustomerDetails,
  cartItems: CartItem[],
  total: number
): Promise<void> {
  // EmailJS configuration - using environment variables or defaults
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xyz_organics";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_order";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  // Prepare order details
  const orderItems = cartItems.map(item => 
    `${item.name} - ${item.quantity}kg × ₹${item.price} = ₹${item.price * item.quantity}`
  ).join('\n');

  const emailData = {
    to_email: "nepat68953@misehub.com",
    from_name: "xyzOrganics Customer Order",
    reply_to: customerDetails.email,
    customer_name: customerDetails.fullName,
    customer_email: customerDetails.email,
    customer_phone: customerDetails.phone,
    customer_address: customerDetails.address,
    order_items: orderItems,
    total_amount: `₹${total}`,
    order_date: new Date().toLocaleDateString('en-IN'),
    order_time: new Date().toLocaleTimeString('en-IN'),
    message: `New order received from ${customerDetails.fullName}\n\nOrder Details:\n${orderItems}\n\nTotal: ₹${total}\n\nCustomer Contact:\nEmail: ${customerDetails.email}\nPhone: ${customerDetails.phone}\nAddress: ${customerDetails.address}`,
  };

  try {
    // Check if EmailJS environment variables are configured
    const hasEmailJSConfig = SERVICE_ID !== "service_xyz_organics" && 
                            TEMPLATE_ID !== "template_order" && 
                            PUBLIC_KEY !== "your_public_key";

    if (hasEmailJSConfig && emailjs) {
      // Send real email using EmailJS
      console.log('Sending email notification to:', emailData.to_email);
      
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailData,
        PUBLIC_KEY
      );
      
      console.log('Email sent successfully!');
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
