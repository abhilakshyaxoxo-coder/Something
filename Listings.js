const properties = [
  { id: 1, title: "Grand Emerald Villa", price: "₹4.5 Crore", type: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&w=800" },
  { id: 2, title: "Skyline Business Hub", price: "₹85 Lakh", type: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800" },
  { id: 3, title: "Heritage Industrial Estate", price: "₹1.2 Crore", type: "Plot", img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800" },
];

export default function Listings() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="font-playfair text-4xl mb-12 text-center decoration-gold-500 underline underline-offset-8">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-xl bg-slate-50 dark:bg-navy-800 border border-gold-500/20 shadow-xl">
            <div className="h-64 overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-gold-500 text-sm uppercase tracking-widest">{p.type}</span>
              <h3 className="font-playfair text-2xl my-2">{p.title}</h3>
              <p className="text-xl font-bold mb-4">{p.price}</p>
              <button className="w-full py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
