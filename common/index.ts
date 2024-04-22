import FBIcon from "~/components/Icons/FBIcon.vue";
import InstaIcon from "~/components/Icons/InstaIcon.vue";
import XIcon from "~/components/Icons/XIcon.vue";
import GitIcon from "~/components/Icons/GitIcon.vue";
import YoutubeIcon from "~/components/Icons/YoutubeIcon.vue";
import type {
  CategoryItem,
  FilterItems,
  Product,
  StringType,
  TagCategories,
} from "~/types/old.index";

export const Categories: CategoryItem[] = [
  {id: 0, name: "Men's Clothing"},
  {id: 1, name: "Women's Clothing"},
  {id: 2, name: "Kids' Clothing"},
  {id: 3, name: "Accessories"},
  {id: 4, name: "Footwear"},
];

export const socialLinks = [
  {goto: "https://www.facebook.com", icon: FBIcon},
  {goto: "https://www.instagram.com", icon: InstaIcon},
  {goto: "https://www.twitter.com", icon: XIcon},
  {goto: "https://www.github.com", icon: GitIcon},
  {goto: "https://www.youtube.com", icon: YoutubeIcon},
];

export const footerShortcuts = [
  {
    title: "Information",
    shortLinks: [
      {
        name: "About",
        goto: "/about",
      },
      {
        name: "Careers",
        goto: "/careers",
      },
      {
        name: "Press",
        goto: "/press",
      },
      {
        name: "FAQ's",
        goto: "/faqs",
      },
    ],
  },
  {
    title: "Products",
    shortLinks: [
      {
        name: "New Arrivals",
        goto: "/new-arrival",
      },
      {
        name: "On Sale",
        goto: "/on-sale",
      },
      {
        name: "Top Rated",
        goto: "/top-rated",
      },
      {
        name: "Gift Cards",
        goto: "/gift-cards",
      },
    ],
  },
  {
    title: "Customer Service",
    shortLinks: [
      {
        name: "Contact Us",
        goto: "/contact-us",
      },
      {
        name: "Shipping & Returns",
        goto: "/shipping-returns",
      },
      {
        name: "Privacy Policy",
        goto: "/privacy-policy",
      },
      {
        name: "Terms & Conditions",
        goto: "/terms-and-conditions",
      },
    ],
  },
  {
    title: "My Account",
    shortLinks: [
      {
        name: "My Account",
        goto: "/profile",
      },
      {
        name: "Order History",
        goto: "/order-history",
      },
      {
        name: "Wish List",
        goto: "/wish-list",
      },
      {
        name: "Newsletter",
        goto: "/newsletter",
      },
    ],
  },
];

export const footerDescription =
  "E-commerce is unmatched when it comes to performance and scalability. Reap the benefits of having a online store that out performs all of your competitors. You can edit components to display your own information just like the one you're reading now.";

