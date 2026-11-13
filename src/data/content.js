const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMAGES = {
  heroDish: unsplash("photo-1781334266250-a7e72fdf539f", 1400),
  charcoalChicken: unsplash("photo-1777891258069-454e66f8bedc"),
  charcoalFlame: unsplash("photo-1621790404813-df280c2de418"),
  mixedGrill: unsplash("photo-1696950169630-05908933017f"),
  kabsa: unsplash("photo-1593787614841-5d53fca8a33d"),
  burrito: unsplash("photo-1532550907401-a500c9a57435"),
  marina: unsplash("photo-1771335281840-44e1efce214f"),
  dubaiNight: unsplash("photo-1603783033071-551d35a9a29f"),
};

export const PHONE_DISPLAY = "+971 54 234 6580";
export const PHONE_TEL = "tel:+971542346580";
export const WHATSAPP_URL = "https://wa.me/971542346580";
export const INSTAGRAM_URL = "https://www.instagram.com/emeraldrestaurantuae/";
export const EMAIL = "info@emerald-uae.com";

export const NAV_LINKS = [
  { label: "Home", href: "#top", testId: "nav-home" },
  { label: "Story", href: "#story", testId: "nav-story" },
  { label: "Menu", href: "#menu", testId: "nav-menu" },
  { label: "Locations", href: "#locations", testId: "nav-locations" },
  { label: "Reviews", href: "#testimonials", testId: "nav-testimonials" },
  { label: "Journal", href: "#blogs", testId: "nav-blogs" },
  { label: "Contact", href: "#contact", testId: "nav-contact" },
];

export const DELIVERY = [
  {
    name: "Talabat",
    url: "https://www.talabat.com/uae/restaurant/717682/emerald-restaurant?aid=1335",
    testId: "hero-talabat-btn",
  },
  {
    name: "Deliveroo",
    url: "https://deliveroo.ae/menu/Dubai/deira-city-centre/emerald-restaurant-diera",
    testId: "hero-deliveroo-btn",
  },
  {
    name: "Noon Food",
    url: "https://food.noon.com/outlet/MRLDRSJ9GC-%20Emerald%20Restaurant/",
    testId: "hero-noon-btn",
  },
];

export const MARQUEE_ITEMS = [
  "Charcoal Chicken",
  "Shawarma",
  "Kabsa",
  "Mixed Grill",
  "Biriyani",
  "Maverick Burrito",
  "Since 1977",
  "Dubai Marina",
  "Deira",
];

export const STATS = [
  { value: 49, suffix: "", label: "Years of Legacy", testId: "stat-years" },
  { value: 4, suffix: "", label: "Branches & Growing", testId: "stat-branches" },
  { value: 120, suffix: "+", label: "Dishes Across Cuisines", testId: "stat-dishes" },
  { value: 2, suffix: "M+", label: "Guests Served", testId: "stat-guests" },
];

export const SIGNATURE_DISHES = [
  {
    id: "charcoal",
    name: "Emerald Special Charcoal",
    desc: "Whole chicken, 24-hour marinade, kissed by open charcoal. The dish that built the name — chef's special and a crowd favorite since day one.",
    price: "AED 42",
    tag: "Crowd Favorite",
    img: IMAGES.charcoalChicken,
    testId: "dish-card-charcoal",
    span: "lg:col-span-4",
  },
  {
    id: "kabsa",
    name: "Kabsa Rice with Charcoal",
    desc: "Juicy charcoal chicken laid over fragrant spiced kabsa rice, toasted nuts and our house tomato daqqus.",
    price: "AED 38",
    tag: "Heritage Plate",
    img: IMAGES.burrito,
    testId: "dish-card-kabsa",
    span: "lg:col-span-2",
  },
  {
    id: "burrito",
    name: "The Maverick Burrito",
    desc: "Beef, melted cheese, crunchy Cheetos and Emerald's special sauce wrapped in a warm tortilla. Dubai's most rebellious burrito.",
    price: "AED 34",
    tag: "Late-Night Icon",
    img: IMAGES.kabsa,
    testId: "dish-card-burrito",
    span: "lg:col-span-2",
  },
  {
    id: "burger",
    name: "Grand Cheese Burger",
    desc: "Slices of cheese melted over two juicy flame-grilled patties with fries on the side. No shortcuts, ever.",
    price: "AED 36",
    tag: "Flame-Grilled",
    img: IMAGES.charcoalFlame,
    testId: "dish-card-burger",
    span: "lg:col-span-4",
  },
  {
    id: "mixed-grill",
    name: "Mixed Grill",
    desc: "Lamb, chicken, beef and sausage — grilled to perfection over live charcoal, served with grilled tomato and khubz.",
    price: "AED 55",
    tag: "For the Table",
    img: IMAGES.mixedGrill,
    testId: "dish-card-mixed-grill",
    span: "lg:col-span-3",
  },
  {
    id: "biriyani",
    name: "Chicken Fry Biriyani",
    desc: "Made with fresh aromatic rich ingredients — crisp-fried chicken folded through saffron basmati, served with raita.",
    price: "AED 32",
    tag: "Aromatic",
    img: IMAGES.heroDish,
    testId: "dish-card-biriyani",
    span: "lg:col-span-3",
  },
];

