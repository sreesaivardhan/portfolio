import { skills } from '../data/portfolioData'
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiStreamlit,
  SiReact, SiNodedotjs, SiExpress, SiFastapi, SiSocketdotio,
  SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiFirebase,
  SiGooglecloud, SiDocker,
  SiGit, SiGithub, SiJupyter, SiPostman, SiArduino,
  SiEspressif
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

const skillIcons = {
  "Python": SiPython,
  "Java": FaJava,
  "C++": SiCplusplus,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,

  "PyTorch": SiPytorch,
  "TensorFlow": SiTensorflow,
  "Scikit-learn": SiScikitlearn,
  "OpenCV": SiOpencv,
  "Streamlit": SiStreamlit,

  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "FastAPI": SiFastapi,
  "Socket.IO": SiSocketdotio,

  "AWS": FaAws,
  "Google Cloud": SiGooglecloud,
  "Firebase": SiFirebase,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Prisma": SiPrisma,

  "Git": SiGit,
  "GitHub": SiGithub,
  "Docker": SiDocker,
  "VS Code": VscCode,
  "Jupyter": SiJupyter,
  "Postman": SiPostman,

  "ESP32": SiEspressif,
  "Arduino": SiArduino,
}

const colors = {
  "Programming": "text-blue-400 border-blue-500/30 bg-blue-500/10",
  "AI / ML": "text-purple-400 border-purple-500/30 bg-purple-500/10",
  "Web & Backend": "text-green-400 border-green-500/30 bg-green-500/10",
  "Cloud & Databases": "text-orange-400 border-orange-500/30 bg-orange-500/10",
  "Developer Tools": "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  "IoT & Embedded": "text-red-400 border-red-500/30 bg-red-500/10",
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 md:py-32 md:px-6" style={{ background: '#222831' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#F5F5F5' }}>Technical Skills</h2>
        <div className="w-16 h-1 mb-14" style={{ background: '#00ADB5' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {Object.entries(skills).map(([cat, items], cardIndex) => (
            <div
              key={cat}
              className="rounded-xl p-5 md:p-6 transition-transform duration-200 hover:-translate-y-1"
              style={{ background: '#393E46', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3 className="font-semibold text-sm md:text-xs tracking-widest mb-5" style={{ color: '#F5F5F5' }}>
                {cat.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s, chipIdx) => {
                  const Icon = skillIcons[s]
                  return (
                    <span
                      key={s}
                      className={`flex items-center gap-1.5 text-sm md:text-xs px-3 py-1.5 rounded-full border ${colors[cat]}`}
                      style={{
                        opacity: 0,
                        animation: 'fadeIn 0.3s ease forwards',
                        animationDelay: `${cardIndex * 50 + chipIdx * 35}ms`,
                      }}
                    >
                      {Icon && <Icon className="text-sm md:text-xs flex-shrink-0" />}
                      {s}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
