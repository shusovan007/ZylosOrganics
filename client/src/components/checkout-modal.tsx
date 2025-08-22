// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { X, Loader2 } from "lucide-react";
// import { CartItem } from "@/hooks/use-cart";
// import { sendOrderEmail } from "@/lib/emailjs";
// import { useToast } from "@/hooks/use-toast";

// interface CheckoutModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   cartItems: CartItem[];
//   total: number;
//   onOrderComplete: () => void;
// }

// export default function CheckoutModal({ 
//   isOpen, 
//   onClose, 
//   cartItems, 
//   total, 
//   onOrderComplete 
// }: CheckoutModalProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: ''
//   });
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await sendOrderEmail(formData, cartItems, total);
      
//       toast({
//         title: "Order Placed Successfully!",
//         description: `Thank you ${formData.fullName}! We'll contact you soon at ${formData.phone} for delivery confirmation.`,
//       });

//       // Reset form
//       setFormData({
//         fullName: '',
//         email: '',
//         phone: '',
//         address: ''
//       });

//       onOrderComplete();
//     } catch (error) {
//       toast({
//         title: "Order Failed",
//         description: "There was an error processing your order. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <CardTitle className="text-2xl">Checkout</CardTitle>
//             <Button variant="ghost" size="sm" onClick={onClose}>
//               <X className="w-5 h-5" />
//             </Button>
//           </div>
//         </CardHeader>
        
//         <CardContent>
//           {/* Order Summary */}
//           <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//             <h4 className="font-semibold mb-2">Order Summary</h4>
//             <div className="space-y-1 text-sm">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex justify-between">
//                   <span>{item.name} × {item.quantity}kg</span>
//                   <span>₹{item.price * item.quantity}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="border-t pt-2 mt-2 font-semibold flex justify-between">
//               <span>Total:</span>
//               <span className="text-organic-green">₹{total}</span>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="fullName">Full Name *</Label>
//               <Input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 required
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="mt-1"
//               />
//             </div>
            
//             <div>
//               <Label htmlFor="email">Email *</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1"
//               />
//             </div>
            
//             <div>
//               <Label htmlFor="phone">Phone *</Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-1"
//               />
//             </div>
            
//             <div>
//               <Label htmlFor="address">Address *</Label>
//               <Textarea
//                 id="address"
//                 name="address"
//                 required
//                 rows={3}
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="mt-1"
//               />
//             </div>
            
//             <Button 
//               type="submit" 
//               disabled={isSubmitting}
//               className="w-full bg-organic-green hover:bg-organic-green/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                   Processing...
//                 </>
//               ) : (
//                 'Place Order'
//               )}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Loader2 } from "lucide-react";
import { CartItem } from "@/hooks/use-cart";
import { sendOrderEmail } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  total: number;
  onOrderComplete: () => void;
}

function getISTDate(offsetDays = 0) {
  const now = new Date();
  // Convert to IST (UTC +5:30)
  const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
  istTime.setDate(istTime.getDate() + offsetDays);
  return istTime.toISOString().split("T")[0];
}

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  cartItems, 
  total, 
  onOrderComplete 
}: CheckoutModalProps) {

   const tomorrow = getISTDate(1);   // min: tomorrow
  const maxDate = getISTDate(3);  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    address: '',
    additionalInfo: '',
    expectedDate: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendOrderEmail(formData, cartItems, total);
      
      toast({
        title: "Order Placed Successfully!",
        description: `Thank you ${formData.fullName}! We'll contact you soon at ${formData.phone} for delivery confirmation.`,
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        businessName: '',
        address: '',
        additionalInfo: '',
        expectedDate: ''
      });

      onOrderComplete();
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const today = new Date().toISOString().split("T")[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Checkout</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Order Summary */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Order Summary</h4>
            <div className="space-y-1 text-sm">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} × {item.quantity}kg</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-2 mt-2 font-semibold flex justify-between">
              <span>Total:</span>
              <span className="text-organic-green">₹{total}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            {/* Business Name */}
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Textarea
                id="businessName"
                name="businessName"
                rows={2}
                placeholder="Enter your business or company name"
                value={formData.businessName}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="address">Address *</Label>
              <Textarea
                id="address"
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="additionalInfo">Additional Comments</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                placeholder="Any extra details or instructions..."
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div className="space-y-2">
            <div>
              <Label htmlFor="expectedDate">Expected Delivery Date *</Label>
              <Input
                type="date"
                id="expectedDate"
                name="expectedDate"
                required
                // min={today}
                //  max={new Date(new Date(today).getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]} // today + 3 days

                min={tomorrow}
          max={maxDate}
                value={formData.expectedDate}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <p className="text-sm text-gray-500 italic">
        Note : This is the estimated delivery time. Please note that delivery time is affected by external factors also, we appreciate your patience.
      </p>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-organic-green hover:bg-organic-green/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Place Order'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
