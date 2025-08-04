export interface Vegetable {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const vegetables: Vegetable[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 120,
    image: "https://images.unsplash.com/photo-1546470427-e68c1bcef325?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Fresh, juicy organic tomatoes perfect for salads and cooking"
  },
  {
    id: 2,
    name: "Fresh Lettuce",
    price: 80,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Crisp and fresh lettuce leaves, perfect for healthy salads"
  },
  {
    id: 3,
    name: "Organic Carrots",
    price: 100,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Sweet and crunchy organic carrots, rich in vitamins"
  },
  {
    id: 4,
    name: "Bell Peppers",
    price: 150,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Colorful bell peppers packed with nutrients and flavor"
  },
  {
    id: 5,
    name: "Fresh Spinach",
    price: 60,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Iron-rich spinach leaves, perfect for healthy meals"
  },
  {
    id: 6,
    name: "Organic Broccoli",
    price: 140,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Fresh broccoli florets, packed with vitamins and minerals"
  },
  {
    id: 7,
    name: "Red Onions",
    price: 70,
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Fresh red onions with a mild, sweet flavor"
  },
  {
    id: 8,
    name: "Green Beans",
    price: 110,
    image: "https://images.unsplash.com/photo-1506316781840-5fe8350bb69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Tender green beans, perfect for stir-fries and salads"
  },
  {
    id: 9,
    name: "Organic Potatoes",
    price: 50,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    description: "Versatile organic potatoes for all your cooking needs"
  }
];
