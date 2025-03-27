import { Target, Users, Award, Calendar, MapPin } from "lucide-react"

export default function ObjectivesSection() {
  const objectives = [
    {
      icon: <Target className="h-8 w-8 text-[#1E3A8A]" />,
      title: "Leadership Development",
      description:
        "Cultivate essential leadership skills among Chitral's youth through workshops, mentoring, and practical challenges.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#1E3A8A]" />,
      title: "Community Engagement",
      description:
        "Foster meaningful connections between youth and community stakeholders to address local challenges collaboratively.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#1E3A8A]" />,
      title: "Sustainable Solutions",
      description:
        "Develop innovative approaches to environmental conservation and sustainable development in the region.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#1E3A8A]" />,
      title: "Cultural Preservation",
      description:
        "Celebrate and preserve Chitral's rich cultural heritage while embracing positive change and innovation.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#1E3A8A]" />,
      title: "Regional Networking",
      description:
        "Connect young leaders across the region to share ideas, resources, and best practices for community development.",
    },
    {
      icon: <Target className="h-8 w-8 text-[#1E3A8A]" />,
      title: "Skill Enhancement",
      description:
        "Provide practical training in entrepreneurship, digital literacy, and other key skills for the modern economy.",
    },
  ]

  return (
    <section className="py-20 bg-[#F9FAFB]" id="objectives">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1E3A8A] mb-12 text-center">Objectives & Aims</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#F59E0B]/50 transition-all duration-300 group hover:shadow-xl"
            >
              <div className="bg-[#1E3A8A]/10 p-4 rounded-full inline-block mb-4 group-hover:bg-[#F59E0B]/20 transition-colors duration-300">
                {objective.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#166534] mb-3 group-hover:text-[#F59E0B] transition-colors duration-300">
                {objective.title}
              </h3>
              <p className="text-[#374151]">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

