export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  weight: string;
  badge?: string;
  isPopular?: boolean;
  isBestSeller?: boolean;
  isDailyBest?: boolean;
  isCombo?: boolean;
  inStock: boolean;
  description: string;
  ingredients: string[];
  benefits: string[];
  nutritionalInfo: {
    calories: string;
    protein: string;
    carbohydrates: string;
    dietaryFiber: string;
    fats: string;
    sodium: string;
    calcium: string;
    potassium: string;
  };
  image: string;
  secondaryImages?: string[];
  features?: string[];
  flavorProfile?: string;
  accentColor?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: number;
  icon: string;
  image: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
  content: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  productBought: string;
}

export const BRAND_INFO = {
  name: "Gustosa Foods",
  tagline: "Top Quality Fox Nuts (Makhana) - Pure. Natural. Safe.",
  secondaryTagline: "From Our Farm to Your Home",
  description:
    "We’re passionate about crafting delicious, nutritious snacks that bring joy to your daily life. Our specialty lies in creating mouthwatering makhana flavors that cater to diverse tastes and dietary needs.",
  contact: {
    address: "Station Club Road, Near Navratan Durga Asthan, NH 31, Purnia - 854301, Bihar, India",
    email: "hello@gustosafoods.com",
    salesEmail: "sumit@gustosafoods.com",
    phone: "+91-81000 03505",
    altPhone: "+91-92056 00140 / 41 / 42",
    workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM IST"
  },
  social: {
    facebook: "https://facebook.com/gustosafoods",
    instagram: "https://instagram.com/gustosafoods",
    linkedin: "https://linkedin.com/company/gustosafoods",
    twitter: "https://twitter.com/gustosafoods",
    youtube: "https://youtube.com/@gustosafoods"
  },
  mission:
    "To empower everyday snacking with smart, affordable, high-nutrition, and farm-fresh makhana solutions that people trust. Through continuous innovation, eco-conscious choices, and a strong community-first approach, we aim to make healthy snacking not just a routine—but a way of life.",
  vision:
    "To spark a healthy snacking revolution across India and globally—making every home, office, and celebration healthier, fresher, safer, and crunchier.",
  story:
    "Our journey began in Purnia, Bihar—the world capital of makhana cultivation—when our founders set out to explore innovative ways to showcase the versatility of makhana. We develop a line of delicious, slow-roasted, high-protein makhana snacks directly sourced from local farming families.",
  pillars: [
    {
      title: "Farm Fresh Sourcing",
      desc: "Harvested directly from certified wetlands of Bihar with 100% traceability."
    },
    {
      title: "Slow Roasted, Never Fried",
      desc: "Popped to crispy perfection with zero trans fats, no palm oil, and zero cholesterol."
    },
    {
      title: "Natural Seasonings",
      desc: "Blended with authentic ground spices and herbs for irresistible gourmet flavors."
    },
    {
      title: "High Protein & Fiber",
      desc: "Power-packed with plant protein, calcium, magnesium, and antioxidants."
    }
  ]
};