export const languages = [
  {name: "Albanian", value: "SQ"},
  {name: "Arabic", value: "AR"},
  {name: "Armenian", value: "HY"},
  {name: "Aymara", value: "AY"},
  {name: "Azerbaijani", value: "AZ"},
  {name: "Basque", value: "EU"},
  {name: "Belarusian", value: "BE"},
  {name: "Bengali", value: "BN"},
  {name: "Bhutanese", value: "BT"},
  {name: "Bosnian", value: "BS"},
  {name: "Bulgarian", value: "BG"},
  {name: "Burmese", value: "MY"},
  {name: "Catalan", value: "CA"},
  {name: "Cebuano", value: "CEB"},
  {name: "Chewa", value: "NY"},
  {name: "Chichewa", value: "NY"},
  {name: "Chinese", value: "ZH"},
  {name: "Chuvash", value: "CV"},
  {name: "Croatian", value: "HR"},
  {name: "Czech", value: "CS"},
  {name: "Danish", value: "DA"},
  {name: "Dutch", value: "NL"},
  {name: "Dzongkha", value: "DZ"},
  {name: "English", value: "EN"},
  {name: "Esperanto", value: "EO"},
  {name: "Estonian", value: "ET"},
  {name: "Faroese", value: "FO"},
  {name: "Fijian", value: "FJ"},
  {name: "Filipino", value: "FIL"},
  {name: "Finnish", value: "FI"},
  {name: "French", value: "FR"},
  {name: "Galician", value: "GL"},
  {name: "Georgian", value: "KA"},
  {name: "German", value: "DE"},
  {name: "Greek", value: "EL"},
  {name: "Gujarati", value: "GU"},
  {name: "Haitian Creole", value: "HT"},
  {name: "Hausa", value: "HA"},
  {name: "Hawaiian", value: "HAW"},
  {name: "Hebrew", value: "HE"},
  {name: "Hindi", value: "HI"},
  {name: "Hmong", value: "HMN"},
  {name: "Hungarian", value: "HU"},
  {name: "Icelandic", value: "IS"},
  {name: "Igbo", value: "IG"},
  {name: "Indonesian", value: "ID"},
  {name: "Irish", value: "GA"},
  {name: "Italian", value: "IT"},
  {name: "Japanese", value: "JA"},
  {name: "Javanese", value: "JW"},
  {name: "Kannada", value: "KN"},
  {name: "Kazakh", value: "KK"},
  {name: "Khmer", value: "KM"},
  {name: "Kinyamwezi", value: "RW"},
  {name: "Kinyarwanda", value: "RW"},
  {name: "Kirundi", value: "RN"},
  {name: "Korean", value: "KO"},
  {name: "Kurdish", value: "KU"},
  {name: "Kyrgyz", value: "KY"},
  {name: "Lao", value: "LO"},
  {name: "Latin", value: "LA"},
  {name: "Latvian", value: "LV"},
  {name: "Lingala", value: "LN"},
  {name: "Lithuanian", value: "LT"},
  {name: "Luxembourgish", value: "LB"},
  {name: "Macedonian", value: "MK"},
  {name: "Malagasy", value: "MG"},
  {name: "Malay", value: "MS"},
  {name: "Malayalam", value: "ML"},
  {name: "Maltese", value: "MT"},
  {name: "Maori", value: "MI"},
  {name: "Marathi", value: "MR"},
  {name: "Mongolian", value: "MN"},
  {name: "Montenegrin", value: "ME"},
  {name: "Myanmar", value: "MY"},
  {name: "Ndebele", value: "NR"},
  {name: "Nepali", value: "NE"},
  {name: "Norwegian", value: "NO"},
  {name: "Oriya", value: "OR"},
  {name: "Oromo", value: "OM"},
  {name: "Pampanga", value: "PAM"},
  {name: "Pashto", value: "PS"},
  {name: "Persian", value: "FA"},
  {name: "Polish", value: "PL"},
  {name: "Portuguese", value: "PT"},
  {name: "Punjabi", value: "PA"},
  {name: "Quechua", value: "QU"},
  {name: "Romanian", value: "RO"},
  {name: "Russian", value: "RU"},
  {name: "Samoan", value: "SM"},
  {name: "Scots Gaelic", value: "GD"},
  {name: "Serbian", value: "SR"},
  {name: "Sesotho", value: "ST"},
  {name: "Shona", value: "SN"},
  {name: "Sindhi", value: "SD"},
  {name: "Sinhalese", value: "SI"},
  {name: "Slovak", value: "SK"},
  {name: "Slovenian", value: "SL"},
  {name: "Somali", value: "SO"},
  {name: "Spanish", value: "ES"},
  {name: "Sundanese", value: "SU"},
  {name: "Swahili", value: "SW"},
  {name: "Swedish", value: "SV"},
  {name: "Tajik", value: "TG"},
  {name: "Tamil", value: "TA"},
  {name: "Tatar", value: "TT"},
  {name: "Telugu", value: "TE"},
  {name: "Thai", value: "TH"},
  {name: "Tibetan", value: "BO"},
  {name: "Tigrinya", value: "TI"},
  {name: "Tongan", value: "TO"},
  {name: "Turkish", value: "TR"},
  {name: "Turkmen", value: "TK"},
  {name: "Ukrainian", value: "UK"},
  {name: "Urdu", value: "UR"},
  {name: "Uzbek", value: "UZ"},
  {name: "Vietnamese", value: "VI"},
  {name: "Welsh", value: "CY"},
  {name: "Xhosa", value: "XH"},
  {name: "Yiddish", value: "YI"},
  {name: "Yoruba", value: "YO"},
  {name: "Zulu", value: "ZU"},
];