export const MENU_CATEGORIES = [
  { id: "all", label: "All", testId: "menu-tab-all" },
  { id: "charcoal", label: "Charcoal & Grills", testId: "menu-tab-charcoal" },
  { id: "rice", label: "Arabic & Rice", testId: "menu-tab-rice" },
  { id: "fusion", label: "Americas & Fusion", testId: "menu-tab-fusion" },
  { id: "asian", label: "Asian Favorites", testId: "menu-tab-asian" },
  { id: "desserts", label: "Desserts & Drinks", testId: "menu-tab-desserts" },
];

export const MENU_ITEMS = [
  { name: "Emerald Special Charcoal", desc: "Whole chicken, 24-hour marinade, open charcoal", price: "42", category: "charcoal" },
  { name: "Mixed Grill", desc: "Lamb, chicken, beef & sausage, grilled to perfection", price: "55", category: "charcoal" },
  { name: "Shish Tawook", desc: "Garlic-marinated chicken cubes, saffron rice", price: "34", category: "charcoal" },
  { name: "Lamb Seekh Kebab", desc: "Hand-minced lamb, sumac onions, hot khubz", price: "38", category: "charcoal" },
  { name: "Charcoal Wings", desc: "Smoked & charred, toum dip", price: "26", category: "charcoal" },
  { name: "Kabsa Rice with Charcoal", desc: "Juicy chicken over spiced kabsa rice, daqqus", price: "38", category: "rice" },
  { name: "Chicken Fry Biriyani", desc: "Saffron basmati, crisp-fried chicken, raita", price: "32", category: "rice" },
  { name: "Shawarma Platter", desc: "Chicken shawarma, fries, pickles, garlic sauce", price: "30", category: "rice" },
  { name: "Hummus & Moutabal", desc: "Silky dips with hot khubz", price: "18", category: "rice" },
  { name: "Fattoush", desc: "Crisp greens, pomegranate molasses, fried khubz", price: "16", category: "rice" },
  { name: "The Maverick Burrito", desc: "Beef, melted cheese, Cheetos crunch, Emerald sauce", price: "34", category: "fusion" },
  { name: "Grand Cheese Burger", desc: "Two juicy patties, melted cheese, fries", price: "36", category: "fusion" },
  { name: "Dynamite Chicken", desc: "Crispy tossed, sriracha mayo, sesame", price: "28", category: "fusion" },
  { name: "Loaded Charcoal Fries", desc: "Cheese sauce, jalapeño, charred chicken", price: "20", category: "fusion" },
  { name: "Chicken Chow Mein", desc: "Wok-tossed noodles, smoky chilli", price: "26", category: "asian" },
  { name: "Thai Basil Fried Rice", desc: "Chicken, holy basil, fried egg", price: "28", category: "asian" },
  { name: "Schezwan Prawns", desc: "Fiery schezwan glaze, spring onion", price: "32", category: "asian" },
  { name: "Kunafa", desc: "Molten cheese, pistachio, orange-blossom syrup", price: "22", category: "desserts" },
  { name: "Umm Ali", desc: "Warm bread pudding, toasted nuts", price: "18", category: "desserts" },
  { name: "Fresh Juice", desc: "Orange, mango or avocado", price: "14", category: "desserts" },
  { name: "Karak Chai", desc: "The Dubai classic, brewed strong", price: "6", category: "desserts" },
];

