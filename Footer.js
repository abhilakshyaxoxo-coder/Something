export default function Footer() {
  return (
    <footer className="border-t border-gold-500/30 bg-slate-50 dark:bg-navy-900 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-4">
        <p className="text-sm opacity-80">
          © 2026 Agrawal Properties. All Rights Reserved.
        </p>
        
        <div className="flex gap-6 text-sm">
          <span>📞 9412289777</span>
          <span>📞 8445122102</span>
          <span>📞 9045243500</span>
        </div>

        <p className="text-sm">
          Designed by <span className="font-playfair italic text-gold-500 text-lg ml-1">Pagelet</span>
        </p>
      </div>
    </footer>
  );
}
