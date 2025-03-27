export default function EventsSection() {
  const schedule = [
    {
      day: "Day 1",
      date: "June 15, 2025",
      events: [
        { time: "09:00 - 10:30", title: "Opening Ceremony", location: "Main Hall" },
        {
          time: "11:00 - 12:30",
          title: "Keynote: Sustainable Development in Mountain Regions",
          location: "Auditorium",
        },
        { time: "14:00 - 16:00", title: "Workshop: Leadership in Action", location: "Workshop Room A" },
        { time: "16:30 - 18:00", title: "Panel Discussion: Youth Voices in Conservation", location: "Panel Room" },
      ],
    },
    {
      day: "Day 2",
      date: "June 16, 2025",
      events: [
        {
          time: "09:00 - 10:30",
          title: "Workshop: Digital Skills for Community Development",
          location: "Computer Lab",
        },
        {
          time: "11:00 - 12:30",
          title: "Field Trip: Local Conservation Projects",
          location: "Meeting Point: Main Entrance",
        },
        { time: "14:00 - 16:00", title: "Hackathon: Solutions for Chitral", location: "Innovation Hub" },
        { time: "16:30 - 18:00", title: "Cultural Showcase", location: "Amphitheater" },
      ],
    },
    {
      day: "Day 3",
      date: "June 17, 2025",
      events: [
        { time: "09:00 - 10:30", title: "Workshop: Project Planning & Management", location: "Workshop Room B" },
        { time: "11:00 - 12:30", title: "Networking Session", location: "Garden Area" },
        { time: "14:00 - 16:00", title: "Project Presentations", location: "Main Hall" },
        { time: "16:30 - 18:00", title: "Closing Ceremony & Awards", location: "Auditorium" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white" id="events">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1E3A8A] mb-12 text-center">Events & Schedule</h2>
        <div className="max-w-4xl mx-auto">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-12 last:mb-0">
              <div className="flex items-center mb-6">
                <div className="bg-[#1E3A8A] h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {dayIndex + 1}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-[#166534]">{day.day}</h3>
                  <p className="text-[#374151]">{day.date}</p>
                </div>
              </div>
              <div className="pl-6 border-l-2 border-[#F59E0B]">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="mb-6 last:mb-0 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#1E3A8A]"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-[#1E3A8A]">{event.title}</h4>
                        <p className="text-[#374151]">{event.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0 bg-[#1E3A8A]/10 px-3 py-1 rounded-full text-[#1E3A8A] font-medium">
                        {event.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