export const LOCATIONS = [
  {
    id: "marina",
    name: "Dubai Marina",
    badge: "Now Open",
    img: IMAGES.marina,
    address: "Marina Promenade, Dubai Marina, Dubai, UAE",
    hours: [
      { day: "Sun – Thu", time: "11:00 — 02:00" },
      { day: "Fri – Sat", time: "11:00 — 03:00" },
    ],
    note: "Walk the promenade, follow the charcoal smoke.",
    mapsUrl: "https://www.google.com/maps/search/Emerald+Restaurant+Dubai+Marina",
    testId: "location-marina-card",
  },
  {
    id: "deira",
    name: "Deira — Head Office",
    badge: "Since 1977",
    img: IMAGES.dubaiNight,
    address: "#19, 4th Floor, E-Block, Al Shoala (Naboodah) Building, Port Saeed, Deira, Dubai, UAE",
    hours: [
      { day: "Sun – Thu", time: "10:00 — 00:00" },
      { day: "Fri – Sat", time: "10:00 — 01:00" },
    ],
    note: "Where it all began, four decades of fire.",
    mapsUrl: "https://www.google.com/maps/search/Emerald+Restaurant+Port+Saeed+Deira+Dubai",
    testId: "location-deira-card",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The charcoal chicken tastes exactly like it did when my father first brought me here in the nineties. Three generations of my family have eaten at this table.",
    name: "Rashid Al Mansoori",
    role: "Deira regular since 1994",
    testId: "testimonial-card-1",
  },
  {
    quote:
      "The Maverick Burrito at 1am after a Marina walk is a ritual now. Bold, messy, perfect. Nobody else in Dubai cooks like this.",
    name: "Sarah Mitchell",
    role: "Dubai Marina local",
    testId: "testimonial-card-2",
  },
  {
    quote:
      "Forty-nine years and still the most consistent grill in Dubai. The kabsa alone is worth the flight — we plan our trips around it.",
    name: "James & Priya Kapoor",
    role: "Visiting from London",
    testId: "testimonial-card-3",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Charcoal Diaries: 49 Years of Fire in Dubai",
    category: "Heritage",
    date: "Jun 2026",
    img: IMAGES.charcoalFlame,
    excerpt:
      "From a single grill in Deira to a Dubai institution — the story of the fire that never went out.",
    body: "In 1977, Dubai was a trading port on the edge of transformation, and a small grill house in Deira lit its first charcoal. The recipe was simple: real fire, honest marinades, and hospitality that treated every guest like family.\n\nNearly five decades later, the city grew around us — towers rose, the Marina was carved from the coast — but our charcoal never went out. The same marinade rests for 24 hours. The same hands turn the skewers. The same greeting waits at the door.\n\nThis is the first entry in our Charcoal Diaries: a journal of the people, plates and nights that made Emerald what it is.",
    testId: "blog-card-1",
  },
  {
    id: 2,
    title: "Secrets of the Emerald Spice Blend",
    category: "From the Kitchen",
    date: "May 2026",
    img: IMAGES.kabsa,
    excerpt:
      "Cardamom, dried lime, and one ingredient our chefs still refuse to name. Inside the blend behind the kabsa.",
    body: "Every great kitchen has one secret it guards. Ours lives in a brass tin behind the charcoal line — the Emerald spice blend that seasons our kabsa and biriyani.\n\nWe can tell you this much: green cardamom from Kerala, dried black lime from the old Iranian souk, cinnamon bark, and a whisper of saffron. The ratios? Those belong to the family.\n\nWhat we can share is the philosophy — spices are bloomed in ghee, never burnt, and the rice absorbs the charcoal smoke from the grill above it. That is the taste of Emerald.",
    testId: "blog-card-2",
  },
  {
    id: 3,
    title: "Emerald Marina: A New Chapter by the Water",
    category: "News",
    date: "Jan 2026",
    img: IMAGES.marina,
    excerpt:
      "Our newest home opens on the Marina promenade — same fire, new skyline.",
    body: "Some openings are just new addresses. This one felt like a homecoming.\n\nEmerald Marina brings our full charcoal kitchen to the promenade — the Special Charcoal, the Maverick Burrito, the kabsa that made Deira famous — now served steps from the water until 2am.\n\nCall or WhatsApp +971 54 234 6580 to reserve, or simply follow the smoke. We saved you a seat.",
    testId: "blog-card-3",
  },
];
