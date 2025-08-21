export interface Order {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  business_name?: string;
  address?: string;
  additional_comments?: string;
  expected_delivery_date: string; // YYYY-MM-DD
  created_at: string;
  order_summary : string;
  order_id: string;
}