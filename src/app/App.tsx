import { useState } from "react";
import {
  Monitor, FileText, Palette, Calculator, Globe, Code, Keyboard,
  Wind, Wifi, Award, Clock, IndianRupee, MapPin, Phone, Mail,
  Star, Menu, X, CheckCircle, Users, BookOpen, TrendingUp,
  ChevronRight, Facebook, Youtube, Instagram, Send,
} from "lucide-react";

const BLUE = "#0F4C81";
const CYAN = "#00B4D8";
const ORANGE = "#FF9F1C";

const courses = [
  {
    icon: Monitor,
    title: "Basic Computer Course",
    desc: "Master computing fundamentals — hardware, OS, file management, and typing for complete beginners.",
    duration: "3 Months",
    color: BLUE,
  },
  {
    icon: FileText,
    title: "MS Office Training",
    desc: "Word, Excel, PowerPoint, and Outlook — become proficient with the most widely-used office suite.",
    duration: "2 Months",
    color: CYAN,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Photoshop, CorelDRAW, and Canva to create posters, banners, logos, and professional digital art.",
    duration: "3 Months",
    color: ORANGE,
  },
  {
    icon: Calculator,
    title: "Tally & Accounting",
    desc: "Industry-standard TallyPrime for GST billing, accounts management, and financial reporting.",
    duration: "2 Months",
    color: BLUE,
  },
  {
    icon: Globe,
    title: "Internet & Email Basics",
    desc: "Browse safely, send professional emails, use Google services, and stay secure online.",
    duration: "1 Month",
    color: CYAN,
  },
  {
    icon: Code,
    title: "Web Design Basics",
    desc: "Build your first website with HTML, CSS, and basic JavaScript — no prior experience needed.",
    duration: "3 Months",
    color: ORANGE,
  },
  {
    icon: Keyboard,
    title: "Typing Course",
    desc: "Hindi and English typing with speed and accuracy drills — essential for government exam eligibility.",
    duration: "1 Month",
    color: BLUE,
  },
];

const facilities = [
  { icon: Wind, label: "AC Computer Lab", desc: "Cool, comfortable learning environment year-round" },
  { icon: Wifi, label: "High-Speed Internet", desc: "Dedicated broadband connection for all students" },
  { icon: Monitor, label: "Individual Systems", desc: "Each student gets their own dedicated workstation" },
  { icon: Award, label: "Certificate on Completion", desc: "Recognized certification issued after every course" },
  { icon: Clock, label: "Flexible Timings", desc: "Morning, afternoon, and evening batches available" },
  { icon: IndianRupee, label: "Affordable Fees", desc: "Lowest course fees with installment options available" },
];

const testimonials = [
  {
    name: "Priya Chakraborty",
    role: "Class 12 Student, South Kolkata",
    review: "The MS Office course helped me with school projects and my parents are impressed with my skills now. Teachers here are very patient and explain everything clearly.",
    rating: 5,
    initials: "PC",
    color: BLUE,
  },
  {
    name: "Rahul Das",
    role: "Job Seeker, Behala",
    review: "After completing the Tally course here, I got a job within 2 months in a local accounting firm. The practical training made all the difference in my interview.",
    rating: 5,
    initials: "RD",
    color: CYAN,
  },
  {
    name: "Sunita Mondal",
    role: "Homemaker, turned Freelancer",
    review: "Started from zero, now I do Canva designs for local businesses. The graphic design course was excellent — very affordable and completely practical.",
    rating: 5,
    initials: "SM",
    color: ORANGE,
  },
];

const highlights = [
  { icon: IndianRupee, label: "Affordable Fees", desc: "Starting ₹500/month" },
  { icon: Users, label: "Experienced Trainers", desc: "10+ years of teaching" },
  { icon: BookOpen, label: "Job-Oriented Courses", desc: "Industry-relevant curriculum" },
  { icon: TrendingUp, label: "Practical Classes", desc: "Hands-on from day one" },
];

