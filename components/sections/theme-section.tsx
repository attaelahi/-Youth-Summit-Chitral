export default function ThemeSection() {
  return (
    <section className="py-16 relative overflow-hidden" id="theme">
      <div className="absolute inset-0 bg-gradient-to-r from-[#166534] to-[#1E3A8A] opacity-90 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">This Year's Theme</h2>
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl border border-white/20">
          <h3 className="text-3xl md:text-5xl font-serif italic text-center text-white mb-6">
            "Sustainable Innovation: Bridging Tradition and Technology"
          </h3>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-[#F59E0B] rounded-full"></div>
          </div>
          <p className="text-white/90 text-center mt-6 text-lg">
            Exploring how traditional wisdom and modern technology can work together to create sustainable solutions for
            Chitral's unique challenges.
          </p>
          <div className="absolute -top-4 -left-4 h-12 w-12 border-t-2 border-l-2 border-[#F59E0B]"></div>
          <div className="absolute -bottom-4 -right-4 h-12 w-12 border-b-2 border-r-2 border-[#F59E0B]"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-6 h-6 bg-[#F59E0B]/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-[#F59E0B]/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#F59E0B]/30 rounded-full"></div>
      </div>
    </section>
  )
}

