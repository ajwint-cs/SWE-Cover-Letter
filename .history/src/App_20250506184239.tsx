import {
  Github,
  Mail,
  Linkedin,
  Award,
  Code,
  Shield,
  Briefcase,
  GraduationCap,
  Monitor,
} from "lucide-react";
import profileImage from "./assets/1690407207382.jpeg";
import endoBanner from "./assets/Endo (Youtube Banner).gif";

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-indigo-900/30 animate-gradient-xy"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative">
        {/* Profile Section */}
        <div className="backdrop-blur-xl bg-gray-900/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-gray-800 hover:bg-gray-800/80 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-2">
                AJ Wint
              </h1>
              <h2 className="text-2xl text-purple-300 mb-4">
                Software Engineer | IT/Cybersecurity | Founder of Endo
              </h2>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="mailto:Ajwint.cs@gmail.com"
                  className="hover:text-purple-400 transition-colors transform hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/MDZAJ-exe"
                  className="hover:text-purple-400 transition-colors transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/aj-in-cs"
                  className="hover:text-purple-400 transition-colors transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="backdrop-blur-xl bg-gray-900/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-gray-800 hover:bg-gray-800/80 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-purple-300">
                  Bachelor of Science: Software Engineering
                </h3>
                <p className="text-gray-300">Western Governors University</p>
              </div>
              <a
                href="https://www.linkedin.com/in/aj-in-cs/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline mt-2 md:mt-0"
              >
                View Credentials
              </a>
            </div>
          </div>
        </div>

        {/* Technical Expertise Section */}
        <div className="backdrop-blur-xl bg-gray-900/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-gray-800 hover:bg-gray-800/80 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
          </div>
          <div className="space-y-4">
            <p>
              {" "}
              As a cybersecurity-focused IT professional with Google
              Cybersecurity/IT Support and CompTIA Security+ certifications, I
              combine analytical skills from AI testing at DataAnnotation with
              practical security experience through LetsDefend SOC Analyst
              training. My dual roles as an AI tester and Project Lead Developer
              at my startup, Endo, demonstrate my ability to identify
              vulnerabilities and architect secure technical solutions. With
              Security+ and AWS Cloud Practitioner certification, as well as
              hands-on SIEM implementation experience, I bring a solid
              foundation in cloud security and threat detection.{" "}
            </p>{" "}
            <p>
              {" "}
              My practical cybersecurity experience includes building and
              securing enterprise-level infrastructure through home lab
              implementations, where I've deployed SIEM systems, configured
              security monitoring, and managed secure network architectures. I'm
              passionate about protecting vulnerable systems and individuals
              from digital threats, which drives my continuous learning in
              security operations, incident response, and threat analysis. My
              background in Civil Air Patrol, where I achieved the rank of cadet
              captain, reinforces my commitment to security protocols and
              disciplined approach to cybersecurity challenges.{" "}
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="backdrop-blur-xl bg-gray-900/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-gray-800 hover:bg-gray-800/80 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800/80 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/80 hover:shadow-lg cursor-pointer">
              <h3 className="font-semibold text-purple-300">
                Google Certifications
              </h3>
              <ul className="mt-2 space-y-1">
                <li>• Google IT Support</li>
                <li>• Google Cybersecurity Certificate</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800/80 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/80 hover:shadow-lg cursor-pointer">
              <h3 className="font-semibold text-purple-300">CompTIA</h3>
              <ul className="mt-2 space-y-1">
                <li>• CompTIA Project+</li>
                <li>• CompTIA Security+</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800/80 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/80 hover:shadow-lg cursor-pointer">
              <h3 className="font-semibold text-purple-300">
                WGU Certificates
              </h3>
              <ul className="mt-2 space-y-1">
                <li>• Back-End Developer</li>
                <li>• Front-End Developer</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800/80 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/80 hover:shadow-lg cursor-pointer">
              <h3 className="font-semibold text-purple-300">
                Additional Certifications
              </h3>
              <ul className="mt-2 space-y-1">
                <li>• AWS Certified Cloud Practitioner</li>
                <li>• IS-241C: Decision-Making and Problem-Solving</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cybersecurity Focus */}
        <div className="backdrop-blur-xl bg-gray-900/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-gray-800 hover:bg-gray-800/80 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Cybersecurity Focus
            </h2>
          </div>
          <div className="space-y-4">
            <p>
              My commitment to cybersecurity is evidenced by my extensive
              certification portfolio and hands-on experience with TryHackMe
              labs, demonstrating my practical approach to protecting sensitive
              information.
            </p>
          </div>
        </div>

        {/* Leadership & Innovation */}
        <div className="backdrop-blur-xl bg-gray-900/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-gray-800 hover:bg-gray-800/80 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Leadership & Innovation
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <p>
                  As the founder of{" "}
                  <a
                    href="https://endoexe.netlify.app/"
                    className="text-purple-400 hover:text-purple-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Endo
                  </a>
                  , I am spearheading the development of a dual-purpose venue
                  and social media platform, showcasing my ability to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Architect comprehensive technical solutions</li>
                  <li>Implement data-driven business strategies</li>
                  <li>Lead cross-functional teams</li>
                  <li>Design scalable infrastructure systems</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={endoBanner}
                  alt="Endo Logo Animation"
                  className="w-full rounded-lg shadow-lg border border-purple-500/20"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Projects Section - Add this after Leadership & Innovation */}
        <div className="backdrop-blur-xl bg-gray-900/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-gray-800 hover:bg-gray-800/80 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
          {/* LetsDefend SOC Analyst Training */}
          <div className="mb-8 p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-purple-300">
                LetsDefend SOC Analyst Training
              </h3>
              <span className="text-gray-400">Feb 2025 - Present</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  Hands-on Security Incident Response: Completed comprehensive
                  SOC Analyst training with real-world security scenarios and
                  incident response simulations. Practiced incident response
                  procedures including containment, eradication, and recovery
                  while creating detailed security incident reports documenting
                  findings, analysis, and remediation steps.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  Threat Detection and Analysis: Analyzed network traffic,
                  system logs, and security alerts to identify and classify
                  potential threats including phishing attempts, SQL injection
                  attacks, and malware infections. Developed proficiency in
                  establishing attack timelines and understanding attacker
                  methodologies.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  SIEM Tool Implementation: Utilized Security Information and
                  Event Management (SIEM) tools to correlate security events
                  across multiple systems and network segments. Enhanced skills
                  in log analysis, alert triage, and security event correlation
                  to identify sophisticated attack patterns and potential
                  security breaches.
                </span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                Security Information and Event Management (SIEM)
              </span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                Incident Response
              </span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                Threat Detection
              </span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                Security and Log Analysis
              </span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                Network Security Monitoring
              </span>
            </div>
          </div>

          {/* SIEM Project */}
          <div className="mb-8 p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-purple-300">
                SIEM Mini-Home Lab
              </h3>
              <span className="text-gray-400">Oct 2024 - Present</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  Elastic Stack SIEM Configuration and Management: Successfully
                  set up and configured Elastic Stack SIEM in a home lab
                  environment. Demonstrated proficiency in deploying a Kali
                  Linux VM, configuring Elastic Agents for log collection, and
                  forwarding data to the SIEM for effective security event
                  monitoring.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  Security Event Simulation and Analysis: Acquired hands-on
                  experience in generating and analyzing security events using
                  Nmap on Kali Linux. Proficient in querying Elastic SIEM to
                  identify and investigate security incidents, enhancing skills
                  in network security monitoring and threat detection.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  Visualization and Alerting in SIEM: Developed a custom
                  dashboard in Elastic SIEM to visualize security events,
                  demonstrating skills in data interpretation and pattern
                  recognition. Successfully created and tested alert rules for
                  detecting specific security events, showing competency in
                  proactive incident response and alert management.
                </span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                Security Information and Event Management (SIEM)
              </span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                Elastic Stack (ELK)
              </span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                Automated Alerts
              </span>
            </div>
          </div>

          {/* Capstone Project */}
          <div className="p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-purple-300">
                  Software Engineering Capstone Project
                </h3>
                <p className="text-gray-400">Western Governors University</p>
              </div>
              <span className="text-gray-400">Aug 2024 - Oct 2024</span>
            </div>
            <p className="mb-4 text-gray-300">
              This project involved developing a robust Inventory Management
              System using Spring Boot, designed to manage products and parts
              through a dynamic and user-friendly web interface.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-purple-300 mb-2">
                Key Contributions:
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  <span>
                    Developed an Inventory Management System using Spring Boot,
                    managing products and parts in a user-friendly web
                    interface.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  <span>
                    Utilized Spring Data JPA and Thymeleaf for efficient data
                    handling and dynamic UI generation.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  <span>
                    Implemented validation and error handling for product and
                    part management, ensuring data integrity.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  <span>
                    Leveraged Heroku and Docker to containerize and deploy the
                    application to the cloud.
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="https://github.com/mdzaj-exe/cybersecurity-portfolio/tree/main/Web%20Development%20Projects/Spring-PC%20Shop%20Web%20App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        {/* Closing Section */}
        <div className="backdrop-blur-xl bg-gray-900/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-gray-800 hover:bg-gray-800/80 transition-all duration-300">
          <div className="space-y-4">
            <p>
              I am confident that my technical expertise, security focus, and
              entrepreneurial mindset would make me a valuable addition to your
              team. I look forward to discussing how my skills align with your
              organization's needs.
            </p>
            <p className="mt-6">
              Best regards,
              <br />
              AJ Wint
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
