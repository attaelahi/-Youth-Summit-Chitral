import Image from "next/image"
import { Calendar, MapPin, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1E3A8A] mb-12 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#166534] mb-4">Why It Matters?</h3>
            <p className="text-[#374151] mb-6">
              The Youth Summit Chitral brings together young leaders, innovators, and change-makers from across the
              region to address pressing challenges and create sustainable solutions for the future.
            </p>
            <p className="text-[#374151] mb-6">
              In the heart of the Hindu Kush mountains, we foster collaboration, leadership development, and cultural
              exchange to empower the next generation of community leaders.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="bg-[#1E3A8A]/10 p-3 rounded-full mr-3">
                  <Calendar className="h-6 w-6 text-[#1E3A8A]" />
                </div>
                <span className="text-[#374151]">Annual Event</span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#1E3A8A]/10 p-3 rounded-full mr-3">
                  <MapPin className="h-6 w-6 text-[#1E3A8A]" />
                </div>
                <span className="text-[#374151]">Chitral, Pakistan</span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#1E3A8A]/10 p-3 rounded-full mr-3">
                  <Users className="h-6 w-6 text-[#1E3A8A]" />
                </div>
                <span className="text-[#374151]">500+ Participants</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <Image
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=300&h=400&auto=format&fit=crop"
                alt="Youth Summit Activity"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 mt-8">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=300&h=400&auto=format&fit=crop"
                alt="Youth Summit Workshop"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <Image
                src="https://images.unsplash.com/photo-1570131235368-0361c447c0a1?q=80&w=300&h=400&auto=format&fit=crop"
                alt="Chitral Landscape"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 mt-8">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=300&h=400&auto=format&fit=crop"
                alt="Youth Summit Participants"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