export const imageSample = [
  "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
  "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
];

const rand = Math.floor(Math.random() * imageSample.length);

export const replacing = (str: StringType) => {
  return str.replace(/\s/g, "-").toLowerCase();
};
export const imgRand = imageSample[rand];

export const shipping = 10;
export const products: Product[] = [
  {
    id: 1,
    name: "Smartwatch XYZ-2000",
    description:
      "The Smartwatch XYZ-2000 is a versatile wearable device that combines style with functionality...",
    price: 199.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free standard shipping on all orders. Expedited shipping available for an additional fee.",
    reviews: [
      {
        rating: 5,
        comment:
          "Love this smartwatch! It looks great and works seamlessly with my phone.",
      },
      {
        rating: 4,
        comment:
          "The XYZ-2000 is a solid choice for anyone looking for a reliable smartwatch.",
      },
      {
        rating: 3,
        comment: "Decent features but could use better battery life.",
      },
      {
        rating: 3,
        comment: "Decent features but could use better battery life.",
      },
      {
        rating: 1,
        comment: "Decent features but could use better battery life.",
      },
      {
        rating: 2,
        comment: "Decent features but could use better battery life.",
      },
    ],
    variants: [
      {option: "Color", values: ["Black", "Silver", "Rose Gold"]},
      {option: "Strap Material", values: ["Silicone", "Stainless Steel"]},
    ],
    specifications: [
      {key: "Dimensions", value: "42mm diameter, 12mm thickness"},
      {key: "Display", value: "1.3-inch OLED touchscreen"},
      {key: "Battery Life", value: "Up to 5 days"},
      {key: "Water Resistance", value: "IP68-rated (suitable for swimming)"},
      {key: "Compatibility", value: "Works with iOS and Android smartphones"},
    ],
    warranty: "1-year limited warranty included",
    brand: "TechGear",
    category: "Electronics > Wearable Devices > Smartwatches",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    description:
      "Experience high-quality sound and ultimate comfort with our Wireless Bluetooth Headphones...",
    price: 79.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all headphone orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment: "These headphones are amazing! Sound quality is top-notch.",
      },
      {
        rating: 4,
        comment:
          "Comfortable to wear for long periods. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good sound quality, but the Bluetooth connection can be a bit spotty.",
      },
    ],
    variants: [
      {option: "Color", values: ["Black", "White", "Blue"]},
      {option: "Style", values: ["Over-Ear", "On-Ear", "In-Ear"]},
    ],
    specifications: [
      {key: "Driver Size", value: "40mm"},
      {key: "Bluetooth Version", value: "5.0"},
      {key: "Battery Life", value: "Up to 20 hours"},
      {key: "Noise Cancellation", value: "Active Noise Cancellation"},
      {key: "Microphone", value: "Built-in microphone for hands-free calls"},
    ],
    warranty: "2-year limited warranty included",
    brand: "SoundTech",
    category: "Electronics > Audio > Headphones",
  },
  {
    id: 3,
    name: "Laptop XYZ-500",
    description:
      "The Laptop XYZ-500 is a powerful and portable computing device designed to meet all your needs...",
    price: 999.99,
    images: [],
    availability: "Out of Stock",
    shippingInfo: "Pre-orders available. Estimated delivery within 4-6 weeks.",
    reviews: [
      {
        rating: 5,
        comment:
          "This laptop is a beast! Super fast and great for multitasking.",
      },
      {
        rating: 4,
        comment:
          "Impressed with the build quality and performance. Highly recommended.",
      },
      {
        rating: 3,
        comment: "Good laptop overall, but the battery life could be better.",
      },
    ],
    variants: [
      {
        option: "Processor",
        values: ["Intel Core i7", "Intel Core i5", "AMD Ryzen 7"],
      },
      {
        option: "Storage",
        values: ["512GB SSD", "1TB HDD", "256GB SSD + 1TB HDD"],
      },
    ],
    specifications: [
      {key: "Display Size", value: "15.6 inches"},
      {key: "Processor", value: "Intel Core i7-10750H"},
      {key: "RAM", value: "16GB DDR4"},
      {key: "Graphics", value: "NVIDIA GeForce RTX 2060"},
      {key: "Operating System", value: "Windows 10 Home"},
    ],
    warranty: "1-year manufacturer warranty included",
    brand: "TechGenius",
    category: "Electronics > Computers > Laptops",
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    description:
      "Our Organic Cotton T-Shirt is made from 100% certified organic cotton for superior comfort...",
    price: 29.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all apparel orders. Delivery within 2-4 business days.",
    reviews: [
      {
        rating: 5,
        comment: "Soft and comfortable! Love the organic cotton feel.",
      },
      {
        rating: 4,
        comment: "Great fit and quality. Will definitely buy more colors.",
      },
      {rating: 3, comment: "Nice shirt, but shrinks a bit after washing."},
    ],
    variants: [
      {option: "Color", values: ["White", "Black", "Navy Blue", "Gray"]},
      {option: "Size", values: ["S", "M", "L", "XL"]},
    ],
    specifications: [
      {key: "Material", value: "100% Organic Cotton"},
      {key: "Fit", value: "Regular Fit"},
      {key: "Care Instructions", value: "Machine wash cold, tumble dry low"},
    ],
    warranty: "No warranty applicable",
    brand: "EcoWear",
    category: "Clothing > Men's Clothing > T-Shirts",
  },
  {
    id: 5,
    name: "Digital Camera DSLR-1000",
    description:
      "Capture stunning photos and videos with our DSLR-1000 Digital Camera...",
    price: 799.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all camera orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Amazing camera! Takes professional-quality photos and videos.",
      },
      {
        rating: 4,
        comment: "Great value for the price. Easy to use, even for beginners.",
      },
      {
        rating: 3,
        comment: "Good camera overall, but could use more advanced features.",
      },
    ],
    variants: [
      {option: "Color", values: ["Black", "Silver"]},
      {
        option: "Lens",
        values: ["18-55mm Kit Lens", "18-135mm Kit Lens", "Body Only"],
      },
    ],
    specifications: [
      {key: "Resolution", value: "24.2 megapixels"},
      {key: "Sensor Type", value: "APS-C CMOS sensor"},
      {key: "ISO Range", value: "100-25600 (expandable to 51200)"},
      {key: "Video Recording", value: "Full HD 1080p at 60fps"},
      {key: "Viewfinder", value: "Optical viewfinder with 95% coverage"},
    ],
    warranty: "1-year limited warranty included",
    brand: "PhotoPro",
    category: "Electronics > Cameras > DSLR Cameras",
  },
  {
    id: 6,
    name: "Leather Messenger Bag",
    description:
      "Our Leather Messenger Bag combines style with functionality, perfect for carrying your essentials...",
    price: 149.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all bag orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Beautiful bag! Excellent craftsmanship and plenty of room for all my stuff.",
      },
      {
        rating: 4,
        comment:
          "High-quality leather and sturdy construction. Very pleased with my purchase.",
      },
      {
        rating: 3,
        comment: "Nice bag overall, but the strap could be more comfortable.",
      },
    ],
    variants: [
      {option: "Color", values: ["Brown", "Black", "Tan"]},
      {option: "Size", values: ["Small", "Medium", "Large"]},
    ],
    specifications: [
      {key: "Material", value: "Genuine Leather"},
      {key: "Dimensions", value: "12'' H x 15'' W x 4'' D"},
      {key: "Closure", value: "Flap with magnetic snap closure"},
      {
        key: "Features",
        value: "Adjustable shoulder strap, multiple pockets for organization",
      },
    ],
    warranty: "2-year limited warranty included",
    brand: "LeatherCraft",
    category: "Bags & Luggage > Messenger Bags",
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    description:
      "Our Wireless Charging Pad offers fast and convenient charging for your smartphone...",
    price: 39.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all charging pad orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Works like a charm! Charges my phone quickly and looks great on my desk.",
      },
      {
        rating: 4,
        comment:
          "Convenient charging solution. No more dealing with tangled cables.",
      },
      {
        rating: 3,
        comment: "Good charging pad, but the charging area could be larger.",
      },
    ],
    variants: [
      {option: "Color", values: ["Black", "White"]},
      {option: "Input", values: ["USB-C", "Micro USB"]},
    ],
    specifications: [
      {key: "Compatibility", value: "Qi-enabled smartphones"},
      {key: "Charging Output", value: "Up to 10W"},
      {key: "Dimensions", value: "3.9'' diameter x 0.4'' thickness"},
      {key: "Features", value: "LED indicator light, non-slip surface"},
    ],
    warranty: "1-year limited warranty included",
    brand: "ChargeTech",
    category: "Electronics > Mobile Accessories > Charging Pads",
  },
  {
    id: 8,
    name: "Gaming Console X-9000",
    description:
      "Experience the next level of gaming with our Gaming Console X-9000, featuring cutting-edge technology...",
    price: 499.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all console orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Best gaming console ever! Graphics are stunning, and gameplay is smooth.",
      },
      {
        rating: 4,
        comment:
          "Impressed with the performance and variety of games available.",
      },
      {
        rating: 3,
        comment:
          "Good console overall, but the user interface could be more intuitive.",
      },
    ],
    variants: [
      {option: "Color", values: ["Black", "White"]},
      {option: "Storage Capacity", values: ["1TB SSD", "2TB HDD"]},
    ],
    specifications: [
      {key: "Processor", value: "Custom AMD Zen 2"},
      {key: "Graphics", value: "AMD RDNA 2 GPU"},
      {key: "RAM", value: "16GB GDDR6"},
      {key: "Resolution", value: "Up to 8K"},
      {key: "Frame Rate", value: "Up to 120fps"},
    ],
    warranty: "1-year limited warranty included",
    brand: "GameTech",
    category: "Electronics > Gaming > Consoles",
  },
  {
    id: 9,
    name: "Fitness Tracker Band",
    description:
      "Track your daily activity and monitor your health with our Fitness Tracker Band...",
    price: 49.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all tracker band orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Love this tracker! Helps me stay motivated to reach my fitness goals.",
      },
      {
        rating: 4,
        comment:
          "Accurate tracking and long battery life. Comfortable to wear all day.",
      },
      {
        rating: 3,
        comment:
          "Good tracker overall, but the app could use some improvements.",
      },
    ],
    variants: [
      {option: "Color", values: ["Black", "Blue", "Pink"]},
      {option: "Size", values: ["Small", "Medium", "Large"]},
    ],
    specifications: [
      {key: "Display", value: "0.96-inch OLED touchscreen"},
      {key: "Battery Life", value: "Up to 7 days"},
      {key: "Water Resistance", value: "IP67-rated (splash-proof)"},
      {
        key: "Features",
        value: "Heart rate monitoring, step counting, sleep tracking",
      },
    ],
    warranty: "1-year limited warranty included",
    brand: "FitGear",
    category: "Electronics > Fitness & Health > Fitness Trackers",
  },
  {
    id: 10,
    name: "Portable Bluetooth Speaker",
    description:
      "Take your music anywhere with our Portable Bluetooth Speaker, featuring powerful sound and long battery life...",
    price: 69.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all speaker orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Awesome speaker! Sounds great and easy to connect to my devices.",
      },
      {
        rating: 4,
        comment:
          "Impressive sound quality for its size. Perfect for outdoor gatherings.",
      },
      {
        rating: 3,
        comment: "Good speaker overall, but the battery life could be longer.",
      },
    ],
    variants: [
      {option: "Color", values: ["Black", "Red", "Blue"]},
      {option: "Power Source", values: ["Rechargeable Battery", "USB-C"]},
    ],
    specifications: [
      {key: "Output Power", value: "20W"},
      {key: "Battery Life", value: "Up to 10 hours"},
      {key: "Connectivity", value: "Bluetooth 5.0, AUX input"},
      {
        key: "Features",
        value:
          "Built-in microphone for hands-free calls, water-resistant design",
      },
    ],
    warranty: "1-year limited warranty included",
    brand: "SoundWave",
    category: "Electronics > Audio > Speakers",
  },
  {
    id: 11,
    name: "Stainless Steel Kitchen Knife Set",
    description:
      "Upgrade your kitchen with our Stainless Steel Knife Set, featuring high-quality knives for all your culinary needs...",
    price: 99.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all knife set orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment: "Great set of knives! Sharp, durable, and comfortable to use.",
      },
      {
        rating: 4,
        comment: "Impressed with the quality and variety of knives included.",
      },
      {
        rating: 3,
        comment:
          "Good knife set overall, but the knife block could be sturdier.",
      },
    ],
    variants: [
      {option: "Color", values: ["Silver"]},
      {
        option: "Number of Pieces",
        values: ["6-Piece Set", "10-Piece Set", "15-Piece Set"],
      },
    ],
    specifications: [
      {key: "Material", value: "Stainless Steel blades with ergonomic handles"},
      {
        key: "Included Knives",
        value:
          "Chef's Knife, Bread Knife, Utility Knife, Paring Knife, Steak Knives, Kitchen Shears",
      },
      {key: "Knife Block", value: "Wooden knife block with non-slip feet"},
    ],
    warranty: "1-year limited warranty included",
    brand: "KitchenPro",
    category: "Home & Kitchen > Kitchenware > Knife Sets",
  },
  {
    id: 12,
    name: "Men's Classic Leather Wallet",
    description:
      "Keep your cash and cards organized with our Men's Classic Leather Wallet, crafted from genuine leather...",
    price: 49.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all wallet orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Love this wallet! High-quality leather and plenty of space for cards and cash.",
      },
      {
        rating: 4,
        comment:
          "Classic design and excellent craftsmanship. Very satisfied with my purchase.",
      },
      {
        rating: 3,
        comment: "Good wallet overall, but could use more card slots.",
      },
    ],
    variants: [
      {option: "Color", values: ["Brown", "Black"]},
      {option: "Style", values: ["Bifold", "Trifold"]},
    ],
    specifications: [
      {key: "Material", value: "Genuine Leather"},
      {key: "Dimensions", value: "4.5'' x 3.5'' x 0.5''"},
      {
        key: "Features",
        value: "Multiple card slots, ID window, bill compartment",
      },
    ],
    warranty: "1-year limited warranty included",
    brand: "LeatherCraft",
    category: "Clothing > Men's Accessories > Wallets",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
  {
    id: 13,
    name: "Yoga Mat",
    description:
      "Achieve balance and tranquility during your yoga practice with our premium Yoga Mat...",
    price: 34.99,
    images: [],
    availability: "In Stock",
    shippingInfo:
      "Free shipping on all yoga mat orders. Delivery within 3-5 business days.",
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent yoga mat! Provides good cushioning and grip for my workouts.",
      },
      {
        rating: 4,
        comment:
          "Love the thickness and durability of this mat. Great value for the price.",
      },
      {
        rating: 3,
        comment:
          "Good mat overall, but could be slightly longer for taller users.",
      },
    ],
    variants: [
      {option: "Color", values: ["Purple", "Blue", "Green", "Black"]},
      {option: "Thickness", values: ["6mm", "8mm"]},
    ],
    specifications: [
      {key: "Material", value: "Eco-friendly TPE material"},
      {key: "Dimensions", value: "72'' L x 24'' W"},
      {key: "Features", value: "Non-slip surface, lightweight and portable"},
    ],
    warranty: "1-year limited warranty included",
    brand: "YogaLife",
    category: "Sports & Outdoors > Exercise & Fitness > Yoga",
  },
];

