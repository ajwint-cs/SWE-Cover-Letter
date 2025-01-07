import {
  Github,
  Mail,
  Linkedin,
  Terminal,
  Award,
  Code,
  Shield,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import React from "react";
import profileImage from "./assets/1690407207382.jpeg";
import endoBanner from "./assets/Endo (Youtube Banner).gif";

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-indigo-900/30 animate-gradient-xy"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative">
        {/* Rest of the component remains exactly the same */}
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
                Software Engineer
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
              With proficiency in React.js, Vue.js, and Blockchain technologies,
              I have demonstrated my ability to develop cutting-edge solutions.
              My role as Project Lead Developer at Endo showcases my capability
              to architect comprehensive technical infrastructures and implement
              innovative digital platforms.
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
                  , I've spearheaded the development of a revolutionary
                  dual-purpose venue and social media platform, showcasing my
                  ability to:
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
