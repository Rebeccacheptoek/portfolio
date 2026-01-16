import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ArrowRight, Menu, X } from 'lucide-react';

export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-gray-900">
                            Rebecca Cheptoek
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8">
                            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About</button>
                            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 transition-colors">Experience</button>
                            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors">Projects</button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pt-4 pb-2 space-y-3">
                            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-600 hover:text-gray-900">About</button>
                            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-600 hover:text-gray-900">Experience</button>
                            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-600 hover:text-gray-900">Projects</button>
                            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 hover:text-gray-900">Contact</button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Hi, I'm Rebecca Cheptoek
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                            Software Engineer specializing in Laravel backend systems and full-stack development. Built loan origination platforms handling U.S. lending compliance and HR systems improving team efficiency by 25% across East Africa.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => scrollToSection('experience')}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                View My Work
                                <ArrowRight size={20} />
                            </button>
                            <a
                                href="mailto:rebeccacheptoek1@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Rebecca</h2>
                    <div className="prose prose-lg max-w-3xl">
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            Software Engineer with 2+ years of experience building scalable backend systems and data-driven applications. At PaySoko Systems, I architect loan origination platforms ensuring U.S. lending compliance, handling thousands of applications with robust financial calculations and real-time tracking.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            I specialize in PHP/Laravel for backend APIs, Python for data automation, and JavaScript for responsive frontends. My approach emphasizes Test-Driven Development, CI/CD automation, and building systems that scale. I've reduced API response times through Redis caching, improved team efficiency by 25% through Microsoft Graph integrations, and cut production defects by 15% through comprehensive testing.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Bachelor's degree in Computer Science from Kabarak University.<em>Available for software engineering roles and technical consulting.</em>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="border-l-4 border-gray-900 pl-6">
                            <div className="text-4xl font-bold text-gray-900 mb-2">2+ Years</div>
                            <div className="text-gray-600">Professional Experience</div>
                        </div>
                        <div className="border-l-4 border-gray-900 pl-6">
                            <div className="text-4xl font-bold text-gray-900 mb-2">25%</div>
                            <div className="text-gray-600">Efficiency Improvement</div>
                        </div>
                        <div className="border-l-4 border-gray-900 pl-6">
                            <div className="text-4xl font-bold text-gray-900 mb-2">6+</div>
                            <div className="text-gray-600">Major Projects Delivered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Projects & Leadership */}
            <section id="experience" className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Projects & Leadership</h2>

                    {/* PaySoko */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Loan Origination System</h3>
                        <p className="text-gray-600 mb-4">
                            Led development of comprehensive loan origination platform ensuring U.S. lending compliance with end-to-end client workflows.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div>
                                <span className="font-semibold text-gray-900">Scale:</span>
                                <span className="text-gray-700"> Handles complete loan lifecycle from intake to repayment with financial precision</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Architecture:</span>
                                <span className="text-gray-700"> Laravel backend with MySQL and Redis caching, optimized API response latency</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Quality:</span>
                                <span className="text-gray-700"> Test-Driven Development for financial calculations, CI/CD with GitHub Actions</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Frontend:</span>
                                <span className="text-gray-700"> JavaScript/Bootstrap dashboards for loan officer pipeline management</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Laravel</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">MySQL</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Redis</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CI/CD</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">TDD</span>
                        </div>
                    </div>

                    {/* Micro-Cap */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Enterprise HR & Performance Platform</h3>
                        <p className="text-gray-600 mb-4">
                            Engineered comprehensive HRMS and CRM platform with performance dashboards tracking critical KPIs for senior management across East Africa.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div>
                                <span className="font-semibold text-gray-900">Impact:</span>
                                <span className="text-gray-700"> Improved cross-team communication efficiency by 25% through Microsoft Graph integration</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Automation:</span>
                                <span className="text-gray-700"> Python/SQL reporting pipelines reducing manual data processing by 30%</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Security:</span>
                                <span className="text-gray-700"> Two-factor authentication, role-based access control, OWASP best practices</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Features:</span>
                                <span className="text-gray-700"> Performance tracking, probation management, PIP modules, workflow automation</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Laravel</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Microsoft Graph API</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Security</span>
                        </div>
                    </div>

                    {/* Navari */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">ERPNext Enterprise Solutions</h3>
                        <p className="text-gray-600 mb-4">
                            Collaborated with cross-functional teams to design and customize ERPNext modules, tailoring ERP solutions for diverse client business requirements.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div>
                                <span className="font-semibold text-gray-900">Quality:</span>
                                <span className="text-gray-700"> Reduced production defects by 15% through comprehensive unit testing</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Integration:</span>
                                <span className="text-gray-700"> Led biometric attendance tracking with payroll automation</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Reporting:</span>
                                <span className="text-gray-700"> Custom dashboards for real-time inventory, sales, and financial KPIs</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">JavaScript</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">SQL</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">ERPNext</span>
                        </div>
                    </div>

                    {/* Technical Leadership */}
                    <div className="grid md:grid-cols-2 gap-8 mt-16 p-8 bg-gray-50 rounded-lg">
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Technical Leadership</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-900 mt-1">▸</span>
                                    <span>Architected RESTful APIs handling complex financial calculations with precision</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-900 mt-1">▸</span>
                                    <span>Implemented CI/CD pipelines reducing deployment time and system downtime</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-900 mt-1">▸</span>
                                    <span>Applied TDD methodology ensuring code reliability and maintainability</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Business Impact</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-900 mt-1">▸</span>
                                    <span>Delivered U.S. lending compliance for loan origination platform</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-900 mt-1">▸</span>
                                    <span>Improved organizational efficiency by 25% through API integrations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-900 mt-1">▸</span>
                                    <span>Reduced manual processing by 30% with automated reporting pipelines</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section id="projects" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-600 mb-12">
                        A selection of projects showcasing my expertise in full-stack development, system architecture, and data-driven applications.
                    </p>

                    <div className="space-y-12">
                        {/* E-Commerce */}
                        <div className="border-l-4 border-gray-900 pl-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">E-Commerce Platform</h3>
                            <p className="text-gray-700 mb-4">
                                Full-stack e-commerce application with Laravel backend REST APIs, Redis-backed session management for shopping carts, and MySQL order processing. Containerized with Docker and deployed via automated CI/CD pipeline.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Laravel</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Redis</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Docker</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">CI/CD</span>
                            </div>
                        </div>

                        {/* Farm Management */}
                        <div className="border-l-4 border-gray-900 pl-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Farm Management System</h3>
                            <p className="text-gray-700 mb-4">
                                Data-driven platform for agricultural operations tracking expenses, revenue streams, and profitability analytics. Built with comprehensive test coverage using PHPUnit, ensuring reliability for financial calculations and strategic planning dashboards.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Laravel</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">MySQL</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">PHPUnit</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Analytics</span>
                            </div>
                        </div>

                        {/* Library */}
                        <div className="border-l-4 border-gray-900 pl-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Library Management System</h3>
                            <p className="text-gray-700 mb-4">
                                Full-stack Django application managing book cataloging, member management, and lending workflows. Features intuitive UI/UX design with automated notification system and RESTful APIs for mobile integration and system interoperability.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Python</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Django</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">PostgreSQL</span>
                                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">REST APIs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Technical Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Backend Development</h3>
                            <div className="space-y-2 text-gray-700">
                                <p>PHP & Laravel</p>
                                <p>Python & Django</p>
                                <p>RESTful APIs</p>
                                <p>MySQL & PostgreSQL</p>
                                <p>Redis Caching</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Frontend & Full-Stack</h3>
                            <div className="space-y-2 text-gray-700">
                                <p>JavaScript & React</p>
                                <p>HTML5 & CSS3</p>
                                <p>Bootstrap</p>
                                <p>Responsive Design</p>
                                <p>UI/UX Implementation</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">DevOps & Tools</h3>
                            <div className="space-y-2 text-gray-700">
                                <p>Docker & Containerization</p>
                                <p>Git & GitHub</p>
                                <p>CI/CD Pipelines</p>
                                <p>Test-Driven Development</p>
                                <p>Agile Methodologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Let's Build Something Great</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl">
                        Need a software engineer who can build scalable backend systems and deliver quality solutions? From Laravel APIs to full-stack platforms, I'm here to create impact.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">How I Can Help</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-gray-900 pl-4">
                                    <h4 className="font-bold text-gray-900 mb-1">Backend Development</h4>
                                    <p className="text-gray-600">Laravel APIs, database optimization, and system architecture</p>
                                </div>
                                <div className="border-l-4 border-gray-900 pl-4">
                                    <h4 className="font-bold text-gray-900 mb-1">Full-Stack Solutions</h4>
                                    <p className="text-gray-600">End-to-end application development with modern frameworks</p>
                                </div>
                                <div className="border-l-4 border-gray-900 pl-4">
                                    <h4 className="font-bold text-gray-900 mb-1">System Integration</h4>
                                    <p className="text-gray-600">Third-party APIs, ERP customization, and workflow automation</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                            <div className="space-y-4">
                                <a href="mailto:rebeccacheptoek1@gmail.com" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-900 transition-colors">
                                    <Mail className="text-gray-900" size={24} />
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p className="text-gray-600 text-sm">rebeccacheptoek1@gmail.com</p>
                                    </div>
                                </a>
                                <a href="tel:+254759669534" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-900 transition-colors">
                                    <Phone className="text-gray-900" size={24} />
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone</p>
                                        <p className="text-gray-600 text-sm">+254 759 669 534</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                                    <MapPin className="text-gray-900" size={24} />
                                    <div>
                                        <p className="font-semibold text-gray-900">Location</p>
                                        <p className="text-gray-600 text-sm">Nairobi, Kenya</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-gray-600 mb-4">Connect on social platforms</p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        <Github size={24} />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600">© 2025 Rebecca Cheptoek. Software Engineer.</p>
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Back to top ↑
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}