export const filterCategory: FilterItems[] = [
  {id: 0, name: "T-shirts"},
  {id: 1, name: "Hoodies"},
  {id: 2, name: "Posters"},
  {id: 3, name: "Albums"},
  {id: 4, name: "Decor"},
  {id: 5, name: "Clothing"},
  {id: 6, name: "Music"},
  {id: 7, name: "Accessories"},
];
export const filterSize: FilterItems[] = [
  {id: 0, name: "Large"},
  {id: 1, name: "Medium"},
  {id: 2, name: "Small"},
  {id: 3, name: "XL"},
  {id: 4, name: "XXL"},
];
export const filterRange: FilterItems[] = [
  {id: 0, name: "Long"},
  {id: 1, name: "Short"},
];
export const filterColor: FilterItems[] = [
  {id: 0, name: "black"},
  {id: 1, name: "blue"},
  {id: 2, name: "gray"},
  {id: 3, name: "green"},
  {id: 4, name: "orange"},
  {id: 5, name: "red"},
  {id: 6, name: "yellow"},
];
export const filterSale: FilterItems[] = [{id: 0, name: ""}];
export const filterRating: FilterItems[] = [
  {id: 0, name: "5"},
  {id: 1, name: "4"},
  {id: 2, name: "3"},
  {id: 3, name: "2"},
  {id: 4, name: "1"},
];