export const CATEGORIES: Category[] = [
  {
    id: "roasted-makhana",
    name: "Roasted Flavored Makhana",
    slug: "roasted-makhana",
    description: "Crunchy, roasted in olive oil with signature gourmet spices.",
    itemCount: 8,
    icon: "Flame",
    image: "/assets/products/makhana-bowl.jpg",
    color: "#479d78"
  },
  {
    id: "raw-fox-nuts",
    name: "Raw Premium Fox Nuts",
    slug: "raw-fox-nuts",
    description: "Jumbo Grade 6+ hand-picked unroasted lotus seeds for home cooking & roasting.",
    itemCount: 4,
    icon: "Leaf",
    image: "/assets/products/raw_makhana_500g.jpg",
    color: "#eab308"
  },
  {
    id: "combo-packs",
    name: "Value Combo Packs",
    slug: "combo-packs",
    description: "Curated multi-flavor snack boxes with free shipping & savings up to 25%.",
    itemCount: 6,
    icon: "Gift",
    image: "/assets/products/makhana-combo-6.jpg",
    color: "#f97316"
  },
  {
    id: "bulk-wholesale",
    name: "Bulk & B2B Orders",
    slug: "bulk-wholesale",
    description: "Commercial quantities from 50kg to 10 metric tons for exports & retailers.",
    itemCount: 3,
    icon: "PackageCheck",
    image: "/assets/products/raw_makhana_500g.jpg",
    color: "#3b82f6"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "peri-peri-makhana-100g",
    name: "Zesty Peri Peri Roasted Makhana",
    slug: "peri-peri-roasted-makhana",
    category: "Roasted Flavored Makhana",
    categorySlug: "roasted-makhana",
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviewsCount: 142,
    weight: "100g",
    badge: "Bestseller",
    isPopular: true,
    isBestSeller: true,
    isDailyBest: true,
    inStock: true,
    description:
      "Infused with fiery bird's eye chilies, tangy lemon zest, and savory garlic powder. Slow roasted in pure olive oil to deliver the crunchiest high-protein snacking experience.",
    ingredients: ["Fox Nuts (Makhana 82%)", "Cold Pressed Olive Oil", "Peri Peri Seasoning (Chili, Garlic, Onion, Black Salt, Citric Acid)", "Natural Himalayan Pink Salt"],
    benefits: [
      "9.7g Plant Protein per 100g",
      "Low Glycemic Index (Diabetic Friendly)",
      "Zero Trans Fat & No Cholesterol",
      "Gluten Free & 100% Vegan"
    ],
    nutritionalInfo: {
      calories: "385 kcal",
      protein: "9.7 g",
      carbohydrates: "64.0 g",
      dietaryFiber: "14.2 g",
      fats: "10.5 g",
      sodium: "340 mg",
      calcium: "60 mg",
      potassium: "500 mg"
    },
    image: "/assets/products/makhana-peri-peri.jpg",
    flavorProfile: "Spicy, Tangy, Zesty",
    accentColor: "#ef4444"
  },
  {
    id: "tangy-tomato-makhana-100g",
    name: "Tangy Tomato Italian Herb Makhana",
    slug: "tangy-tomato-roasted-makhana",
    category: "Roasted Flavored Makhana",
    categorySlug: "roasted-makhana",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviewsCount: 118,
    weight: "100g",
    badge: "Popular",
    isPopular: true,
    isBestSeller: true,
    isDailyBest: true,
    inStock: true,
    description:
      "Sun-ripened farm fresh tomato notes blended with oregano, sweet basil, and a hint of smoked paprika. The perfect afternoon comfort snack for kids and adults alike.",
    ingredients: ["Fox Nuts (Makhana 80%)", "Olive Oil", "Dehydrated Tomato Powder", "Oregano", "Basil", "Raw Cane Sugar (0.5%)", "Sea Salt"],
    benefits: [
      "Rich in Natural Antioxidants",
      "Healthy digestion with high dietary fiber",
      "Kid-approved tangy flavor",
      "Slow roasted with zero artificial flavors"
    ],
    nutritionalInfo: {
      calories: "380 kcal",
      protein: "9.2 g",
      carbohydrates: "66.0 g",
      dietaryFiber: "13.8 g",
      fats: "9.8 g",
      sodium: "310 mg",
      calcium: "58 mg",
      potassium: "480 mg"
    },
    image: "/assets/products/makhana-tangy-tomato.jpg",
    flavorProfile: "Sweet & Tangy, Herby",
    accentColor: "#f43f5e"
  },
  {
    id: "pudina-mint-makhana-100g",
    name: "Refreshing Pudina & Mint Makhana",
    slug: "pudina-mint-roasted-makhana",
    category: "Roasted Flavored Makhana",
    categorySlug: "roasted-makhana",
    price: 149,
    originalPrice: 199,
    rating: 4.7,
    reviewsCount: 96,
    weight: "100g",
    badge: "Classic",
    isPopular: true,
    isDailyBest: true,
    inStock: true,
    description:
      "Authentic Indian garden mint, roasted cumin, black salt, and dry mango powder. Delivers a revitalizing burst of freshness with every bite.",
    ingredients: ["Fox Nuts (Makhana 82%)", "Cold Pressed Rice Bran Oil", "Pudina Leaf Powder", "Cumin", "Amchur (Dry Mango)", "Black Salt"],
    benefits: [
      "Cooling digestive herbs",
      "Natural metabolism booster",
      "Rich in magnesium and phosphorus",
      "No artificial MSG or preservatives"
    ],
    nutritionalInfo: {
      calories: "375 kcal",
      protein: "9.5 g",
      carbohydrates: "63.5 g",
      dietaryFiber: "14.5 g",
      fats: "9.5 g",
      sodium: "360 mg",
      calcium: "62 mg",
      potassium: "510 mg"
    },
    image: "/assets/products/makhana-pudina.jpg",
    flavorProfile: "Minty, Cooling, Savory",
    accentColor: "#10b981"
  },
  {
    id: "cheese-herbs-makhana-100g",
    name: "Creamy Cheese & Herb Makhana",
    slug: "creamy-cheese-herb-makhana",
    category: "Roasted Flavored Makhana",
    categorySlug: "roasted-makhana",
    price: 159,
    originalPrice: 210,
    rating: 4.9,
    reviewsCount: 165,
    weight: "100g",
    badge: "Fan Favorite",
    isPopular: true,
    isBestSeller: true,
    inStock: true,
    description:
      "Indulgent cheddar cheese coating seasoned with rosemary, thyme, and cracked black pepper. Rich, savory, and completely guilt-free.",
    ingredients: ["Fox Nuts (Makhana 80%)", "Olive Oil", "Natural Cheddar Cheese Seasoning", "Milk Solids", "Rosemary", "Black Pepper", "Rock Salt"],
    benefits: [
      "High natural calcium for strong bones",
      "Rich creamy profile with 70% fewer calories than potato chips",
      "Satisfying keto-friendly snack",
      "Non-GMO lotus seeds"
    ],
    nutritionalInfo: {
      calories: "395 kcal",
      protein: "10.1 g",
      carbohydrates: "61.0 g",
      dietaryFiber: "12.5 g",
      fats: "12.0 g",
      sodium: "380 mg",
      calcium: "110 mg",
      potassium: "450 mg"
    },
    image: "/assets/products/makhana-cheese.jpg",
    flavorProfile: "Cheesy, Savory, Herbaceous",
    accentColor: "#eab308"
  },
  {
    id: "himalayan-salt-pepper-100g",
    name: "Himalayan Pink Salt & Black Pepper",
    slug: "himalayan-pink-salt-pepper-makhana",
    category: "Roasted Flavored Makhana",
    categorySlug: "roasted-makhana",
    price: 139,
    originalPrice: 180,
    rating: 4.9,
    reviewsCount: 189,
    weight: "100g",
    badge: "Clean Snacking",
    isPopular: true,
    isDailyBest: true,
    inStock: true,
    description:
      "Pure, minimalist, and deeply satisfying. Roasted in extra virgin olive oil and seasoned only with mineral-rich Himalayan pink crystal salt and freshly cracked Malabar black pepper.",
    ingredients: ["Fox Nuts (Makhana 85%)", "Extra Virgin Olive Oil", "Himalayan Pink Rock Salt (84+ trace minerals)", "Coarse Malabar Black Pepper"],
    benefits: [
      "Zero added sugars or flavor boosters",
      "Naturally balanced electrolyte profile",
      "Perfect pre/post-workout snack",
      "Pure fasting (Vrat) friendly"
    ],
    nutritionalInfo: {
      calories: "360 kcal",
      protein: "9.8 g",
      carbohydrates: "65.0 g",
      dietaryFiber: "14.8 g",
      fats: "8.5 g",
      sodium: "220 mg",
      calcium: "64 mg",
      potassium: "520 mg"
    },
    image: "/assets/products/makhana-classic-salted.jpg",
    flavorProfile: "Crisp, Peppery, Pure Salt",
    accentColor: "#64748b"
  },
  {
    id: "jumbo-raw-makhana-250g",
    name: "Jumbo Grade 6+ Raw Fox Nuts",
    slug: "jumbo-raw-makhana-250g",
    category: "Raw Premium Fox Nuts",
    categorySlug: "raw-fox-nuts",
    price: 299,
    originalPrice: 380,
    rating: 5.0,
    reviewsCount: 210,
    weight: "250g",
    badge: "Grade 6+ Hand-Sorted",
    isPopular: true,
    isBestSeller: true,
    inStock: true,
    description:
      "Hand-selected giant lotus seeds directly from our partner farms in Bihar. Free from unpopped kernels, polished naturally, and vacuum sealed for unmatched crispness and culinary versatility.",
    ingredients: ["100% Pure Raw Grade 6+ Lotus Seeds (Euryale Ferox)"],
    benefits: [
      "No added oils, salt, or chemicals",
      "Ideal for homemade roasting, kheer, gravies, and ayurvedic remedies",
      "High natural anti-aging flavonoids (Kaempferol)",
      "Zero sodium, heart healthy"
    ],
    nutritionalInfo: {
      calories: "350 kcal",
      protein: "9.7 g",
      carbohydrates: "76.0 g",
      dietaryFiber: "14.5 g",
      fats: "0.5 g",
      sodium: "1.0 mg",
      calcium: "60 mg",
      potassium: "500 mg"
    },
    image: "/assets/products/raw_makhana_250g.jpg",
    flavorProfile: "Natural, Nutty, Earthy",
    accentColor: "#479d78"
  },
  {
    id: "jumbo-raw-makhana-500g",
    name: "Jumbo Grade 6+ Raw Fox Nuts (Value Pack)",
    slug: "jumbo-raw-makhana-500g",
    category: "Raw Premium Fox Nuts",
    categorySlug: "raw-fox-nuts",
    price: 569,
    originalPrice: 720,
    rating: 4.9,
    reviewsCount: 174,
    weight: "500g",
    badge: "Save 21%",
    isPopular: true,
    inStock: true,
    description:
      "Economy pack of Grade 6+ clean, round, export-grade fox nuts. Great for families, health enthusiasts, and festive dessert preparations.",
    ingredients: ["100% Pure Raw Grade 6+ Lotus Seeds"],
    benefits: [
      "Bulk home-kitchen savings",
      "Long shelf life in zip-lock pouch",
      "High in potassium & magnesium",
      "Sourced directly from Purnia"
    ],
    nutritionalInfo: {
      calories: "350 kcal",
      protein: "9.7 g",
      carbohydrates: "76.0 g",
      dietaryFiber: "14.5 g",
      fats: "0.5 g",
      sodium: "1.0 mg",
      calcium: "60 mg",
      potassium: "500 mg"
    },
    image: "/assets/products/raw_makhana_500g.jpg",
    flavorProfile: "Natural, Nutty",
    accentColor: "#479d78"
  },
  {
    id: "combo-party-pack-4",
    name: "Gourmet Flavors Quad Pack (4x100g)",
    slug: "gourmet-flavors-quad-combo-pack",
    category: "Value Combo Packs",
    categorySlug: "combo-packs",
    price: 499,
    originalPrice: 650,
    rating: 5.0,
    reviewsCount: 312,
    weight: "4 x 100g (400g Total)",
    badge: "Best Value Deal",
    isPopular: true,
    isBestSeller: true,
    isCombo: true,
    inStock: true,
    description:
      "The ultimate tasting collection! Contains 1x Peri Peri (100g), 1x Creamy Cheese (100g), 1x Tangy Tomato (100g), and 1x Himalayan Salt & Pepper (100g). Free express delivery included.",
    ingredients: ["Assorted Seasoned Fox Nuts (Peri Peri, Cheese & Herbs, Tangy Tomato, Pink Salt & Pepper)"],
    benefits: [
      "Save ₹151 compared to individual packs",
      "Perfect gift for healthy snack lovers",
      "Free express shipping across India",
      "Sealed freshness in resealable pouches"
    ],
    nutritionalInfo: {
      calories: "380 kcal avg",
      protein: "9.7 g",
      carbohydrates: "64.0 g",
      dietaryFiber: "14.0 g",
      fats: "10.0 g",
      sodium: "320 mg",
      calcium: "75 mg",
      potassium: "490 mg"
    },
    image: "/assets/products/makhana-combo-4.jpg",
    flavorProfile: "All Signature Flavors",
    accentColor: "#f97316"
  },
  {
    id: "combo-healthy-habit-6",
    name: "Daily Health Habit 6-Pack Combo",
    slug: "daily-health-habit-6-pack-combo",
    category: "Value Combo Packs",
    categorySlug: "combo-packs",
    price: 699,
    originalPrice: 950,
    rating: 4.9,
    reviewsCount: 220,
    weight: "6 x 100g (600g Total)",
    badge: "26% Off",
    isPopular: true,
    isCombo: true,
    inStock: true,
    description:
      "A complete month of smart snacking. Includes 2x Peri Peri, 2x Pink Salt & Pepper, 1x Pudina Mint, and 1x Tangy Tomato.",
    ingredients: ["Assorted Slow-Roasted Makhana Flavors"],
    benefits: [
      "Maximum discount per pack",
      "Guilt-free work-desk snacking",
      "Zero oil separation technology",
      "Rich in essential minerals"
    ],
    nutritionalInfo: {
      calories: "375 kcal avg",
      protein: "9.6 g",
      carbohydrates: "64.5 g",
      dietaryFiber: "14.2 g",
      fats: "9.5 g",
      sodium: "300 mg",
      calcium: "65 mg",
      potassium: "505 mg"
    },
    image: "/assets/products/makhana-combo-6.jpg",
    flavorProfile: "Assorted Variety",
    accentColor: "#e11d48"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "makhana-health-benefits-guide",
    title: "10 Proven Health Benefits of Makhana (Fox Nuts) Backed by Science",
    slug: "health-benefits-of-makhana-fox-nuts",
    summary:
      "Explore why Makhana is crowned the ultimate superfood: from boosting kidney and heart health to anti-aging properties and sustained weight loss.",
    date: "March 15, 2025",
    readTime: "5 min read",
    author: "Dr. Ananya Sharma (Nutritionist)",
    category: "Nutrition & Health",
    image: "/assets/banners/makhana_health.jpg",
    tags: ["Makhana Benefits", "Weight Loss", "Superfoods", "Healthy Snacking"],
    content: [
      "Makhana, or Euryale Ferox, has been treasured in Ayurvedic traditions for millennia. Today, modern clinical nutrition recognizes fox nuts as one of nature's cleanest, most nutrient-dense snack foods.",
      "1. Rich in Plant Protein: Providing nearly 10 grams of clean protein per 100 grams, it serves as an exceptional post-workout repair snack for vegans and vegetarians.",
      "2. Low Glycemic Index: Unlike refined chips or popcorn, makhana releases glucose slowly into the bloodstream, making it a safe, satisfying choice for diabetics.",
      "3. Anti-Aging Flavonoids: Packed with natural kaempferol antioxidants that combat cellular oxidative stress and protect skin vitality.",
      "4. Heart-Friendly Mineral Ratio: Makhana features high potassium and very low sodium, helping to naturally regulate arterial blood pressure.",
      "5. Calorie-Deficit Snacking: At under 4 calories per gram when slow-roasted, you can enjoy a generous bowl without exceeding your daily caloric goals."
    ]
  },
  {
    id: "how-makhana-is-harvested-bihar",
    title: "From Mithila Wetlands to Your Table: How Makhana is Harvested",
    slug: "how-makhana-is-harvested-in-bihar",
    summary:
      "A deep dive into the fascinating artisanal process of harvesting lotus seeds from the ponds of Bihar and how Gustosa Foods supports local farming communities.",
    date: "February 28, 2025",
    readTime: "7 min read",
    author: "Sumit Kumar (Co-Founder)",
    category: "Farm to Fork",
    image: "/assets/banners/makhana_harvest.jpg",
    tags: ["Mithila Makhana", "Artisanal Harvesting", "Bihar Agriculture", "Sustainability"],
    content: [
      "Over 85% of the world's makhana is cultivated in the pristine wetland ponds of Northern and Eastern Bihar, particularly around Purnia, Darbhanga, and Madhubani.",
      "The harvesting process remains an extraordinary feat of human skill. Harvesters dive deep into calm wetland waters to retrieve seed pods from pond beds before washing, sun-drying, grading, and roasting them in clay ovens.",
      "When the seeds reach optimal heat, skilled artisans hand-pop them with wooden mallets within seconds to release the fluffy, ivory-white fox nut kernel.",
      "At Gustosa Foods, we work directly with over 200 farming households, eliminating exploitative middlemen and guaranteeing fair wages, transparent pricing, and modern processing hygiene."
    ]
  },
  {
    id: "makhana-business-opportunity-india",
    title: "Why Makhana is Becoming India's Fastest-Growing Export Superfood",
    slug: "makhana-business-export-growth-india",
    summary:
      "Market analysis on how global demand for vegan, gluten-free, and clean-label snacks is driving multi-billion dollar growth for the Indian fox nut industry.",
    date: "January 18, 2025",
    readTime: "6 min read",
    author: "Market Insights Desk",
    category: "Industry & Trends",
    image: "/assets/banners/makhana_export.jpg",
    tags: ["Export Growth", "CPG Trends", "Agri-Tech", "B2B Insights"],
    content: [
      "The global healthy snacks market is projected to surpass $150 billion by 2030, with gluten-free, popped grain-free alternatives capturing the highest growth trajectory.",
      "Makhana checks every modern consumer demand: zero allergens (nut-free, gluten-free, dairy-free), low calorie density, high natural crunch, and extraordinary versatility for sweet or savory seasoning.",
      "With the GI tag granted to Mithila Makhana and proactive export incentives, Indian brands like Gustosa Foods are scaling direct exports to the USA, UK, UAE, and Southeast Asia.",
      "For retail partners and distributors, makhana provides strong shelf stability (12+ months), high margin potential, and repeat purchase loyalty."
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Makhana (Fox Nut)?",
    answer:
      "Makhana, also known as Fox Nuts or Gorgon Nuts, are the popped seeds of the Euryale Ferox water lily plant. They are naturally gluten-free, high in protein, fiber, calcium, and antioxidants, and have been a staple of healthy diets in India for centuries.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How are Gustosa Foods makhana snacks prepared?",
    answer:
      "We slow-roast our Grade 6+ jumbo makhana in cold-pressed olive or rice bran oil. We never deep-fry. We then tumble them with 100% natural herbs and spices without MSG, artificial preservatives, or synthetic food colors.",
    category: "Product & Quality"
  },
  {
    id: "faq-3",
    question: "Are your snacks suitable for weight loss and diabetes?",
    answer:
      "Yes! Makhana has a low glycemic index and a high protein-to-carb ratio with substantial dietary fiber. It prevents rapid insulin spikes and keeps you feeling full longer, making it an ideal snack for diabetic diets and weight management regimens.",
    category: "Nutrition"
  },
  {
    id: "faq-4",
    question: "Do you offer bulk, wholesale, and export orders?",
    answer:
      "Yes. We fulfill bulk orders ranging from 50 kg to container loads for international export, white-label packaging, corporate gifting, and supermarket retail. Please use our Bulk Order page or reach out at sumit@gustosafoods.com.",
    category: "Orders & Shipping"
  },
  {
    id: "faq-5",
    question: "What is your shipping policy and delivery timeline?",
    answer:
      "We ship across all pin codes in India. Orders are dispatched within 24–48 hours from our facility and typically arrive in 3–5 business days. Free shipping is provided on all orders above ₹499 and all combo packages.",
    category: "Orders & Shipping"
  },
  {
    id: "faq-6",
    question: "Are Gustosa Foods products suitable for fasting (Vrat)?",
    answer:
      "Our Raw Jumbo Makhana and Himalayan Pink Salt & Pepper Roasted Makhana are 100% pure, natural, and permissible for Navratri, Ekadashi, and Maha Shivratri fasting rituals.",
    category: "Product & Quality"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Pooja Hegde",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "The Peri Peri flavor is mind-blowing! Perfectly crispy, never oily, and satisfies my 4 PM cravings without any junk guilt. Gustosa has become a permanent staple on my office desk.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    productBought: "Peri Peri Roasted Makhana"
  },
  {
    id: "t2",
    name: "Rohit Verma",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "We ordered the 4-pack Combo. Every single flavor was distinct and delicious. The Cheese & Herb one was devoured by my kids in one sitting. Prompt delivery and very premium packaging!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    productBought: "Gourmet Flavors Quad Pack"
  },
  {
    id: "t3",
    name: "Sunita Agarwal",
    location: "New Delhi",
    rating: 5,
    comment:
      "I run a fitness coaching clinic. I always recommend Gustosa's Raw Grade 6+ makhana to my clients for homemade roasting and kheer. The kernel size is huge with almost zero unpopped seeds.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    productBought: "Jumbo Grade 6+ Raw Fox Nuts"
  }
];

export const POLICIES = {
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "January 1, 2025",
    intro:
      "At Gustosa Foods, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines our data collection, usage, and security practices.",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "When you purchase products, create an account, request a bulk quotation, or contact our team, we collect your name, email address, phone number, shipping address, billing address, and transaction identifiers. We do not store complete credit card or debit card numbers on our servers; payments are processed securely through PCI-DSS compliant payment gateways."
      },
      {
        heading: "2. How We Use Your Information",
        body: "Your information is used to: fulfill and dispatch orders, provide tracking notifications, handle customer support requests, improve our website functionality, prevent fraudulent transactions, and (with your explicit consent) send occasional promotional discounts and nutritional updates."
      },
      {
        heading: "3. Information Sharing",
        body: "We will never sell or rent your personal data to third parties. We share limited customer shipping information strictly with trusted courier and logistics partners (such as Delhivery, Bluedart, and India Post) exclusively for delivering your orders."
      },
      {
        heading: "4. Data Security",
        body: "We implement industry-standard 256-bit SSL encryption, regular security reviews, and strict access controls to safeguard your personal data from unauthorized access, alteration, or disclosure."
      },
      {
        heading: "5. Contact Information",
        body: "For any privacy-related inquiries or data deletion requests, please email us at hello@gustosafoods.com or write to: Gustosa Foods, Station Club Road, Near Navratan Durga Asthan, NH 31, Purnia - 854301, Bihar."
      }
    ]
  },
  termsConditions: {
    title: "Terms and Conditions",
    lastUpdated: "January 1, 2025",
    intro:
      "Welcome to Gustosa Foods. By accessing our website, purchasing our snacks, or submitting inquiries, you agree to comply with and be bound by the following terms and conditions.",
    sections: [
      {
        heading: "1. General Overview",
        body: "This website is operated by Gustosa Foods. Throughout the site, the terms 'we', 'us', and 'our' refer to Gustosa Foods. By visiting our site and/or purchasing from us, you engage in our 'Service' and agree to be bound by the following terms."
      },
      {
        heading: "2. Product Information & Pricing",
        body: "We make every effort to display the colors, packaging, and descriptions of our products accurately. Prices for our products are subject to change without prior notice. We reserve the right to modify or discontinue any product at any time."
      },
      {
        heading: "3. Orders & Payment",
        body: "We reserve the right to refuse or cancel any order placed with us. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store."
      },
      {
        heading: "4. Intellectual Property",
        body: "All content included on this site, such as text, graphics, logos, images, digital downloads, and data compilations, is the property of Gustosa Foods and protected by Indian and international copyright and trademark laws."
      },
      {
        heading: "5. Governing Law & Jurisdiction",
        body: "These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the courts of Purnia / Patna, Bihar."
      }
    ]
  },
  shippingPolicy: {
    title: "Shipping & Delivery Policy",
    lastUpdated: "January 1, 2025",
    intro:
      "Gustosa Foods is committed to delivering fresh, crunchy snacks quickly and safely across all serviceable postal codes in India.",
    sections: [
      {
        heading: "1. Order Processing Time",
        body: "All orders are processed and packaged within 24 to 48 business hours after receiving order confirmation. Orders placed on Sundays or national holidays are dispatched on the next working day."
      },
      {
        heading: "2. Shipping Charges",
        body: "We offer FREE Standard Shipping across India on all orders of ₹499 or more, as well as on all multi-pack combos. For orders below ₹499, a nominal flat shipping fee of ₹49 is applied at checkout."
      },
      {
        heading: "3. Estimated Delivery Timelines",
        body: "• Metro Cities (Delhi NCR, Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad): 2–4 business days.\n• Tier-2 and Tier-3 Cities: 3–6 business days.\n• Remote and North-East Regions: 5–8 business days."
      },
      {
        heading: "4. Order Tracking",
        body: "Once your order is handed over to our logistics partner, you will receive an SMS and email notification with an active tracking AWB link to track your shipment in real time."
      },
      {
        heading: "5. Damaged or Lost Shipments",
        body: "In the unlikely event that your package arrives in a damaged condition, please take photos and contact us within 48 hours at hello@gustosafoods.com or WhatsApp +91-81000 03505 for an immediate free replacement."
      }
    ]
  },
  refundReturns: {
    title: "Refund and Returns Policy",
    lastUpdated: "January 1, 2025",
    intro:
      "Customer satisfaction is our utmost priority. As food items are perishable, please review our return and refund guidelines below.",
    sections: [
      {
        heading: "1. Perishable Food Items Policy",
        body: "Due to strict food safety and hygiene regulations, opened food packets cannot be returned. However, if you receive a damaged, expired, or incorrect item, we will happily provide a replacement or full refund."
      },
      {
        heading: "2. Eligibility for Replacement / Refund",
        body: "To be eligible, you must notify our customer support team within 48 hours of delivery if:\n• The outer packaging was tampered with or punctured during transit.\n• An incorrect flavor or missing product was delivered.\n• The product has a manufacturing defect or quality concern."
      },
      {
        heading: "3. Refund Processing Time",
        body: "Once your claim is validated, approved refunds are initiated within 2 business days and credited back to your original payment method (Credit/Debit Card, UPI, Net Banking) within 5–7 banking days."
      },
      {
        heading: "4. Cancellations",
        body: "Orders can be cancelled before they are dispatched from our warehouse. Once dispatched, cancellation is no longer possible."
      },
      {
        heading: "5. Contact for Claims",
        body: "Please send your order ID, brief description, and photo evidence to hello@gustosafoods.com or WhatsApp +91-81000 03505."
      }
    ]
  },
  cookiePolicy: {
    title: "Cookie Policy",
    lastUpdated: "January 1, 2025",
    intro:
      "This Cookie Policy explains how Gustosa Foods uses cookies and similar tracking technologies to enhance your browsing experience, remember your cart items, and understand site usage.",
    sections: [
      {
        heading: "1. What Are Cookies?",
        body: "Cookies are small text files stored on your device when you visit a website. They help the site recognize your browser and remember key preferences such as items saved in your shopping bag."
      },
      {
        heading: "2. Types of Cookies We Use",
        body: "• Essential Cookies: Necessary for shopping cart functionality and secure checkout.\n• Analytical Cookies: Help us understand which pages and recipes are most popular so we can improve content.\n• Preference Cookies: Remember your preferred currency, language, and regional delivery estimates."
      },
      {
        heading: "3. Managing Your Cookies",
        body: "You can configure your browser settings to accept, reject, or alert you whenever cookies are being set. Disabling essential cookies may affect your ability to add items to your shopping cart."
      }
    ]
  }
};