const navLinks = ["Home", "Courses", "About", "Facilities", "Contact"];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#0F4C81]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})` }}
            >
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm leading-tight" style={{ color: BLUE }}>Chowdhury Computer</div>
              <div className="text-[11px] text-gray-400 leading-tight">Training Centre · Kolkata</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-[#0F4C81] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2 rounded-xl text-white transition-all hover:opacity-90 hover:shadow-md active:scale-95"
              style={{ background: ORANGE }}
            >
              Enroll Now
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 py-2.5 border-b border-gray-50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-semibold text-center px-4 py-3 rounded-xl text-white mt-3"
              style={{ background: ORANGE }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Enroll Now
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, #071e38 0%, ${BLUE} 55%, #1565a8 100%)` }}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.07]"
            style={{ background: CYAN }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-[0.08]"
            style={{ background: ORANGE }}
          />
          <div className="absolute top-1/3 right-[30%] w-40 h-40 rounded-full opacity-[0.04] bg-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-0 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: `${ORANGE}22`, color: ORANGE, border: `1px solid ${ORANGE}44` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ORANGE }} />
              Kolkata's Most Affordable Computer Institute
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.15] mb-5">
              Build Your Future<br />
              <span style={{ color: CYAN }}>with Computer</span><br />
              Skills
            </h1>

            <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-[26rem]">
              Practical computer training for students and beginners in Kolkata. Learn at your own pace with expert guidance and fees that fit every budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:shadow-xl hover:scale-105 active:scale-95"
                style={{ background: ORANGE }}
              >
                Enroll Now
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/25 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Free Demo Class
              </a>
            </div>

            <div className="flex gap-8 items-center">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-300 text-xs mt-0.5">Students Trained</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">7+</div>
                <div className="text-blue-300 text-xs mt-0.5">Courses Offered</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-blue-300 text-xs mt-0.5">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: BLUE }}
            >
              <img
                src="https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=720&h=540&fit=crop&auto=format"
                alt="Students learning on laptops in a computer training class"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${BLUE}88 0%, transparent 50%)` }}
              />
            </div>
            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${ORANGE}18` }}>
                <Award className="w-5 h-5" style={{ color: ORANGE }} />
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: BLUE }}>Certified Courses</div>
                <div className="text-gray-400 text-xs">Government Recognised</div>
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ background: `${CYAN}30` }}
            />
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <section className="py-10 bg-white border-b border-[#0F4C81]/08">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-xl border hover:shadow-md transition-all hover:border-[#0F4C81]/20 bg-white"
                style={{ borderColor: `${BLUE}14` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${BLUE}10` }}
                >
                  <Icon className="w-5 h-5" style={{ color: BLUE }} />
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: BLUE }}>{label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" className="py-20 bg-[#F3F7FA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3"
              style={{ background: `${CYAN}18`, color: CYAN }}
            >
              Our Courses
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: BLUE }}>
              Learn Skills That Get You Hired
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Practical, industry-relevant courses designed for beginners, students, and job seekers across Kolkata.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {courses.map(({ icon: Icon, title, desc, duration, color }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group border border-transparent hover:border-[#0F4C81]/08 cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}14` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: BLUE }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${color}14`, color }}
                  >
                    {duration}
                  </span>
                  <button
                    className="text-xs font-semibold flex items-center gap-0.5 transition-all group-hover:gap-1.5"
                    style={{ color }}
                  >
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-[#E8F4FD]">
              <img
                src="https://images.unsplash.com/photo-1778489769184-45868633c527?w=720&h=540&fit=crop&auto=format"
                alt="Teacher guiding a student on a computer in a Kolkata training classroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 w-36 h-36 rounded-2xl -z-10"
              style={{ background: `${CYAN}20` }}
            />
            <div
              className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl -z-10"
              style={{ background: `${ORANGE}18` }}
            />
            <div
              className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-4"
            >
              <div className="text-2xl font-bold" style={{ color: BLUE }}>500+</div>
              <div className="text-gray-500 text-xs font-medium">Happy Students & Counting</div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ background: `${BLUE}10`, color: BLUE }}
            >
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug" style={{ color: BLUE }}>
              Kolkata's Trusted Local Computer Training Centre
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Chowdhury Computer Training Centre has been empowering students, homemakers, and job seekers in Kolkata for over a decade. We believe quality computer education should be accessible to everyone — regardless of background or budget.
            </p>

            <ul className="space-y-3.5 mb-8">
              {[
                "Beginner-friendly teaching with step-by-step approach",
                "Small batch sizes for personalised, focused attention",
                "Practical hands-on training on individual systems from day one",
                "Real-world projects and industry-relevant assignments",
                "Local trainers who understand the community's specific needs",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: CYAN }} />
                  <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:scale-[1.02] active:scale-95"
              style={{ background: BLUE }}
            >
              Book a Free Demo <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section
        id="facilities"
        className="py-20"
        style={{ background: `linear-gradient(135deg, #071e38 0%, ${BLUE} 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3"
              style={{ background: `${CYAN}20`, color: CYAN }}
            >
              Facilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              A Modern Learning Environment
            </h2>
            <p className="text-blue-200 max-w-lg mx-auto leading-relaxed">
              We invest in the best infrastructure so you can focus entirely on learning and growing your skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-2xl p-6 border border-white/10 hover:border-white/25 transition-all hover:bg-white/[0.07] group"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${CYAN}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: CYAN }} />
                </div>
                <h3 className="font-bold text-white mb-1.5">{label}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-[#F3F7FA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3"
              style={{ background: `${ORANGE}18`, color: ORANGE }}
            >
              Student Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: BLUE }}>
              What Our Students Say
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              Real stories from real students who built new skills and transformed their careers with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, review, rating, initials, color }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: ORANGE }} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  "{review}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 select-none"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)` }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: BLUE }}>{name}</div>
                    <div className="text-gray-400 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3"
              style={{ background: `${BLUE}10`, color: BLUE }}
            >
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: BLUE }}>
              Start Your Learning Journey Today
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              Fill in the form below and we'll get back to you within 24 hours with all the details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: `${CYAN}18` }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: CYAN }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: BLUE }}>Query Sent!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    We'll contact you within 24 hours. Thank you for your interest in Chowdhury Computer Training Centre!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Rahul Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all bg-[#F3F7FA]"
                        style={{ borderColor: `${BLUE}20` }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all bg-[#F3F7FA]"
                        style={{ borderColor: `${BLUE}20` }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="yourname@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all bg-[#F3F7FA]"
                      style={{ borderColor: `${BLUE}20` }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Course Interested In *</label>
                    <select
                      required
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all bg-[#F3F7FA] text-gray-600"
                      style={{ borderColor: `${BLUE}20` }}
                    >
                      <option value="">Select a course...</option>
                      {courses.map((c) => (
                        <option key={c.title} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Any questions or special requirements? Let us know..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all bg-[#F3F7FA] resize-none"
                      style={{ borderColor: `${BLUE}20` }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:opacity-90 active:scale-95"
                    style={{ background: `linear-gradient(135deg, ${BLUE}, #1565a8)` }}
                  >
                    <Send className="w-4 h-4" />
                    Send Query
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="space-y-5">
              <div
                className="rounded-2xl p-6 border"
                style={{ borderColor: `${BLUE}14`, background: "#F3F7FA" }}
              >
                <h3 className="font-bold text-base mb-5" style={{ color: BLUE }}>Contact Information</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      text: "Chowdhury Computer Training Centre\nKolkata, West Bengal — 700 XXX",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      text: "+91 98XXX XXXXX\n+91 87XXX XXXXX",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      text: "info@chowdhurytc.in\nadmissions@chowdhurytc.in",
                    },
                  ].map(({ icon: Icon, label, text }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${BLUE}12` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: BLUE }} />
                      </div>
                      <div>
                        <div className="font-semibold text-xs uppercase tracking-wide mb-0.5" style={{ color: BLUE }}>{label}</div>
                        <div className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder card */}
              <div
                className="rounded-2xl overflow-hidden h-52 relative border cursor-pointer group"
                style={{ borderColor: `${BLUE}14` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1723987135977-ae935608939e?w=640&h=300&fit=crop&auto=format"
                  alt="Computer training institute classroom environment"
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: `${BLUE}10` }}>
                  <MapPin className="w-8 h-8 mb-2" style={{ color: BLUE }} />
                  <span className="font-semibold text-sm" style={{ color: BLUE }}>Kolkata, West Bengal</span>
                  <span className="text-gray-500 text-xs mt-1">View on Google Maps →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#071e38" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})` }}
                >
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Chowdhury Computer</div>
                  <div className="text-[11px] text-blue-400">Training Centre · Kolkata</div>
                </div>
              </div>
              <p className="text-blue-300 text-sm leading-relaxed mb-5 max-w-xs">
                Empowering Local Students with Digital Skills. Affordable, practical computer training for everyone across Kolkata.
              </p>
              <div className="flex gap-2.5">
                {[Facebook, Youtube, Instagram].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: `${BLUE}80` }}
                    aria-label="Social media"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: CYAN }}>Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Courses", "About Us", "Facilities", "Contact Us", "Free Demo Class"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: CYAN }}>Popular Courses</h4>
              <ul className="space-y-2">
                {courses.slice(0, 6).map(({ title }) => (
                  <li key={title}>
                    <a href="#courses" className="text-blue-300 text-sm hover:text-white transition-colors">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-blue-400 text-xs">
              © 2025 Chowdhury Computer Training Centre. All rights reserved.
            </p>
            <p className="text-xs font-medium" style={{ color: `${CYAN}80` }}>
              Empowering Local Students with Digital Skills
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
