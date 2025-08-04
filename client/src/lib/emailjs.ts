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
  // EmailJS configuration
  const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID || "service_xyz_organics";
  const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID || "template_order";
  const PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  // Prepare order details
  const orderItems = cartItems.map(item => 
    `${item.name} - ${item.quantity}kg × ₹${item.price} = ₹${item.price * item.quantity}`
  ).join('\n');

  const emailData = {
    to_email: "nepat68953@misehub.com",
    customer_name: customerDetails.fullName,
    customer_email: customerDetails.email,
    customer_phone: customerDetails.phone,
    customer_address: customerDetails.address,
    order_items: orderItems,
    total_amount: `₹${total}`,
    order_date: new Date().toLocaleDateString('en-IN'),
    order_time: new Date().toLocaleTimeString('en-IN'),
  };

  try {
    // In a real implementation, you would use EmailJS here
    // For now, we'll simulate the email sending
    console.log('Order email would be sent with data:', emailData);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demonstration, we'll just log the order details
    console.log('Order Details:');
    console.log('Customer:', customerDetails);
    console.log('Items:', cartItems);
    console.log('Total:', total);
    
    // In production, uncomment and configure EmailJS:
    /*
    const { default: emailjs } = await import('@emailjs/browser');
    
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData,
      PUBLIC_KEY
    );
    */
    
  } catch (error) {
    console.error('Failed to send order email:', error);
    throw new Error('Failed to process order. Please try again.');
  }
}
