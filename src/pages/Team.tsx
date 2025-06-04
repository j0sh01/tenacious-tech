
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  User, 
  Briefcase, 
  Code, 
  Palette, 
  Settings, 
  Target,
  Award,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.team-card, .org-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const leadership = [
    {
      name: "Alex Johnson",
      role: "Chief Executive Officer",
      department: "Leadership",
      image: "photo-1472099645785-5658abf4ff4e",
      bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
      skills: ["Strategic Planning", "Business Development", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      department: "Technology",
      image: "photo-1494790108755-2616b612b786",
      bio: "Expert in Frappe ecosystem with deep experience in enterprise solutions.",
      skills: ["Frappe Development", "System Architecture", "Tech Leadership"],
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const teamMembers = [
    {
      name: "Marcus Rodriguez",
      role: "Senior Frappe Developer",
      department: "Development",
      image: "photo-1507003211169-0a1dd7228f2d",
      bio: "Frappe specialist with expertise in ERPNext customization and integration.",
      skills: ["ERPNext", "Python", "JavaScript", "API Integration"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Zhang",
      role: "Mobile App Developer",
      department: "Development",
      image: "photo-1438761681033-6461ffad8d80",
      bio: "Cross-platform mobile developer specializing in React Native and Flutter.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      department: "Development",
      image: "photo-1519085360753-af0119f7cbe7",
      bio: "Versatile developer with expertise in modern web technologies.",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Lisa Thompson",
      role: "UI/UX Designer",
      department: "Design",
      image: "photo-1544005313-94ddf0286df2",
      bio: "Creative designer focused on user-centered design and modern interfaces.",
      skills: ["UI Design", "UX Research", "Figma", "Prototyping"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      department: "Operations",
      image: "photo-1472099645785-5658abf4ff4e",
      bio: "Infrastructure specialist ensuring scalable and reliable deployments.",
      skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Infrastructure"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Anna Kowalski",
      role: "Project Manager",
      department: "Management",
      image: "photo-1487412720507-e7ab37603c6f",
      bio: "Agile project manager ensuring smooth delivery and client satisfaction.",
      skills: ["Agile", "Scrum", "Project Planning", "Client Relations"],
      social: {
        linkedin: "#"
      }
    }
  ];

  const departments = [
    {
      name: "Leadership",
      icon: Target,
      description: "Strategic vision and company direction",
      members: leadership.length,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Development",
      icon: Code,
      description: "Software development and technical implementation",
      members: 3,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Design",
      icon: Palette,
      description: "User experience and interface design",
      members: 1,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "Operations",
      icon: Settings,
      description: "Infrastructure and deployment operations",
      members: 1,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      name: "Management",
      icon: Briefcase,
      description: "Project coordination and client relations",
      members: 1,
      color: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  const stats = [
    { number: '8+', label: 'Team Members' },
    { number: '5', label: 'Departments' },
    { number: '100%', label: 'Remote Friendly' },
    { number: '24/7', label: 'Global Coverage' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-7xl mb-6">
              Meet Our <span className="text-tech-electric">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              A diverse group of passionate professionals dedicated to delivering 
              exceptional technology solutions and driving innovation forward.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass-morphism p-6 rounded-2xl">
                <div className="font-space font-bold text-2xl sm:text-3xl lg:text-4xl text-tech-electric mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Organization <span className="text-tech-electric">Structure</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our streamlined organization ensures efficient collaboration and 
              exceptional project delivery across all departments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
            {departments.map((dept, index) => (
              <div
                key={index}
                className={`org-card glass-morphism p-6 rounded-2xl text-center hover-glow transition-all duration-500 bg-gradient-to-br ${dept.color} opacity-0`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <dept.icon className="w-12 h-12 mx-auto mb-4 text-tech-electric" />
                <h3 className="font-space font-semibold text-lg mb-2 text-white">
                  {dept.name}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {dept.description}
                </p>
                <Badge variant="secondary" className="bg-white/10 text-white/80">
                  {dept.members} {dept.members === 1 ? 'Member' : 'Members'}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Leadership <span className="text-tech-electric">Team</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experienced leaders driving our vision and guiding our team towards excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {leadership.map((member, index) => (
              <Card key={index} className="team-card glass-morphism border-white/10 overflow-hidden opacity-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=400&h=400`} />
                      <AvatarFallback className="bg-tech-blue text-white text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-space font-semibold text-xl mb-1 text-white">
                      {member.name}
                    </h3>
                    <p className="text-tech-electric font-medium mb-2">{member.role}</p>
                    <Badge variant="outline" className="border-white/20 text-white/70 mb-4">
                      {member.department}
                    </Badge>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-white/10 text-white/80 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-white/60 hover:text-tech-electric transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-white/60 hover:text-tech-electric transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-white/60 hover:text-tech-electric transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-white/10" />

      {/* Core Team */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Core <span className="text-tech-electric">Team</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Talented professionals who bring our projects to life with expertise and dedication.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="team-card glass-morphism border-white/10 overflow-hidden hover-glow transition-all duration-500 opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=400&h=400`} />
                      <AvatarFallback className="bg-tech-blue text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-space font-semibold text-lg mb-1 text-white">
                      {member.name}
                    </h3>
                    <p className="text-tech-electric font-medium text-sm mb-2">{member.role}</p>
                    <Badge variant="outline" className="border-white/20 text-white/70 mb-3 text-xs">
                      {member.department}
                    </Badge>
                    <p className="text-white/70 text-xs leading-relaxed mb-3">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3 justify-center">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-white/10 text-white/80 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-white/60 hover:text-tech-electric transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-white/60 hover:text-tech-electric transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-white/60 hover:text-tech-electric transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
