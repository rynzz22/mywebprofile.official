import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Mail, 
  MapPin, 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Cpu, 
  ExternalLink, 
  ChevronRight,
  User,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers
} from 'lucide-react';

// --- Types ---
interface Skill {
  name: string;
  level?: string;
  category: 'language' | 'frontend' | 'backend' | 'tool' | 'core';
}

// --- Data ---
const SKILLS: Skill[] = [
  { name: 'Python', level: '5 yrs', category: 'language' },
  { name: 'JavaScript', level: '3 yrs', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'HTML5/CSS3', category: 'language' },
  { name: 'Java', level: 'Fundamentals', category: 'language' },
  
  { name: 'React.js', category: 'frontend' },
  { name: 'Responsive Design', category: 'frontend' },
  { name: 'UI/UX Principles', category: 'frontend' },
  { name: 'Component Architecture', category: 'frontend' },
  
  { name: 'Node.js', category: 'backend' },
  { name: 'REST API Design', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Auth Fundamentals', category: 'backend' },
  
  { name: 'Git/GitHub', category: 'tool' },
  { name: 'Figma', category: 'tool' },
  { name: 'VS Code', category: 'tool' },
  { name: 'Gemini AI', category: 'tool' },
  
  { name: 'System Architecture', category: 'core' },
  { name: 'Problem Solving', category: 'core' },
  { name: 'Project Planning', category: 'core' },
  { name: 'Leadership', category: 'core' },
];

const PROJECTS = [
  {
    title: "Full-Stack Web Applications",
    description: "Personal & practice projects focused on responsive design and robust backend logic.",
    tags: ["React", "Supabase", "PostgreSQL", "Figma"],
    details: [
      "Designed backend logic and database schemas.",
      "Applied authentication flows and security practices.",
      "Created UI prototypes in Figma before implementation."
    ],
    link: "https://github.com/rynzz22"
  },
  {
    title: "Enterprise Application Practice",
    description: "Building enterprise-style applications with modern MERN + TypeScript stack.",
    tags: ["MERN", "TypeScript", "Node.js", "REST API"],
    details: [
      "Implementing structured backend logic.",
      "Practicing database normalization.",
      "Secure API handling and scalable architecture."
    ]
  }
];

// --- Components ---

const SectionHeader = ({ icon: Icon, title, subtitle, color = "orange" }: { icon: any, title: string, subtitle?: string, color?: string }) => {
  const colorClasses: Record<string, string> = {
    orange: "bg-orange-50 border-orange-100 text-orange-600",
    red: "bg-red-50 border-red-100 text-red-600",
  };
  
  const currentClass = colorClasses[color] || colorClasses.orange;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg border ${currentClass.split(' ').slice(0, 2).join(' ')}`}>
          <Icon className={`w-5 h-5 ${currentClass.split(' ').pop()}`} />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">{title}</h2>
      </div>
      {subtitle && <p className="text-zinc-500 text-sm ml-12">{subtitle}</p>}
    </div>
  );
};

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  const getHoverColor = (cat: string) => {
    switch(cat) {
      case 'language': return 'group-hover:text-orange-600';
      case 'frontend': return 'group-hover:text-orange-500';
      case 'backend': return 'group-hover:text-red-600';
      default: return 'group-hover:text-zinc-900';
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -2 }}
      className="glass glass-hover px-3 py-1.5 rounded-full flex items-center gap-2 group cursor-default"
    >
      <span className={`text-sm font-medium text-zinc-700 ${getHoverColor(skill.category)} transition-colors`}>
        {skill.name}
      </span>
      {skill.level && (
        <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">
          {skill.level}
        </span>
      )}
    </motion.div>
  );
};

const SkillGroup = ({ title, icon: Icon, skills }: { title: string, icon: any, skills: Skill[] }) => (
  <div className="glass p-6 rounded-3xl border-white/40">
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-5 h-5 text-zinc-500" />
      <h3 className="font-semibold text-zinc-900">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <SkillBadge key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const Particles = () => {
  const particles = Array.from({ length: 30 });
  const colors = ['bg-orange-400', 'bg-red-400', 'bg-orange-300', 'bg-white'];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-20 ${colors[i % colors.length]}`}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              (Math.random() * 100) + "%",
              (Math.random() * 100) + "%",
              (Math.random() * 100) + "%",
            ],
            y: [
              (Math.random() * 100) + "%",
              (Math.random() * 100) + "%",
              (Math.random() * 100) + "%",
            ],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 8 + 4 + "px",
            height: Math.random() * 8 + 4 + "px",
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
};

const FadeIn: React.FC<{ delay?: number, direction?: "up" | "down" | "left" | "right", children: React.ReactNode }> = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </motion.div>
  );
};

