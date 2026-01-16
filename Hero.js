export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920')] bg-cover bg-center">
      <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-[2px]"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-playfair text-5xl md:text-7xl text-gold-500 mb-6">
          Find Your Legacy <br /> with Agrawal Properties
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 font-light tracking-wide">
          Exquisite residences and strategic commercial spaces tailored for those who value excellence.
        </p>
        <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
          Explore Estates
        </button>
      </div>
    </section>
  );
}
