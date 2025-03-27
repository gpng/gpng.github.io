import { Projects } from '@/components/projects';
import { Icon } from '@iconify/react';
import { Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-10 border-b border-border">
        <div className="container max-w-5xl mx-auto flex justify-between items-center h-16 px-4">
          <h2 className="text-xl font-medium">Gerald Png</h2>
          <nav className="flex gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section id="about" className="pt-32 pb-16 px-4 md:pt-40 md:pb-24">
        <div className="container max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Software Engineer, Founder & Builder
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              I build software that solves real problems. Currently at GovTech
              Singapore, developing experimental systems for education.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/gpng"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon icon="mdi:github" width="20" height="20" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/geraldpng/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon icon="mdi:linkedin" width="20" height="20" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:geraldpng+hello@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work experience */}
      <section id="work" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>

          <div className="space-y-8">
            <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-px before:bg-border">
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2" />
              <h3 className="text-lg font-medium">Senior Software Engineer</h3>
              <p className="text-sm text-muted-foreground mb-2">
                GovTech Singapore, Experimental Systems & Technology Lab • 2020
                - Present
              </p>
              <p className="text-sm">
                Leading development of innovative education technology solutions
                for the Ministry of Education. Building scalable, secure
                applications using modern web technologies.
              </p>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-px before:bg-border">
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2" />
              <h3 className="text-lg font-medium">
                Co-founder & Lead Developer
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                GreatEscape.co & CovidControls.co • 2019 - Present
              </p>
              <p className="text-sm">
                Built and launched two successful web platforms from concept to
                production. Created GreatEscape.co as a travel planning tool and
                CovidControls.co as a pandemic response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <svg
              className="w-5 h-5 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <h2 className="text-2xl font-semibold">Projects</h2>
          </div>

          <Projects />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Gerald Png. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
