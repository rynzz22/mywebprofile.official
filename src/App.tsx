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
  { name: 'JavaScript', level: '3 yrs', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'HTML5/CSS3', category: 'language' },
  { name: 'Python', level: '5 yrs', category: 'language' },
  
  { name: 'React.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Responsive Design', category: 'frontend' },
  
  { name: 'Nest.js', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'API Design', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  
  { name: 'Git/GitHub', category: 'tool' },
  { name: 'Figma', category: 'tool' },
  { name: 'Postman', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  
  { name: 'System Architecture', category: 'core' },
  { name: 'Problem Solving', category: 'core' },
  { name: 'Project Planning', category: 'core' },
  { name: 'Leadership', category: 'core' },
];

const PROJECTS = [
  {
    title: "Talibon Respo",
    description: "A real-time transportation tracking application designed to help commuters in Talibon, Bohol locate buses and vans more efficiently.",
    tags: ["React.js", "Node.js", "Supabase", "Gemini", "Google Maps API"],
    details: [
      "Live vehicle tracking and route monitoring.",
      "Real-time notifications for nearby transportation.",
      "Integrated Google Maps API for precise location services.",
      "Leveraging Gemini for intelligent route suggestions."
    ],
    link: "#"
  },
  {
    title: "Talibon One App",
    description: "A comprehensive community platform for Talibon, focusing on local services and engagement.",
    tags: ["React", "Nest.js", "PostgreSQL", "API Design"],
    details: [
      "Core member contributing to front-end architecture.",
      "Developing responsive UI components with React.",
      "Collaborating on backend API design and database schemas.",
      "Ensuring high performance and scalable system design."
    ],
    link: "#"
  },
  {
    title: "Enterprise Application Suite",
    description: "Building enterprise-style applications with modern Nest.js + TypeScript stack.",
    tags: ["Nest.js", "TypeScript", "PostgreSQL", "React"],
    details: [
      "Implementing structured backend logic and RESTful APIs.",
      "Practicing database normalization and optimization.",
      "Secure authentication and authorization flows."
    ]
  }
];

// --- Components ---

const SectionHeader = ({ icon: Icon, title, subtitle, color = "zinc" }: { icon: any, title: string, subtitle?: string, color?: string }) => {
  const colorClasses: Record<string, string> = {
    zinc: "bg-zinc-50 border-zinc-100 text-zinc-900",
    black: "bg-black border-black text-white",
  };
  
  const currentClass = colorClasses[color] || colorClasses.zinc;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-3">
        <div className={`p-2.5 rounded-xl border ${currentClass.split(' ').slice(0, 2).join(' ')}`}>
          <Icon className={`w-5 h-5 ${currentClass.split(' ').pop()}`} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">{title}</h2>
      </div>
      {subtitle && <p className="text-zinc-500 text-base ml-14 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -2 }}
      className="glass glass-hover px-4 py-2 rounded-xl flex items-center gap-2 group cursor-default"
    >
      <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">
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
  const particles = Array.from({ length: 40 });
  const colors = ['bg-zinc-200', 'bg-zinc-300', 'bg-zinc-400', 'bg-white'];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-10 ${colors[i % colors.length]}`}
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
            x: [0, 150, -100, 0],
            y: [0, -100, 150, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 90, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob w-[700px] h-[700px] bg-zinc-100 top-[-20%] left-[-20%]"
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, -180, 120, 0],
            y: [0, 150, -120, 0],
            scale: [1, 0.7, 1.2, 1],
            rotate: [0, -60, 60, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob w-[800px] h-[800px] bg-zinc-200 bottom-[-20%] right-[-20%]"
        />
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 120, -150, 0],
            y: [0, 180, -80, 0],
            scale: [1, 1.2, 0.7, 1],
            rotate: [0, 120, -120, 0]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob w-[600px] h-[600px] bg-zinc-100 top-[30%] right-[10%]"
        />
      </motion.div>

      <motion.div style={{ y: y4 }} className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, -80, 80, 0],
            y: [0, 120, -120, 0],
            scale: [1, 1.4, 0.9, 1],
            rotate: [0, -180, 180, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob w-[500px] h-[500px] bg-zinc-200 top-[10%] left-[20%]"
        />
      </motion.div>
    </div>
  );
};

const PlayfulName = ({ text }: { text: string }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block cursor-default"
          whileHover={{ 
            y: -20,
            rotate: [0, -10, 10, -10, 0],
            scale: 1.2,
            color: "#000",
            transition: { 
              rotate: { duration: 0.4, ease: "easeInOut" },
              y: { type: "spring", stiffness: 300, damping: 10 },
              scale: { type: "spring", stiffness: 300, damping: 10 },
              default: { duration: 0.3 }
            }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
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
    <div className="min-h-screen bg-mesh selection:bg-zinc-900/10">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-2xl hidden md:flex items-center gap-8 shadow-sm">
        {['About', 'Skills', 'Projects', 'Education'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.toLowerCase() ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-900'
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 border-zinc-200"
          >
            <Sparkles className="w-4 h-4 text-zinc-900" />
            <span className="text-xs font-semibold text-zinc-900 uppercase tracking-widest">Available for Opportunities</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-zinc-900"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 40px rgba(0,0,0,0.05)",
                "0 0 0px rgba(0,0,0,0)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <PlayfulName text="AJ RIENZE" /> <br />
            <PlayfulName text="LABRADA JOSOL" />
          </motion.h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            <span className="text-zinc-900 font-medium">Front-end Developer</span> specializing in React, Nest.js, and PostgreSQL. Crafting high-performance systems with a focus on API design.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <motion.a 
              href="mailto:Felji.org@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-zinc-900 text-white rounded-2xl font-semibold flex items-center gap-2 hover:bg-black transition-all shadow-xl shadow-zinc-900/10"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
            <motion.a 
              href="https://github.com/rynzz22"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 glass rounded-2xl font-semibold flex items-center gap-2 hover:bg-white transition-all"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-300 hover:text-zinc-900 transition-colors"
        >
          <div className="w-6 h-10 border-2 border-zinc-100 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-zinc-200 rounded-full" />
          </div>
        </motion.a>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-32 relative z-10">
        
        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <FadeIn>
            <SectionHeader icon={User} title="Professional Summary" color="zinc" />
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6 text-lg text-zinc-500 leading-relaxed">
                <p>
                  Front-end developer and core member of the <span className="text-zinc-900 font-medium">Talibon One App</span> team. I specialize in crafting high-performance user interfaces with React and robust backends with Nest.js.
                </p>
                <p>
                  With a strong foundation in <span className="text-zinc-900 font-medium">API design and PostgreSQL</span>, I build scalable systems that prioritize both developer experience and end-user performance.
                </p>
              </div>
              <FadeIn delay={0.2} direction="right">
                <div className="glass p-10 rounded-[2.5rem] border-zinc-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Cpu className="w-32 h-32 text-black" />
                  </div>
                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-zinc-900" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Location</p>
                        <p className="text-zinc-900 font-medium text-lg">Bohol, Philippines</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-zinc-900" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Role</p>
                        <p className="text-zinc-900 font-medium text-lg">Front-end Developer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-zinc-900" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Focus</p>
                        <p className="text-zinc-900 font-medium text-lg">Nest.js & API Design</p>
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
            <SectionHeader icon={Layers} title="Technical Arsenal" subtitle="A curated toolkit for building modern, high-performance applications" color="zinc" />
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
            <SectionHeader icon={Briefcase} title="Featured Work" subtitle="Selected projects showcasing architecture and design expertise" color="zinc" />
            <div className="grid md:grid-cols-2 gap-10">
              {PROJECTS.map((project, idx) => (
                <FadeIn key={project.title} delay={idx * 0.1}>
                  <div className="glass p-10 rounded-[2.5rem] border-zinc-100 flex flex-col group h-full hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                    <div className="flex justify-between items-start mb-8">
                      <h3 className="text-3xl font-bold text-zinc-900 group-hover:text-zinc-500 transition-colors">
                        {project.title}
                      </h3>
                      {project.link && project.link !== "#" && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-zinc-400" />
                        </a>
                      )}
                    </div>
                    <p className="text-zinc-500 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg bg-zinc-50 text-zinc-600 border border-zinc-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-4 mt-auto">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4 text-zinc-500">
                          <ChevronRight className="w-5 h-5 text-zinc-300 mt-0.5 shrink-0" />
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
            <SectionHeader icon={GraduationCap} title="Education" color="zinc" />
            <div className="glass p-10 rounded-[2.5rem] border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Bachelor of Science in Information Systems (BSIS)</h3>
                <p className="text-zinc-500 font-medium text-lg">NCBII — Present</p>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-zinc-900 text-white text-sm font-bold tracking-widest uppercase">
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
