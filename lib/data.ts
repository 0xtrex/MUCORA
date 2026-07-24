export const CONTACT = {
  phoneDisplay: "+91 84204 24903",
  phoneHref: "tel:+918420424903",
  whatsappHref:
    "https://wa.me/918420424903?text=Hi%20MUCORA%2C%20I%27d%20like%20to%20order%20fresh%20mushrooms.",
  email: "hello@mucora.in",
};

export type Product = {
  id: string;
  name: string;
  latin: string;
  blurb: string;
  price: number;
  unit: string;
  tag?: string;
  inStock?: boolean;
  variant: "oyster" | "button" | "shiitake" | "milky" | "portobello" | "lionsmane";
};

export const PRODUCTS: Product[] = [
  {
    id: "grey-oyster",
    name: "Grey Oyster",
    latin: "Pleurotus ostreatus",
    blurb: "Delicate, fan-shaped and mild — our best seller, harvested at peak tenderness.",
    price: 250,
    unit: "1 kg pack",
    tag: "Bestseller",
    variant: "oyster",
  },
  {
    id: "button",
    name: "White Button",
    latin: "Agaricus bisporus",
    blurb: "The everyday classic. Firm bite, subtly earthy, perfect for every kitchen.",
    price: 60,
    unit: "200g pack",
    variant: "button",
  },
  {
    id: "shiitake",
    name: "Shiitake",
    latin: "Lentinula edodes",
    blurb: "Deep umami and a meaty texture, slow-grown on hardwood logs.",
    price: 220,
    unit: "200g pack",
    tag: "Limited",
    variant: "shiitake",
    inStock: false,
  },
  {
    id: "milky",
    name: "Milky Mushroom",
    latin: "Calocybe indica",
    blurb: "Thick-stemmed and robust, holds its bite beautifully in curries.",
    price: 400,
    unit: "1kg",
    variant: "milky",
  },
  {
    id: "portobello",
    name: "Portobello",
    latin: "Agaricus bisporus (mature)",
    blurb: "Broad, steak-like caps built for grilling and stuffing.",
    price: 180,
    unit: "250g pack",
    variant: "portobello",
    inStock: false,
  },
  {
    id: "lions-mane",
    name: "Lion's Mane",
    latin: "Hericium erinaceus",
    blurb: "Shaggy, seafood-like texture — a favourite among chefs and foragers alike.",
    price: 260,
    unit: "200g pack",
    tag: "New",
    variant: "lionsmane",
    inStock: false,
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Spored & spawned",
    text: "Every batch begins in our climate-controlled grow rooms, seeded from lab-tested spawn.",
  },
  {
    step: "02",
    title: "Fruited in the dark",
    text: "Mycelium colonises our substrate for weeks before the first flush breaks through.",
  },
  {
    step: "03",
    title: "Hand-harvested",
    text: "Picked by hand at peak maturity, every morning, never machine-pulled.",
  },
  {
    step: "04",
    title: "At your door same day",
    text: "Packed within the hour and out for local delivery — from farm to kitchen before it wilts.",
  },
];

export const TESTIMONIALS = [
  {
    name: "RAJESH DAS",
    role: "Home cook",
    quote:
      "The oyster mushrooms taste like they were picked an hour ago — because they were. Nothing from the supermarket compares.",
  },
  {
    name: "SABITA CHAUDHURY",
    role: "Restaurant owner",
    quote:
      "MUCORA is the only supplier whose shiitake I trust for the tasting menu. Consistent size, consistent quality.",
  },
  {
    name: "ASIM MAITY",
    role: "Weekly subscribers",
    quote:
      "We switched to the weekly box three months ago and haven't bought mushrooms anywhere else since.",
  },
];

export const DELIVERY_AREAS = [
  "Barasat",
  "Madhyamgram",
  "New Barracpore",
  "Barracpore",
  "DumDum",
  "Sealdah",
  "South Kolkata",
  "North Kolkata",
];

export const NAV_LINKS = [
  { label: "Shop", href: "#shop" },
  { label: "Our Process", href: "#process" },
  { label: "Delivery", href: "#delivery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
