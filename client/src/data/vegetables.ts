export interface Vegetable {
  id: number;
  name: string;
  price: number;
  inKg: boolean;
  inPcs: boolean;
  inBunch: boolean;
  image: string;
  description: string;
}


export const vegetables: Vegetable[] = [
  {
    id: 1,
    name: "Avocado",
    price: 850,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/avocado.jpg",
    description: "আভাকাডো | एवोकाडो"
  },
  {
    id: 2,
    name: "Baby Corn",
    price: 98,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/babycorn.jpg",
    description: "বেবি কর্ন | बेबी कॉर्न"
  },
  {
    id: 4,
    name: "Beans",
    price: 96,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/beans.jpg",
    description: "বিনস | फलियाँ"
  },
  {
    id: 5,
    name: "Beetroot",
    price: 50,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/beetroot.jpg",
    description: "বিটরুট | चुकंदर"
  },
  {
    id: 6,
    name: "Bell Pepper",
    price: 375,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/bellpepper.jpg",
    description: "লাল, হলুদ ক্যাপসিকাম | लाल पीली शिमला मिर्च"
  },
  {
    id: 7,
    name: "Bitter Gourd",
    price: 84,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/bitter%20gourd.jpg",
    description: "করলা | करैला"
  },
  {
    id: 9,
    name: "Brinjal",
    price: 84,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/brinjal.jpg",
    description: "বেগুন | बैंगन"
  },
  {
    id: 10,
    name: "Broccoli",
    price: 560,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/broccoli.jpg",
    description: "ব্রকলি | ब्रोकोली"
  },
  {
    id: 11,
    name: "Button Mushroom",
    price: 1750,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/buttonmushroom.jpg",
    description: "বোতাম মাশরুম | बटन मशरूम"
  },
  {
    id: 12,
    name: "Cabbage",
    price: 36,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/cabbage.jpg",
    description: "বাঁধাকপি | पत्ता गोभी"
  },
  {
    id: 13,
    name: "Capsicum",
    price: 100,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/capsicum.jpg",
    description: "ক্যাপসিকাম | शिमला मिर्च"
  },
  {
    id: 14,
    name: "Carrot",
    price: 48,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/carrot.jpg",
    description: "গাজর | गाजर"
  },
  {
    id: 15,
    name: "Cauliflower",
    price: 43,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/cauliflower.jpg",
    description: "ফুলকপি | फूलगोभी"
  },
  {
    id: 16,
    name: "Celery",
    price: 520,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/celery.jpg",
    description: "সেলারি | सेलरी"
  },
  {
    id: 17,
    name: "Coconut",
    price: 50,
    inKg: false,
    inPcs: true,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/coconut.jpg",
    description: "নারকেল | नारियल"
  },
  {
    id: 18,
    name: "Coriander",
    price: 200,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/corriander.jpg",
    description: "ধনে | धनिया"
  },
  {
    id: 20,
    name: "Cucumber",
    price: 88,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/cucumber.jpg",
    description: "শসা | खीरा"
  },
  {
    id: 21,
    name: "Drumstick",
    price: 100,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/drumstick.jpg",
    description: "ডাঁটা | सहजन (ड्रमस्टिक)"
  },
  {
    id: 22,
    name: "Garlic",
    price: 113,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/garlic.jpg",
    description: "রসুন | लहसुन"
  },
  {
    id: 23,
    name: "Ginger",
    price: 100,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/ginger2.jpg",
    description: "আদা | अदरक"
  },
  {
    id: 24,
    name: "Green Chilli",
    price: 100,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/GreenChilli.jpg",
    description: "সবুজ মরিচ | हरी मिर्च"
  },
  {
    id: 25,
    name: "Green Mango",
    price: 130,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/green%20mango.jpg",
    description: "কাঁচা আম | कच्चा आम"
  },
  {
    id: 27,
    name: "Ladies Finger",
    price: 84,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/ladies%20finger.jpg",
    description: "ঢেঁড়স | भिंडी"
  },
  {
    id: 28,
    name: "Lettuce",
    price: 390,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/lettuce.jpg",
    description: "লেটুস | लेट्यूस"
  },
  {
    id: 30,
    name: "Mint Leaves",
    price: 75,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/mint.jpg",
    description: "পুদিনা পাতা | पुदीना"
  },
  {
    id: 31,
    name: "Onion",
    price: 36,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/onion.jpg",
    description: "পেঁয়াজ | प्याज"
  },
  {
    id: 32,
    name: "Parsley",
    price: 65,
    inKg: false,
    inPcs: false,
    inBunch: true,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/parsley.jpg",
    description: "পার্সলে | पार्सले"
  },
  {
    id: 33,
    name: "Peas",
    price: 200,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/peas.jpeg",
    description: "মটর | मटर"
  },
  {
    id: 34,
    name: "Pointed Gourd",
    price: 72,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/pointed%20gourd.jpg",
    description: "পটল | परवल"
  },
  {
    id: 35,
    name: "Potato (Jyoti)",
    price: 22,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/potato2.jpg",
    description: "আলু | आलू"
  },
  {
    id: 36,
    name: "Pumpkin",
    price: 38,
    inKg: false,
    inPcs: true,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/pumpkin.jpg",
    description: "কুমড়া | कद्दू"
  },
  {
    id: 37,
    name: "Radish",
    price: 78,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/raddish2.jpg",
    description: "মূলা | मूली"
  },
  {
    id: 38,
    name: "Red Cabbage",
    price: 156,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/red%20cabbage.jpg",
    description: "লাল বাঁধাকপি | लाल पत्ता गोभी"
  },
  {
    id: 40,
    name: "Red Lettuce",
    price: 390,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/red%20lettuce.jpg",
    description: "লাল লেটুস | लाल लेट्यूस"
  },
  {
    id: 41,
    name: "Ridge Gourd",
    price: 84,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/ridge%20gourd.jpg",
    description: "ঝিঙ্গা | झींगा"
  },
  {
    id: 43,
    name: "Spring Onion",
    price: 250,
    inKg: false,
    inPcs: false,
    inBunch: true,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/springonion.jpg",
    description: "পেঁয়াজকলি | प्याज का पत्ता"
  },
  {
    id: 44,
    name: "Tomato",
    price: 48,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/tomato2.jpg",
    description: "টমেটো | टमाटर"
  },
  {
    id: 45,
    name: "Zucchini",
    price: 98,
    inKg: true,
    inPcs: false,
    inBunch: false,
    image: "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/zucchini.jpg",
    description: "জুকিনি | जुगनी"
  }
];