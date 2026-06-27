import { Code2, Palette, Rocket, Users } from 'lucide-react';

const stats = [
  { icon: Code2, value: '20+', label: 'Projects Completed' },
  { icon: Users, value: '10+', label: 'Happy Clients' },
  { icon: Rocket, value: '2+', label: 'Years Experience' },
  { icon: Palette, value: '98%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Know Me <span className="text-accent">Better</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image / Visual */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 mt-20">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group p-6 rounded-2xl bg-dark-600/50 border border-white/5 hover:border-accent/20 transition-all duration-300 text-center hover:-translate-y-1 "
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              I&apos;m Jubair Alam, a passionate{' '}
              <span className="text-accent">Full Stack Developer</span>
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I am a full stack developer with 3+ years of experience building modern,
                responsive, and user-friendly web applications. I specialize in creating
                clean, efficient, and scalable digital solutions.
              </p>

              <p>
                My expertise includes the MERN stack (MongoDB, Express.js, React, Node.js)
                along with Next.js, TypeScript, Tailwind CSS, and PostgreSQL. I enjoy
                solving complex problems and turning ideas into reality through code.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Name', value: 'Jubair Alam Alif' },
                { label: 'Email', value: 'jubairalam.dev@gmail.com' },
                { label: 'Location', value: 'Mymensingh, Bangladesh' },
                { label: 'Availability', value: 'Open to Work' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-slate-500 text-sm">{label}</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* Stats */}

      </div>
    </section>
  );
}