export const sortFilter: FilterItems[] = [
  {id: 0, name: "All"},
  {id: 1, name: "Most Popular"},
  {id: 2, name: "Best Rating"},
  {id: 3, name: "Newest"},
  {id: 4, name: "Price: Low to High"},
  {id: 5, name: "Price: High to Low"},
];

export const tagCategories: TagCategories[] = [
  {
    title: "Category Tags",
    tags: [
      {id: 0, name: "Men's Clothing"},
      {id: 1, name: "Women's Clothing"},
      {id: 2, name: "Kids' Clothing"},
      {id: 3, name: "Electronics"},
      {id: 4, name: "Home & Kitchen"},
      {id: 5, name: "Beauty & Personal Care"},
      {id: 6, name: "Sports & Outdoors"},
      {id: 7, name: "Books & Audible"},
      {id: 8, name: "Toys & Games"},
    ],
  },
  {
    title: "Product Type Tags",
    tags: [
      {id: 0, name: "T-shirts"},
      {id: 1, name: "Dresses"},
      {id: 2, name: "Pants"},
      {id: 3, name: "Shoes"},
      {id: 4, name: "Watches"},
      {id: 5, name: "Smartphones"},
      {id: 6, name: "Laptops"},
      {id: 7, name: "Headphones"},
      {id: 8, name: "Makeup"},
      {id: 9, name: "Skincare"},
    ],
  },
  {
    title: "Brand Tags",
    tags: [
      {id: 0, name: "Nike"},
      {id: 1, name: "Adidas"},
      {id: 2, name: "Apple"},
      {id: 3, name: "Samsung"},
      {id: 4, name: "Sony"},
      {id: 5, name: "Maybelline"},
      {id: 6, name: "L'Oréal"},
      {id: 7, name: "Philips"},
      {id: 8, name: "LEGO"},
    ],
  },
  {
    title: "Material Tags",
    tags: [
      {id: 0, name: "Cotton"},
      {id: 1, name: "Leather"},
      {id: 2, name: "Plastic"},
      {id: 3, name: "Stainless Steel"},
      {id: 4, name: "Silk"},
      {id: 5, name: "Wool"},
      {id: 6, name: "Wood"},
    ],
  },
  {
    title: "Size Tags",
    tags: [
      {id: 0, name: "Small (S)"},
      {id: 1, name: "Medium (M)"},
      {id: 2, name: "Large (L)"},
      {id: 3, name: "Extra Large (XL)"},
      {id: 4, name: "XXL"},
      {id: 5, name: "Size 6, 7, 8 (for shoes)"},
      {id: 6, name: "Size 32, 34, 36 (for pants)"},
    ],
  },
  {
    title: "Color Tags",
    tags: [
      {id: 0, name: "Red"},
      {id: 1, name: "Blue"},
      {id: 2, name: "Green"},
      {id: 3, name: "Black"},
      {id: 4, name: "White"},
      {id: 5, name: "Yellow"},
      {id: 6, name: "Pink"},
      {id: 7, name: "Purple"},
      {id: 8, name: "Orange"},
    ],
  },
  {
    title: "Occasion Tags",
    tags: [
      {id: 0, name: "Casual"},
      {id: 1, name: "Formal"},
      {id: 2, name: "Party"},
      {id: 3, name: "Wedding"},
      {id: 4, name: "Workout"},
      {id: 5, name: "Travel"},
    ],
  },
  {
    title: "Feature Tags",
    tags: [
      {id: 0, name: "Waterproof"},
      {id: 1, name: "Wireless"},
      {id: 2, name: "High Definition"},
      {id: 3, name: "Organic"},
      {id: 4, name: "Vegan"},
      {id: 5, name: "Recyclable"},
    ],
  },
  {
    title: "Price Range Tags",
    tags: [
      {id: 1, name: "Budget-friendly"},
      {id: 2, name: "Mid-range"},
      {id: 3, name: "Premium"},
    ],
  },
];

export const profileRoute = {
  my_acccount: "my-acccount",
  wish_list: "wish-list",
  change_password: "change-password",
};
