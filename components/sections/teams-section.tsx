import Image from "next/image"

export default function TeamsSection() {
  const teamMembers = [
    { name: "Aisha Khan", role: "Summit Director", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Farhan Ahmed", role: "Conservation Lead", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Nadia Hussain", role: "Community Engagement", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Omar Shah", role: "Technology Coordinator", image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Sana Malik", role: "Cultural Programs", image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { name: "Imran Qureshi", role: "Logistics Manager", image: "https://randomuser.me/api/portraits/men/6.jpg" },
    { name: "Zara Iqbal", role: "Media Relations", image: "https://randomuser.me/api/portraits/women/7.jpg" },
    { name: "Kamran Ali", role: "Volunteer Coordinator", image: "https://randomuser.me/api/portraits/men/8.jpg" },
  ]

  return (
    <section className="py-20 bg-[#F9FAFB]" id="teams">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1E3A8A] mb-12 text-center">Meet the Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-[0_0_20px_rgba(30,58,138,0.4)] transition-all duration-300">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium">View Profile</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A8A]">{member.name}</h3>
              <p className="text-[#F59E0B]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

