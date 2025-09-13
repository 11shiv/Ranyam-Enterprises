import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Mock images - replace with actual image paths
const teamImages = {
  esther: "/images/homeImg.jpg",
  lianne: "/images/homeImg.jpg",
  john: "/images/homeImg.jpg",
  emily: "/images/homeImg.jpg",
};

const projectImages = {
  bridgewater: "/images/homeImg.jpg",
  pleasantview: "/images/homeImg.jpg",
  sunshine: "/images/homeImg.jpg",
  latest: "/images/homeImg.jpg",
};

const heroImage = "/images/homeImg.jpg";
const testimonialImages = {
  miriam: "/images/homeImg.jpg",
  james: "/images/homeImg.jpg",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>Ranyam Enterprises - Waterproofing Excellence</title>
        <meta
          name="description"
          content="Affordable, effective, and durable waterproofing solutions to protect your structures from moisture and corrosion."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Ranyam
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                About us
              </Link>
              <Link
                href="#projects"
                className="relative text-gray-600 hover:text-gray-900"
              >
                Projects
                <span className="absolute -top-2 -right-2 w-2 h-2 bg-gray-900 rounded-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-100 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight break-words">
                PROTECT YOUR
                <br />
                <span className="text-6xl md:text-8xl">HOME</span>
                <br />
                <span className="text-6xl md:text-8xl">DESIGN</span>
              </h1>
              <div className="w-16 h-px bg-gray-900"></div>
              <p className="text-lg text-gray-600 max-w-md break-words">
                Enhance and protect your home with our affordable, effective waterproofing solutions.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#projects"
                  className="text-gray-900 hover:underline"
                >
                  Twitter
                </Link>
                <Link
                  href="#projects"
                  className="text-gray-900 hover:underline"
                >
                  Facebook
                </Link>
                <Link
                  href="#projects"
                  className="text-gray-900 hover:underline"
                >
                  Instagram
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={heroImage}
                alt="Waterproofed home design"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white">⋆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="about" className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-6xl md:text-8xl font-black break-words">WHAT WE</h2>
              <h2 className="text-6xl md:text-8xl font-black break-words">OFFER</h2>
              <div className="w-16 h-px bg-white mt-4"></div>
            </div>
            <div className="lg:col-span-3 space-y-12">
              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mt-2">
                  <span className="text-white">⋆</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 break-words">Liquid Waterproofing Coatings</h3>
                  <p className="text-gray-300 break-words">
                    Seamless, UV-stable polymer emulsions that cure rapidly in 24–48 hours, offering excellent adhesion on concrete, masonry, and metal.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mt-2">
                  <span className="text-white">⋆</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 break-words">
                    Cementitious Waterproofing Slurries
                  </h3>
                  <p className="text-gray-300 break-words">
                    Two-component, crystalline technology ideal for basements, water tanks, and terraces, penetrating capillaries and micro-cracks.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mt-2">
                  <span className="text-white">⋆</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 break-words">
                    Specialty Waterproofing Solutions
                  </h3>
                  <p className="text-gray-300 break-words">
                    Tailored systems for trafficable decks, rooftop gardens, and below-ground structures, ensuring long-lasting protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-6xl md:text-8xl font-black break-words">PARTNERS</h2>
              <div className="w-16 h-px bg-white mt-4"></div>
              <p className="text-gray-300 mt-4 max-w-md break-words">
                We collaborate with top material suppliers and contractors to deliver innovative waterproofing solutions across India.
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center py-8">
                <h3 className="text-3xl font-bold mb-4 break-words">Westburn®</h3>
              </div>
              <div className="text-center py-8">
                <h3 className="text-3xl font-bold mb-4 break-words">GARCIA</h3>
                <p className="text-sm break-words">AND PARTNERS</p>
              </div>
              <div className="text-center py-8">
                <h3 className="text-3xl font-bold mb-4 break-words">MORNER</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
                OUR
              </h2>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
                PROCESS
              </h2>
              <div className="w-16 h-px bg-gray-900 mt-4"></div>
            </div>
            <div className="lg:col-span-3 space-y-12">
              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-2xl mt-2">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 break-words">Site Assessment</h3>
                  <p className="text-gray-600 break-words">
                    Our experts evaluate your structure to identify moisture risks and recommend tailored waterproofing solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-2xl mt-2">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 break-words">Application</h3>
                  <p className="text-gray-600 break-words">
                    We apply our high-performance coatings and slurries with precision, ensuring rapid curing and durability.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-2xl mt-2">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 break-words">Support & Maintenance</h3>
                  <p className="text-gray-600 break-words">
                    We provide ongoing technical support and preventive maintenance to ensure long-term protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
                MEET OUR
              </h2>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
                TEAM
              </h2>
              <div className="w-16 h-px bg-gray-900 mt-4"></div>
              <p className="text-gray-600 mt-4 max-w-md break-words">
                Our team of experienced chemists, engineers, and specialists is dedicated to delivering innovative waterproofing solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <Image
                  src={teamImages.esther}
                  alt="Esther Bryce"
                  width={300}
                  height={400}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold break-words">ESTHER BRYCE</h3>
                <p className="text-gray-600 break-words">Founder • Chemical Engineer</p>
              </div>
              <div className="text-center">
                <Image
                  src={teamImages.lianne}
                  alt="Lianne Wilson"
                  width={300}
                  height={400}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold break-words">LIANNE WILSON</h3>
                <p className="text-gray-600 break-words">Project Manager</p>
              </div>
              <div className="text-center">
                <Image
                  src={teamImages.john}
                  alt="John Doe"
                  width={300}
                  height={400}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold break-words">JOHN DOE</h3>
                <p className="text-gray-600 break-words">Field Specialist</p>
              </div>
              <div className="text-center">
                <Image
                  src={teamImages.emily}
                  alt="Emily Chen"
                  width={300}
                  height={400}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold break-words">EMILY CHEN</h3>
                <p className="text-gray-600 break-words">Technical Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
                CONTACT
              </h2>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
                US
              </h2>
              <div className="w-16 h-px bg-gray-900 mt-4"></div>
              <p className="text-gray-600 mt-4 max-w-md break-words">
                Reach out for tailored waterproofing solutions or technical support to protect your assets.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 break-words">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 break-words">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 break-words">
                  Your email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 break-words">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 break-words"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-16 break-words">
            CLIENT FEEDBACK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">⋆</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold break-words">Miriam Hayes</h3>
                  <p className="text-gray-600 break-words"> {/* Changed to text-gray-600 for visibility */}
                    Ranyam Enterprises transformed our water treatment plant with their durable waterproofing coatings. The team’s expertise and quick response ensured no downtime, saving us significant costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">⋆</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold break-words">James and Susan Smith</h3>
                  <p className="text-gray-600 break-words"> {/* Changed to text-gray-600 for visibility */}
                    Their cementitious slurries protected our basement from leaks, and the after-sales support was exceptional. We highly recommend Ranyam for any waterproofing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
              OUR PROJECTS
            </h2>
            <div className="w-24 h-px bg-gray-900 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <Image
                src={projectImages.bridgewater}
                alt="Multi-storey Car Park"
                width={600}
                height={400}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold text-2xl break-words">
                MULTI-STOREY CAR PARK
              </h3>
            </div>
            <div className="relative group">
              <Image
                src={projectImages.pleasantview}
                alt="Water Treatment Plant"
                width={600}
                height={400}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold text-2xl break-words">
                WATER TREATMENT PLANT
              </h3>
            </div>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 break-words">
            Our expertise ensures cost-effective and durable waterproofing for diverse projects across India.
          </p>
          <div className="text-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800">
              SEE MORE
            </button>
          </div>
        </div>
      </section>

      {/* Featured Property */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 break-words">HOTEL WATERPROOFING</h2>
              <h2 className="text-4xl font-bold break-words">SOLUTION</h2>
              <p className="text-gray-600 mt-4 mb-8 break-words">
                Our liquid coatings protect hotel rooftops and balconies, ensuring durability against weather and extending service life. Ideal for high-traffic areas with low maintenance needs.
              </p>
              <div className="text-4xl font-bold text-gray-900 break-words">Contact for Quote</div>
              <button className="mt-4 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800">
                LEARN MORE
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src={projectImages.sunshine}
                alt="Hotel rooftop"
                width={400}
                height={300}
                className="rounded-lg w-full h-48 object-cover"
              />
              <Image
                src="/images/sunshine-pool.jpg"
                alt="Hotel balcony"
                width={400}
                height={300}
                className="rounded-lg w-full h-48 object-cover"
              />
              <Image
                src="/images/sunshine-interior1.jpg"
                alt="Hotel interior"
                width={400}
                height={300}
                className="rounded-lg w-full h-48 object-cover"
              />
              <Image
                src="/images/sunshine-interior2.jpg"
                alt="Hotel waterproofing"
                width={400}
                height={300}
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Project */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
                LATEST
              </h2>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 break-words">
                PROJECT
              </h2>
              <div className="w-16 h-px bg-gray-900"></div>
              <p className="text-gray-600 max-w-md break-words">
                Our latest project showcases advanced waterproofing for a heritage restoration, preserving structure integrity with innovative solutions.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/20 rounded-lg"></div>
              <div className="relative z-10 flex justify-center items-center h-96">
                <Image
                  src={projectImages.latest}
                  alt="Latest project"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white">⋆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="break-words">&copy; 2025 Ranyam Enterprises. All rights reserved.</p>
          <p className="break-words">Phone: +91-9520648978 | Email: ranyamenterprises@gmail.com</p>
          <p className="break-words">Karhari, Bhagwanpur, Vaishali, Bihar, PIN - 844114</p>
        </div>
      </footer>

      <style>
        {`
          .break-words {
            word-break: break-word;
            overflow-wrap: break-word;
          }
        `}
      </style>
    </div>
  );
}