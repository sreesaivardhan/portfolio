import { personalInfo } from '../data/portfolioData'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-16 h-1 bg-cyan-400 mb-8 mx-auto"></div>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Open to internship opportunities, AI/ML roles, and interesting collaborations.
          Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <a href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center gap-3 bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-xl p-4 text-slate-300 hover:text-cyan-400 transition-all">
            <HiMail className="text-xl text-cyan-400" />
            <span className="text-sm">{personalInfo.email}</span>
          </a>
          <div className="flex items-center justify-center gap-3 bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-300">
            <HiPhone className="text-xl text-cyan-400" />
            <span className="text-sm">{personalInfo.phone}</span>
          </div>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-xl p-4 text-slate-300 hover:text-cyan-400 transition-all">
            <SiGithub className="text-xl text-cyan-400" />
            <span className="text-sm">github.com/sreesaivardhan</span>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-xl p-4 text-slate-300 hover:text-cyan-400 transition-all">
            <FaLinkedin className="text-xl text-cyan-400" />
            <span className="text-sm">linkedin.com/in/saivardhan06</span>
          </a>
        </div>

        <p className="text-slate-700 text-sm">
          Portfolio · Sirasanagandla Sree Sai Vardhan © 2026
        </p>
      </div>
    </section>
  )
}
