"use client";

import { useState } from 'react';
import { Send, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jubairalam.dev@gmail.com',
    href: 'mailto:jubairalam.dev@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1727569727',
    href: 'tel:+8801727569727',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mymensingh, Bangladesh',
    href: '#',
  },
];

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    setSending(true);
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSending(false);
    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="text-accent">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I&apos;m always
            open to discussing new opportunities.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let&apos;s talk about everything!</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi — my inbox
                is always open. I&apos;ll try my best to get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-600/30 border border-white/5 hover:border-accent/20 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="pt-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <MessageSquare size={16} />
                <span>Follow me</span>
              </div>
              <div className="flex gap-3">
                {['GitHub', 'LinkedIn', 'Twitter', 'Facebook'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 bg-dark-500 hover:bg-accent/10 border border-white/5 hover:border-accent/20 rounded-lg text-slate-400 hover:text-accent text-xs font-medium transition-all duration-200"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-dark-600/30 border border-white/5 hover:border-accent/10 transition-colors"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-dark-400/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-dark-400/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-dark-400/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-dark-400/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}