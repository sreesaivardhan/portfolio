import { personalInfo, education } from '../data/portfolioData'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="w-16 h-1 bg-cyan-400 mb-12"></div>
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            {/* Full name with surname shown prominently */}
            <p className="text-cyan-400 text-xs font-mono tracking-widest mb-2">NAME</p>
            <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
              Sirasanagandla<br />Sree Sai Vardhan
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-4">
              I'm a third-year B.Tech CSE (AIML) student at VIT-AP University, Amaravati,
              currently serving as <span className="text-cyan-400 font-semibold">Vice President
              of the Machine Learning Club</span>. I'm passionate about building intelligent
              systems that solve real-world problems.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-4">
              My work spans <span className="text-white">medical imaging AI</span>, financial
              fraud detection, <span className="text-white">GenAI applications</span>, IoT-integrated
              deep learning, and secure cloud-native backend systems — always with a focus on
              production-grade quality and measurable results.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <HiLocationMarker className="text-cyan-400 text-base" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm">
                <SiGithub className="text-lg" /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm">
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm">
                <HiMail className="text-lg" /> Email
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-cyan-400 font-semibold text-xs tracking-widest mb-4">EDUCATION</p>
              <p className="text-white font-bold text-lg">{education.university}</p>
              <p className="text-slate-300 mt-1 text-sm">{education.degree}</p>
              <div className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">CGPA</span>
                  <span className="text-cyan-400 font-bold">{education.cgpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Graduation</span>
                  <span className="text-slate-300">{education.graduation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-300">Amaravati, AP</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-slate-500 text-xs tracking-wider mb-3">RELEVANT COURSEWORK</p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map(c => (
                    <span key={c} className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}