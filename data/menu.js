/* Static bridge for file:// previews. Replace with server-provided Jinja data in production. */
window.MENU_DATA = {
  categories: ["Coffee", "Tea", "Pastries", "Sandwiches"],
  items: [
    {
      id: "velvet-latte",
      name: "Velvet Latte",
      category: "Coffee",
      price: 5.8,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
      description: "Double espresso, silky milk, vanilla bean.",
      options: {
        sizes: ["8 oz", "12 oz", "16 oz"],
        milks: ["Whole", "Oat", "Almond"],
        addons: ["Extra shot", "Vanilla"],
      },
    },
    {
      id: "midnight-mocha",
      name: "Midnight Mocha",
      category: "Coffee",
      price: 6.4,
      image:
        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=85",
      description: "Dark cocoa, espresso, cloud-soft foam.",
      options: {
        sizes: ["8 oz", "12 oz"],
        milks: ["Whole", "Oat"],
        addons: ["Whipped cream"],
      },
    },
    {
      id: "matcha-cloud",
      name: "Matcha Cloud",
      category: "Tea",
      price: 5.6,
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=85",
      description: "Ceremonial matcha with a sweet cream float.",
      options: {
        sizes: ["12 oz", "16 oz"],
        milks: ["Oat", "Coconut"],
        addons: ["Vanilla"],
      },
    },
    {
      id: "citrus-tea",
      name: "Citrus Garden Tea",
      category: "Tea",
      price: 4.9,
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",
      description: "Jasmine green tea, grapefruit and rosemary.",
      options: { sizes: ["12 oz", "16 oz"], milks: [], addons: ["Honey"] },
    },
    {
      id: "morning-croissant",
      name: "Morning Croissant",
      category: "Pastries",
      price: 4.2,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
      description: "Butter-layered and baked fresh at dawn.",
      options: { sizes: [], milks: [], addons: ["Apricot jam"] },
    },
    {
      id: "fig-toastie",
      name: "Fig & Brie Toastie",
      category: "Sandwiches",
      price: 9.5,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
      description: "Warm sourdough, fig jam, brie and rocket.",
      options: { sizes: [], milks: [], addons: ["Chili honey"] },
    },
  ],
};
