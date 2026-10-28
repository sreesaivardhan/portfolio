import {
  SiPython, SiTypescript, SiJavascript,
  SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv,
  SiReact, SiNodedotjs, SiFastapi, SiExpress,
  SiPostgresql, SiMongodb, SiFirebase,
  SiGit, SiVscodium, SiJupyter,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';

// Icon is null for items that use a text badge (faiss has no brand icon)
export const skills = [
  // languages
  { name: 'python', category: 'languages', Icon: SiPython },
  { name: 'java', category: 'languages', Icon: FaJava },
  { name: 'typescript', category: 'languages', Icon: SiTypescript },
  { name: 'javascript', category: 'languages', Icon: SiJavascript },
  { name: 'sql', category: 'languages', Icon: FiDatabase },
  // ai / ml
  { name: 'pytorch', category: 'ai / ml', Icon: SiPytorch },
  { name: 'tensorflow', category: 'ai / ml', Icon: SiTensorflow },
  { name: 'scikit-learn', category: 'ai / ml', Icon: SiScikitlearn },
  { name: 'opencv', category: 'ai / ml', Icon: SiOpencv },
  { name: 'faiss', category: 'ai / ml', Icon: null }, // no brand icon → text badge
  // web
  { name: 'react', category: 'web', Icon: SiReact },
  { name: 'node.js', category: 'web', Icon: SiNodedotjs },
  { name: 'express.js', category: 'web', Icon: SiExpress },
  { name: 'fastapi', category: 'web', Icon: SiFastapi },
  // data / cloud
  { name: 'postgresql', category: 'data / cloud', Icon: SiPostgresql },
  { name: 'mongodb', category: 'data / cloud', Icon: SiMongodb },
  { name: 'firebase', category: 'data / cloud', Icon: SiFirebase },
  { name: 'aws', category: 'data / cloud', Icon: FaAws },
  // tools
  { name: 'git', category: 'tools', Icon: SiGit },
  { name: 'vscodium', category: 'tools', Icon: SiVscodium },
  { name: 'jupyter notebook', category: 'tools', Icon: SiJupyter },
];