const LiquidBackground = () => {
  const { scrollY } = useScroll();
  
  // Parallax offsets for different layers
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 80]);
  const y4 = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <Particles />
      </motion.div>
      
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 45, -45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="liquid-blob w-[500px] h-[500px] bg-orange-200/40 top-[-10%] left-[-10%]"
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -80, 0],
            scale: [1, 0.8, 1.1, 1],
            rotate: [0, -30, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="liquid-blob w-[600px] h-[600px] bg-red-200/40 bottom-[-10%] right-[-10%]"
        />
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, -100, 0],
            y: [0, 120, -50, 0],
            scale: [1, 1.1, 0.8, 1],
            rotate: [0, 60, -60, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="liquid-blob w-[400px] h-[400px] bg-orange-300/30 top-[40%] right-[20%]"
        />
      </motion.div>

      <motion.div style={{ y: y4 }} className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 80, -80, 0],
            scale: [1, 1.2, 1, 1],
            rotate: [0, -90, 90, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="liquid-blob w-[300px] h-[300px] bg-red-100/50 top-[20%] left-[30%]"
        />
      </motion.div>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-mesh selection:bg-orange-500/10">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-full hidden md:flex items-center gap-8 shadow-lg shadow-black/5">
        {['About', 'Skills', 'Projects', 'Education'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.toLowerCase() ? 'text-orange-600' : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <LiquidBackground />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 border-orange-200"
          >
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-medium text-orange-600 uppercase tracking-widest">Available for Opportunities</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-orange-600"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(249,115,22,0)",
                "0 0 20px rgba(249,115,22,0.1)",
                "0 0 0px rgba(249,115,22,0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            AJ RIENZE <br />
            LABRADA JOSOL
          </motion.h1>
          
          <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Aspiring <span className="text-zinc-900 font-medium">Full-Stack Developer</span> crafting enterprise-grade systems with precision and passion since age 13.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a 
              href="mailto:Felji.org@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-zinc-900/20"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
            <motion.a 
              href="https://github.com/rynzz22"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold flex items-center gap-2 hover:bg-white transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </div>
        </motion.div>

        <motion.a 
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-orange-500 transition-colors"
        >
          <div className="w-6 h-10 border-2 border-zinc-200 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-zinc-300 rounded-full" />
          </div>
        </motion.a>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-32 relative z-10">
        
        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <FadeIn>
            <SectionHeader icon={User} title="Professional Summary" color="orange" />
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Aspiring Full-stack developer with <span className="text-zinc-900 font-medium">5 years of hands-on experience</span> in Python, JavaScript, HTML, and CSS. I've been coding since I was 13, building a strong foundation in system architecture and logical problem-solving.
                </p>
                <p>
                  Currently, I am focused on building scalable applications using <span className="text-zinc-900 font-medium">React, TypeScript, Node.js, and PostgreSQL (Supabase)</span>. I am passionate about enterprise-grade systems, API design, and backend security.
                </p>
              </div>
              <FadeIn delay={0.2} direction="right">
                <div className="glass p-8 rounded-3xl border-orange-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Cpu className="w-24 h-24 text-orange-600" />
                  </div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest">Location</p>
                        <p className="text-zinc-900 font-medium">Bohol, Philippines</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest">Experience</p>
                        <p className="text-zinc-900 font-medium">5+ Years Coding</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest">Focus</p>
                        <p className="text-zinc-900 font-medium">Full-Stack & Architecture</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <FadeIn>
            <SectionHeader icon={Layers} title="Technical Arsenal" subtitle="A comprehensive toolkit for modern software development" color="red" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn delay={0.1}><SkillGroup title="Languages" icon={Code2} skills={SKILLS.filter(s => s.category === 'language')} /></FadeIn>
              <FadeIn delay={0.2}><SkillGroup title="Frontend" icon={Layout} skills={SKILLS.filter(s => s.category === 'frontend')} /></FadeIn>
              <FadeIn delay={0.3}><SkillGroup title="Backend & DB" icon={Database} skills={SKILLS.filter(s => s.category === 'backend')} /></FadeIn>
              <FadeIn delay={0.4}><SkillGroup title="Tools" icon={Terminal} skills={SKILLS.filter(s => s.category === 'tool')} /></FadeIn>
              <FadeIn delay={0.5}><SkillGroup title="Core Strengths" icon={Cpu} skills={SKILLS.filter(s => s.category === 'core')} /></FadeIn>
            </div>
          </FadeIn>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <FadeIn>
            <SectionHeader icon={Briefcase} title="Featured Work" subtitle="Selected projects showcasing full-stack capabilities" color="orange" />
            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <FadeIn key={project.title} delay={idx * 0.1}>
                  <div className="glass p-8 rounded-[2rem] border-white/60 flex flex-col group h-full">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-zinc-50 hover:bg-zinc-100 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-zinc-400" />
                        </a>
                      )}
                    </div>
                    <p className="text-zinc-500 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-orange-50 text-orange-600 border border-orange-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-3 mt-auto">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                          <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-32">
          <FadeIn direction="left">
            <SectionHeader icon={GraduationCap} title="Education" color="orange" />
            <div className="glass p-8 rounded-[2rem] border-white/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">Bachelor of Science in Information Systems (BSIS)</h3>
                <p className="text-orange-600 font-medium">NCBII — Present</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-500 text-sm">
                Currently Pursuing
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Additional Section */}
        <section className="pt-20 border-t border-zinc-100">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-zinc-900 mb-2">13</div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Age Started Coding</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-zinc-900 mb-2">5+</div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Years of Experience</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-zinc-900 mb-2">∞</div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Passion for Systems</p>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100 text-center">
        <p className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} AJ Rienze Labrada Josol. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}
