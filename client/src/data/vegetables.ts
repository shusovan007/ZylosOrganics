export interface Vegetable {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

//for local 
// export const vegetables: Vegetable[] = [
//   {
//     id: 1,
//     name: "Baby Corn",
//     price: 150,
//     image: "./public/images/cartItems/babycorn.jpg",
//     description: "Tender and sweet baby corn, perfect for stir-fries and salads."
//   },
//   {
//     id: 2,
//     name: "Beans",
//     price: 107,
//     image: "./public/images/cartItems/beans-barbati.jpg",
//     description: "Fresh, crisp beans packed with fiber and nutrients."
//   },
//   {
//     id: 3,
//     name: "Beetroot",
//     price: 41,
//     image: "./public/images/cartItems/beetroot.jpg",
//     description: "Earthy and sweet beetroot, great for salads and juices."
//   },
//   {
//     id: 4,
//     name: "Bell Pepper",
//     price: 150,
//     image: "./public/images/cartItems/bellpepper.jpg",
//     description: "Bright and crunchy bell peppers full of vitamins."
//   },
//   {
//     id: 5,
//     name: "Brinjal",
//     price: 74,
//     image: "./public/images/cartItems/brinjal.jpg",
//     description: "Smooth and fresh brinjal, ideal for curries and fries."
//   },
//   {
//     id: 6,
//     name: "Broccoli",
//     price: 418,
//     image: "./public/images/cartItems/broccoli.jpg",
//     description: "Nutrient-rich broccoli florets for healthy meals."
//   },
//   {
//     id: 7,
//     name: "Cabbage",
//     price: 42,
//     image: "./public/images/cartItems/cabbage.jpg",
//     description: "Fresh, crunchy cabbage perfect for salads and stir-fries."
//   },
//   {
//     id: 8,
//     name: "Capsicum",
//     price: 125,
//     image: "./public/images/cartItems/capsicum.jpg",
//     description: "Flavorful capsicum to add color and crunch to your dishes."
//   },
//   {
//     id: 9,
//     name: "Carrot",
//     price: 48,
//     image: "./public/images/cartItems/carrot.jpg",
//     description: "Sweet, crunchy carrots rich in beta-carotene."
//   },
//   {
//     id: 10,
//     name: "Cauliflower",
//     price: 83,
//     image: "./public/images/cartItems/cauliflower.jpg",
//     description: "Fresh cauliflower florets for curries, fries, and more."
//   },
//   {
//     id: 11,
//     name: "Chilli",
//     price: 71,
//     image: "./public/images/cartItems/redchilli.jpg",
//     description: "Spicy green chillies to add heat to your recipes."
//   },
//   {
//     id: 12,
//     name: "Coriander",
//     price: 214,
//     image: "./public/images/cartItems/corriander.jpg",
//     description: "Fragrant fresh coriander leaves for garnishing and flavor."
//   },
//   {
//     id: 13,
//     name: "Cucumber",
//     price: 45,
//     image: "./public/images/cartItems/cucumber.jpg",
//     description: "Cool, refreshing cucumbers for salads and snacks."
//   },
//   {
//     id: 14,
//     name: "Garlic",
//     price: 80,
//     image: "./public/images/cartItems/garlic.jpg",
//     description: "Aromatic garlic cloves to enhance any dish."
//   },
//   {
//     id: 15,
//     name: "Ginger",
//     price: 116,
//     image: "./public/images/cartItems/ginger2.jpg",
//     description: "Fresh ginger root for flavor and health benefits."
//   },
//   {
//     id: 16,
//     name: "Onion",
//     price: 32,
//     image: "./public/images/cartItems/onion.jpg",
//     description: "Fresh onions for everyday cooking needs."
//   },
//   {
//     id: 17,
//     name: "Potato",
//     price: 26,
//     image: "./public/images/cartItems/potato2.jpg",
//     description: "Versatile potatoes for boiling, frying, or baking."
//   },
//   {
//     id: 18,
//     name: "Spinach",
//     price: 72,
//     image: "./public/images/cartItems/spinach.jpg",
//     description: "Iron-rich spinach leaves for healthy meals."
//   },
//   {
//     id: 19,
//     name: "Spring Onion",
//     price: 60,
//     image: "./public/images/cartItems/springonion.jpg",
//     description: "Fresh spring onions to add a mild onion flavor."
//   },
//   {
//     id: 20,
//     name: "Tomato",
//     price: 66,
//     image: "./public/images/cartItems/tomato2.jpg",
//     description: "Juicy tomatoes perfect for salads and cooking."
//   }
// ];


// export const vegetables: Vegetable[] = [
//   {
//     id: 1,
//     name: "Baby Corn",
//     price: 150,
//     image: "/images/cartItems/babycorn.jpg",
//     description: "Tender and sweet baby corn, perfect for stir-fries and salads."
//   },
//   {
//     id: 2,
//     name: "Beans",
//     price: 107,
//     image: "/images/cartItems/beans-barbati.jpg",
//     description: "Fresh, crisp beans packed with fiber and nutrients."
//   },
//   {
//     id: 3,
//     name: "Beetroot",
//     price: 41,
//     image: "/images/cartItems/beetroot.jpg",
//     description: "Earthy and sweet beetroot, great for salads and juices."
//   },
//   {
//     id: 4,
//     name: "Bell Pepper",
//     price: 150,
//     image: "/images/cartItems/bellpepper.jpg",
//     description: "Bright and crunchy bell peppers full of vitamins."
//   },
//   {
//     id: 5,
//     name: "Brinjal",
//     price: 74,
//     image: "/images/cartItems/brinjal.jpg",
//     description: "Smooth and fresh brinjal, ideal for curries and fries."
//   },
//   {
//     id: 6,
//     name: "Broccoli",
//     price: 418,
//     image: "/images/cartItems/broccoli.jpg",
//     description: "Nutrient-rich broccoli florets for healthy meals."
//   },
//   {
//     id: 7,
//     name: "Cabbage",
//     price: 42,
//     image: "/images/cartItems/cabbage.jpg",
//     description: "Fresh, crunchy cabbage perfect for salads and stir-fries."
//   },
//   {
//     id: 8,
//     name: "Capsicum",
//     price: 125,
//     image: "/images/cartItems/capsicum.jpg",
//     description: "Flavorful capsicum to add color and crunch to your dishes."
//   },
//   {
//     id: 9,
//     name: "Carrot",
//     price: 48,
//     image: "/images/cartItems/carrot.jpg",
//     description: "Sweet, crunchy carrots rich in beta-carotene."
//   },
//   {
//     id: 10,
//     name: "Cauliflower",
//     price: 83,
//     image: "/images/cartItems/cauliflower.jpg",
//     description: "Fresh cauliflower florets for curries, fries, and more."
//   },
//   {
//     id: 11,
//     name: "Chilli",
//     price: 71,
//     image: "/images/cartItems/redchilli.jpg",
//     description: "Spicy green chillies to add heat to your recipes."
//   },
//   {
//     id: 12,
//     name: "Coriander",
//     price: 214,
//     image: "/images/cartItems/corriander.jpg",
//     description: "Fragrant fresh coriander leaves for garnishing and flavor."
//   },
//   {
//     id: 13,
//     name: "Cucumber",
//     price: 45,
//     image: "/images/cartItems/cucumber.jpg",
//     description: "Cool, refreshing cucumbers for salads and snacks."
//   },
//   {
//     id: 14,
//     name: "Garlic",
//     price: 80,
//     image: "/images/cartItems/garlic.jpg",
//     description: "Aromatic garlic cloves to enhance any dish."
//   },
//   {
//     id: 15,
//     name: "Ginger",
//     price: 116,
//     image: "/images/cartItems/ginger2.jpg",
//     description: "Fresh ginger root for flavor and health benefits."
//   },
//   {
//     id: 16,
//     name: "Onion",
//     price: 32,
//     image: "/images/cartItems/onion.jpg",
//     description: "Fresh onions for everyday cooking needs."
//   },
//   {
//     id: 17,
//     name: "Potato",
//     price: 26,
//     image: "/images/cartItems/potato2.jpg",
//     description: "Versatile potatoes for boiling, frying, or baking."
//   },
//   {
//     id: 18,
//     name: "Spinach",
//     price: 72,
//     image: "/images/cartItems/spinach.jpg",
//     description: "Iron-rich spinach leaves for healthy meals."
//   },
//   {
//     id: 19,
//     name: "Spring Onion",
//     price: 60,
//     image: "/images/cartItems/springonion.jpg",
//     description: "Fresh spring onions to add a mild onion flavor."
//   },
//   {
//     id: 20,
//     name: "Tomato",
//     price: 66,
//     image: "/images/cartItems/tomato2.jpg",
//     description: "Juicy tomatoes perfect for salads and cooking."
//   }
// ];



export const vegetables: Vegetable[] = [
  {
    id: 1,
    name: "Avacado",
    price: 1820,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/avocado.jpg",
    description: "আভাকাডো | एवोकाडो",
  },
  {
    id: 4,
    name: "Beans",
    price: 126,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/beans.jpg",
    description: "বিনস | फलियाँ",
  },
  {
    id: 5,
    name: "Beetroot",
    price: 56,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/beetroot.jpg",
    description: "বিটরুট | चुकंदर",
  },
  {
    id: 6,
    name: "Bell Pepper",
    price: 420,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/bellpepper.jpg",
    description: "লাল, হলুদ ক্যাপসিকাম | लाल पीली शिमला मिर्च",
  },
  {
    id: 7,
    name: "Bitter Gourd",
    price: 84,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/bitter%20gourd.jpg",
    description: "করলা | करैला",
  },
  {
    id: 9,
    name: "Brinjal",
    price: 84,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/brinjal.jpg",
    description: "বেগুন | बैंगन",
  },
  {
    id: 10,
    name: "Broccoli",
    price: 560,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/broccoli.jpg",
    description: "ব্রকলি | ब्रोकोली",
  },
  {
    id: 12,
    name: "Cabbage",
    price: 33.6,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/cabbage.jpg",
    description: "বাঁধাকপি | पत्ता गोभी",
  },
  {
    id: 13,
    name: "Capsicum",
    price: 72.8,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/capsicum.jpg",
    description: "ক্যাপসিকাম | शिमला मिर्च",
  },
  {
    id: 14,
    name: "Carrot",
    price: 56,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/carrot.jpg",
    description: "গাজর | गाजर",
  },
  {
    id: 16,
    name: "Celery",
    price: 420,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/celery.jpg",
    description: "সেলারি | सेलरी",
  },
  {
    id: 20,
    name: "Cucumber",
    price: 84,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/cucumber.jpg",
    description: "শসা | खीरा",
  },
  {
    id: 21,
    name: "Drumstick",
    price: 112,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/drumstick.jpg",
    description: "ডাঁটা | सहजन (ड्रमस्टिक)",
  },
  {
    id: 22,
    name: "Garlic",
    price: 84,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/garlic.jpg",
    description: "রসুন | लहसुन",
  },
  {
    id: 23,
    name: "Ginger",
    price: 70,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/ginger2.jpg",
    description: "আদা | अदरक",
  },
  {
    id: 24,
    name: "Green Chilli",
    price: 84,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/GreenChilli.jpg",
    description: "সবুজ মরিচ | हरी मिर्च",
  },
  {
    id: 25,
    name: "Green Mango",
    price: 98,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/green%20mango.jpg",
    description: "কাঁচা আম | कच्चा आम",
  },
  {
    id: 27,
    name: "Ladies Finger",
    price: 84,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/ladies%20finger.jpg",
    description: "ঢেঁড়স | भिंडी",
  },
  {
    id: 28,
    name: "Lettuce",
    price: 420,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/lettuce.jpg",
    description: "লেটুস | लेट्यूस",
  },
  {
    id: 31,
    name: "Onion",
    price: 32,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/onion.jpg",
    description: "পেঁয়াজ | प्याज",
  },
  {
    id: 34,
    name: "Pointed Gourd",
    price: 70,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/pointed%20gourd.jpg",
    description: "পটল | परवल",
  },
  {
    id: 35,
    name: "Potato (Jyoti)",
    price: 18,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/potato2.jpg",
    description: "আলু | आलू",
  },
  {
    id: 38,
    name: "Red Cabbage",
    price: 168,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/red%20cabbage.jpg",
    description: "লাল বাঁধাকপি | लाल पत्ता गोभी",
  },
  {
    id: 40,
    name: "Red Lettuce",
    price: 420,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/red%20lettuce.jpg",
    description: "লাল লেটুস | लाल लेट्यूस",
  },
  {
    id: 41,
    name: "Ridge Gourd",
    price: 98,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/ridge%20gourd.jpg",
    description: "ঝিঙ্গা | झींगा",
  },
  {
    id: 44,
    name: "Tomato",
    price: 56,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/tomato2.jpg",
    description: "টমেটো | टमाटर",
  },
  {
    id: 45,
    name: "Zucchini",
    price: 98,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/zucchini.jpg",
    description: "জুকিনি | जुगनी",
  },
];
