import Link from "next/link"

export default function RegistrationSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]" id="register">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1E3A8A] mb-12 text-center">Register Now</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="first-name"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-[#374151] bg-transparent rounded-lg border border-[#166534]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[#166534] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="first-name"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:text-[#166534]"
                >
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="last-name"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-[#374151] bg-transparent rounded-lg border border-[#166534]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[#166534] peer"
                  placeholder=" "
                />
                <label
                  htmlFor="last-name"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:text-[#166534]"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-[#374151] bg-transparent rounded-lg border border-[#166534]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[#166534] peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:text-[#166534]"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                className="block px-2.5 pb-2.5 pt-4 w-full text-[#374151] bg-transparent rounded-lg border border-[#166534]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[#166534] peer"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:text-[#166534]"
              >
                Phone Number
              </label>
            </div>

            <div className="relative">
              <select
                id="interest"
                className="block px-2.5 pb-2.5 pt-4 w-full text-[#374151] bg-transparent rounded-lg border border-[#166534]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[#166534] peer"
              >
                <option value="">Select your primary interest</option>
                <option value="conservation">Wildlife Conservation</option>
                <option value="leadership">Leadership Development</option>
                <option value="technology">Technology & Innovation</option>
                <option value="culture">Cultural Preservation</option>
                <option value="entrepreneurship">Social Entrepreneurship</option>
              </select>
              <label
                htmlFor="interest"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#166534] left-1"
              >
                Area of Interest
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows={4}
                className="block px-2.5 pb-2.5 pt-4 w-full text-[#374151] bg-transparent rounded-lg border border-[#166534]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[#166534] peer"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:text-[#166534]"
              >
                Why do you want to attend?
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              Submit Registration
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-[#374151] mb-4">Connect with us on social media</p>
            <div className="flex justify-center space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-[#1E3A8A] hover:text-[#F59E0B] transition-colors duration-300"
                >
                  {platform}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

