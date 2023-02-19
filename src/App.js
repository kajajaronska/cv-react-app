import "./App.css";
import "./styles/Container.css";
import Container from "./components/Container";
import { TitleAndDateRow } from "./components/Container";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Header from "./components/Header";
import { FaGlobe } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/*HEADER SECTION*/}
      <Container id="header-section">
        <Header />
      </Container>

      {/*PROFILE SUMMARY*/}
      <Container header="Profile Summary" id="profile-section">
        <p>
          I am a driven professional with an extensive background working in
          finance teams at a range of data and media agencies, from start-ups to
          established industry leaders. Currently pursuing a career switch into
          tech, my ambition is to combine my analytical and problem-solving
          nature with a growing passion for coding honed through structured
          tuition and extensive self-learning. I learn new concepts quickly, I
          always stay focused and I am highly motivated to succeed in the world
          of programming.
        </p>
      </Container>

      {/*SKILLS SUMMARY*/}
      <Container id="skills-section">
        <Skills
          skillType="Professional"
          skillsArr={[
            { id: 1, name: "Communication" },
            { id: 2, name: "Time Management" },
            { id: 3, name: "Teamwork" },
            { id: 4, name: "Attention to Detail" },
            { id: 5, name: "Problem-Solving" },
          ]}
        />
        <Skills
          skillType="Technical"
          skillsArr={[
            { id: 1, name: "HTML" },
            { id: 2, name: "CSS" },
            { id: 3, name: "JavaScript" },
            { id: 4, name: "React" },
            { id: 5, name: "Git" },
            { id: 6, name: "GitHub" },
          ]}
        />
        <div className="portfolio">
          
          <a href="https://kajajaronska.github.io/portfolio/" target="_blank" rel="noreferrer">
            <FaGlobe className="contact-icon" />
          </a>
          <h2>Portfolio Website</h2>
        </div>
      </Container>

      {/*PROJECTS SECTION*/}
      <Container header="Projects" id="projects-section">
        <Project
          title="Library"
          stackList={["HTML", "CSS", "JavaScript"].join(" | ")}
        >
          <ul>
            <li>
              Built an app enabling users to build a library of books and record
              reading status using a toggle switch.
            </li>
            <li>
              Used DOM Manipulation to dynamically update user display after
              removing and adding entries.
            </li>
          </ul>
        </Project>
        <Project
          title="Calculator"
          stackList={["HTML", "CSS", "JavaScript"].join(" | ")}
        >
          <ul>
            <li>
              Built an app enabling users to perform calculations while
              displaying numerical processes and results.
            </li>
            <li>
              Created different colour themes using event listeners, targeting
              the class on the root element of the document.
            </li>
          </ul>
        </Project>
      </Container>

      {/*EDUCATION AND QUALIFICATIONS SECTION*/}
      <Container header="Education & Qualifications" id="education-section">
        <TitleAndDateRow
          title="HyperionDev | Web Development Bootcamp"
          date="NOV 22 - FEB 23"
        />
        <TitleAndDateRow
          title="freeCodeCamp | Responsive Web Design"
          date="OCT 2021"
        />
        <TitleAndDateRow
          title="Code First Girls | Introduction to Web Development"
          date="JAN 2019 - APR 2019"
        />
        <TitleAndDateRow
          title="BSc Banking and Finance (First Class Honours) | Middlesex University"
          date="SEP 2011 - JUL 2014"
        />
      </Container>

      {/*WORK EXPERIENCE SECTION*/}
      <Container header="Recent Work Experience" id="work-experience-section">
        <TitleAndDateRow
          title="Fifty-Five / Finance Lead"
          date="JUN 2021 - present"
        />
        <ul>
          <li>
            Launched and supervised a resource management tool to drive maximum
            profitability, delivering platform demos and monitoring usage to
            drive 100% uptake across the team.
          </li>
          <li>
            Managed monthly billing across several revenue streams (including
            GMP and GA licences), collaborating with the internal management
            team, French HQ and external accountants.
          </li>
        </ul>

        <TitleAndDateRow
          title="Wavemaker / Intercompany & Media Payables Accountant"
          date="NOV 2018 - JUN 2021"
        />

        <ul>
          <li>
            Reduced all historical debt by solving outstanding invoice queries
            in collaboration with internal stakeholders and finance teams at
            blue-chip clients including Amazon, Google, and Facebook.
          </li>
          <li>
            Created and implemented a bespoke digital payment run process to
            upgrade our existing method, maximise team efficiency, and ensure
            payment accuracy.
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default App;
