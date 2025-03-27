import Image from "next/image"

export default function BenchmarksSection() {
  const benchmarks = [
    {
      title: "Wild See Conservation Project",
      description:
        "A youth-led initiative to protect and monitor endangered wildlife species in Chitral's mountain ecosystems. This project has successfully tracked and protected over 15 snow leopards and established 3 community-based conservation areas.",
      additionalInfo:
        "The project combines traditional tracking knowledge with modern technology, employing camera traps and GPS monitoring while engaging local communities as conservation stewards.",
      image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800",
      reverse: false,
    },
    {
      title: "Markhor Protection Initiative",
      description:
        "A flagship conservation program focused on Pakistan's national animal. Through community engagement and anti-poaching efforts, the Markhor population in Chitral has increased by 27% over the past five years.",
      additionalInfo:
        "The initiative has created sustainable ecotourism opportunities for local communities while ensuring the long-term survival of this magnificent species.",
      image: "https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=800",
      reverse: true,
    },
    {
      title: "Annual Leadership Conference",
      description:
        "Our flagship event brings together 500+ young leaders from across Chitral and neighboring regions for three days of intensive workshops, networking, and collaborative problem-solving.",
      additionalInfo:
        "The conference has launched over 30 community projects and created a network of youth leaders who continue to collaborate throughout the year on various initiatives.",
      image: "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800",
      reverse: false,
    },
  ]

  return (
    <section className="py-20 bg-white" id="benchmarks">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1E3A8A] mb-12 text-center">Key Benchmarks</h2>
        <div className="space-y-24">
          {benchmarks.map((benchmark, index) => (
            <div
              key={index}
              className={`flex flex-col ${benchmark.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
            >
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl shadow-xl">
                <div className="parallax-container h-[400px]">
                  <Image
                    src={benchmark.image || "/placeholder.svg"}
                    alt={benchmark.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-[#166534] mb-4">{benchmark.title}</h3>
                <p className="text-[#374151] mb-4">{benchmark.description}</p>
                <p className="text-[#374151]">{benchmark.additionalInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

