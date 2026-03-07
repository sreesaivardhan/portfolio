import { skills } from '../data/portfolioData'
import {
  SiPython, SiCplusplus, SiJavascript,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv,
  SiReact, SiNodedotjs, SiExpress, SiStreamlit,
  SiMongodb, SiMysql, SiFirebase,
  SiGooglecloud, SiDocker,
  SiGit, SiJupyter, SiPostman, SiArduino
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

const skillIcons = {
  "Python": SiPython,
  "C++": SiCplusplus,
  "JavaScript": SiJavascript,
  "Java": FaJava,
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Scikit-learn": SiScikitlearn,
  "OpenCV": SiOpencv,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Streamlit": SiStreamlit,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Firebase": SiFirebase,
  "Firebase Firestore": SiFirebase,
  "AWS": FaAws,
  "Google Cloud Platform": SiGooglecloud,
  "Docker": SiDocker,
  "Git": SiGit,
  "Jupyter Notebook": SiJupyter,
  "Postman": SiPostman,
  "Arduino": SiArduino,
  "VS Code": VscCode,
}

const colors = {
  "Programming":    "text-blue-400 border-blue-500/30 bg-blue-500/10",
  "AI / ML":        "text-purple-400 border-purple-500/30 bg-purple-500/10",
  "Web & Backend":  "text-green-400 border-green-500/30 bg-green-500/10",
  "Cloud & DevOps": "text-orange-400 border-orange-500/30 bg-orange-500/10",
  "Databases":      "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  "IoT & Embedded": "text-red-400 border-red-500/30 bg-red-500/10",
  "Developer Tools":"text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-800/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Skills</h2>
        <div className="w-16 h-1 bg-cyan-400 mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
              <h3 className="text-white font-semibold text-xs tracking-widest mb-4">{cat.toUpperCase()}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(s => {
                  const Icon = skillIcons[s]
                  return (
                    <span key={s} className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${colors[cat]}`}>
                      {Icon && <Icon className="text-sm flex-shrink-0" />}
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
