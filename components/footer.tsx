import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Youth Summit Chitral</h3>
            <p className="mb-4 text-white/80">
              Empowering the next generation of leaders through collaboration, innovation, and sustainable development.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Events", "Gallery", "Blog", "FAQs"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/80 hover:text-[#F59E0B] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              {[
                "Leadership Development",
                "Conservation Projects",
                "Cultural Exchange",
                "Digital Skills",
                "Entrepreneurship",
                "Community Service",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/80 hover:text-[#F59E0B] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#F59E0B]" />
                <span className="text-white/80">Youth Center, Main Road, Chitral, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#F59E0B]" />
                <span className="text-white/80">+92 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#F59E0B]" />
                <span className="text-white/80">info@youthsummitchitral.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Youth Summit Chitral. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

