import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Chitral Landscape"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          <span className="text-[#1E3A8A] bg-white/90 px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            Youth Summit Chitral
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
          Empowering the next generation of leaders through collaboration, innovation, and sustainable development
        </p>
        <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Register Now
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown className="h-10 w-10 text-white" />
        </a>
      </div>
    </section>
  )
}

