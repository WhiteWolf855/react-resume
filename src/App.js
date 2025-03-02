import React from 'react';
import './App.css';  // Import CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Resume</h1>
      </header>
      <main>
        <section className="personal-info">
          <h2>Personal Information</h2>
          <p>Name: Muhammed Ameen</p>
          <p>Email: tkameen855@gmail.com</p>
          <p>Phone: (647) 897-4583</p>
        </section>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Recent graduate of Centennial College's Computer Systems Technician program,
            bringing a strong foundation in networking, cloud computing, and security to the table. 
            Eager to leverage my skills and academic knowledge to contribute to a dynamic IT support team.
          </p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>ADDS</li>
            <li>Linux</li>
            <li>Packet Tracer</li>
            <li>Windows Server</li>
            <li>Azure</li>
            <li>OSPF</li>
            <li>Python</li>
            <li>Entra ID</li>
            <li>AWS</li>
            <li>Powershell</li>
            <li>DHCP</li>
            <li>CI/CD Pipeline</li>
          </ul>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <div>
            <h3>IT Support Technician</h3>
            <p>HiTech Bay Inc | Scarborough, ON</p>
            <p>April 2023 - Present</p>
            <ul>
              <li>Diagnosed hardware and software issues in gaming PCs, assessing the integrity of graphic cards, RAM, motherboards, and cooling systems.</li>
              <li>Performed system upgrades such as CPU and GPU installations, memory upgrades, and storage expansions.</li>
              <li>Managed inventory and documentation of parts and supplies using Linnworks.</li>
              <li>Troubleshot technical problems for customers related to hardware components, operating systems, and applications.</li>
            </ul>
          </div>
          <div>
            <h3>Network System Analyst</h3>
            <p>Centennial College | Scarborough, ON</p>
            <p>July 2023 - April 2024</p>
            <ul>
              <li>Optimized network performance by conducting monthly system audits, increasing network speed by 30% and reducing downtime by 25%.</li>
              <li>Enhanced security by implementing firewalls, intrusion detection systems, and enterprise-grade antivirus software.</li>
              <li>Supported network infrastructure by managing DHCP, DNS, firewall rules, and routing.</li>
              <li>Assisted in deploying and maintaining technology solutions like POS systems and digital signage.</li>
            </ul>
          </div>
          <div>
            <h3>IT Helpdesk Analyst</h3>
            <p>PMR INFOS PVT LTD | Kerala, India</p>
            <p>October 2021 – March 2023</p>
            <ul>
              <li>Responded to customer queries and documented incidents.</li>
              <li>Collaborated with teams to resolve IT issues and provided technical guidance for troubleshooting software and hardware problems.</li>
            </ul>
          </div>
        </section>
        <section className="project">
          <h2>Project</h2>
          <h3>MSP Electronics</h3>
          <ul>
            <li>Designed and implemented a comprehensive network infrastructure for a hypothetical company using Cisco Packet Tracer, including VLANs, routing protocols (RIP and OSPF), DHCP, DNS, and a web server.</li>
            <li>Deployed the company website using Azure Static Web Apps.</li>
          </ul>
        </section>
        <section className="education">
          <h2>Education</h2>
          <div>
            <h3>Computer Systems Technician</h3>
            <p>Centennial College | Scarborough, ON</p>
            <p>Relevant courses: Networking, Cloud Computing, Python, Computer & Network Security</p>
          </div>
          <div>
            <h3>Bachelor of Computer Applications</h3>
            <p>Amrita Vishwa Vidyapeetham | Kerala, India</p>
            <p>Relevant courses: Data Structures, Algorithms, Discrete Mathematics, Cloud Computing, Java, Python, Networking</p>
          </div>
        </section>
        <section className="certifications">
          <h2>Additional Certifications</h2>
          <ul>
            <li>Google Cloud Foundations</li>
            <li>Microsoft Azure Administrator AZ 104</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Thank you for visiting my resume webpage!</p>
      </footer>
    </div>
  );
}

export default App;
