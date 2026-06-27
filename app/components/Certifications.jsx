import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'MERN Stack Web Developer',
    issuer: 'Programming Hero',
    date: '2026',
    credentialId: 'META-FE-2024-XXXX',
    url: '#',
    color: 'from-blue-500/20 to-blue-600/5',
    borderColor: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    title: 'WordPress Web Development',
    issuer: 'Ali Hossain Academy',
    date: '2023',
    credentialId: 'UC-MERN-2023-XXXX',
    url: '#',
    color: 'from-accent/20 to-accent-dark/5',
    borderColor: 'border-accent/20',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-accent">Credentials</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional certifications that validate my skills and commitment to continuous learning
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`group p-6 rounded-2xl bg-dark-600/30 border border-white/5 hover:${cert.borderColor} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`shrink-0 w-14 h-14 rounded-xl ${cert.iconBg} flex items-center justify-center`}>
                  <Award className={cert.iconColor} size={28} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <div className="text-slate-600 text-xs">
                      ID: {cert.credentialId}
                    </div>
                  </div>

                  <a
                    href={cert.url}
                    className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all"
                  >
                    View Credential
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}