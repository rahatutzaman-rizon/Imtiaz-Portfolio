
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceEducationPage = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "Z8-Tech",
      date: "2023 - Present",
      details: [
        "Lead product development and strategy for multiple projects",
        "Coordinate cross-functional teams to deliver high-quality products",
        "Analyze market trends and user feedback to drive product improvements",
        "Manage product roadmaps and prioritize features based on business goals",
        "Collaborate with stakeholders to align product vision with company objectives"
      ],
      icon: <FaBriefcase />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    },
    {
      title: "Full Stack Developer",
      company: "Authentic Four Technology",
      date: "2022 - 2023",
      details: [
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
        "Implemented RESTful APIs and integrated third-party services",
        "Optimized application performance and improved user experience",
        "Collaborated with design team to implement responsive and intuitive user interfaces",
        "Participated in code reviews and mentored junior developers"
      ],
      icon: <FaBriefcase />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    },
    {
      title: "Flutter cum Android Developer",
      company: "Authentic Four Technology",
      date: "2021 - 2022",
      details: [
        "Built cross-platform mobile applications using Flutter and Dart",
        "Developed native Android applications using Java and Kotlin",
        "Integrated RESTful APIs and implemented local data persistence",
        "Collaborated with UX/UI designers to create intuitive mobile interfaces",
        "Performed code reviews and implemented best practices for mobile development"
      ],
      icon: <FaBriefcase />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    },
    {
      title: "Junior Android Developer",
      company: "Authentic Four Technology",
      date: "2019 - 2021",
      details: [
        "Developed Android applications from concept to deployment using Java",
        "Implemented UI designs using XML layouts and Material Design principles",
        "Integrated third-party libraries and APIs to enhance app functionality",
        "Collaborated with backend developers to consume RESTful web services",
        "Participated in agile development processes and sprint planning"
      ],
      icon: <FaBriefcase />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    },
  ];

  const education = [
    {
      degree: "Bachelor in Computer Science and Engineering",
      institution: "Sonargaon University",
      date: "2021 - Present (Expected completion in 4 months)",
      details: [
        "CGPA: 3.72 (for current 145 ECTs)",
        "Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Mobile App Development",
        "Thesis: 'Improving Mobile App Performance using React Native and Flutter'",
        "Participated in multiple hackathons and coding competitions",
        "Member of the university's Computer Science Society"
      ],
      achievements: [
        "Dean's List for academic excellence (2022, 2023)",
        "Best Project Award for 'Smart City Waste Management System' (2023)",
        "1st Runner-up in National Collegiate Programming Contest (2022)"
      ],
      icon: <FaGraduationCap />,
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    },
    {
      degree: "Higher Secondary Certificate (12th Standard)",
      institution: "Barahatia Adarsha High School",
      date: "2021",
      details: [
        "GPA: 3.98 out of 5",
        "Major: Science",
        "Subjects: Physics, Chemistry, Mathematics, Biology",
        "Participated in various science exhibitions and projects"
      ],
      achievements: [
        "Best Science Project Award for 'Automated Irrigation System' (2020)",
        "2nd position in Inter-school Mathematics Olympiad (2019)"
      ],
      icon: <FaGraduationCap />,
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    },
    {
      degree: "Secondary School Certificate (10th Standard)",
      institution: "Islamia University College",
      date: "2017",
      details: [
        "GPA: 4.86 out of 5",
        "Subjects: Mathematics, Science, English, Bengali, Social Studies",
        "Active member of the school's programming club"
      ],
      achievements: [
        "School topper in Mathematics and Science",
        "Best All-Rounder Award (2017)",
        "1st prize in Inter-school Science Quiz Competition (2016)"
      ],
      icon: <FaGraduationCap />,
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          My Professional Journey
        </h1>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center text-purple-300">Work Experience</h2>
          <VerticalTimeline lineColor={'#6B46C1'}>
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(76, 29, 149, 0.1)', color: '#fff', border: '1px solid rgba(124, 58, 237, 0.5)' }}
                contentArrowStyle={{ borderRight: '7px solid rgba(124, 58, 237, 0.5)' }}
                date={exp.date}
                iconStyle={exp.iconStyle}
                icon={exp.icon}
              >
                <h3 className="text-lg font-bold text-purple-300">{exp.title}</h3>
                <h4 className="text-md text-purple-200">{exp.company}</h4>
                <ul className="text-sm text-gray-300 mt-4 space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 text-center text-pink-300">Education</h2>
          <VerticalTimeline lineColor={'#D53F8C'}>
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgba(213, 63, 140, 0.1)', color: '#fff', border: '1px solid rgba(236, 72, 153, 0.5)' }}
                contentArrowStyle={{ borderRight: '7px solid rgba(236, 72, 153, 0.5)' }}
                date={edu.date}
                iconStyle={edu.iconStyle}
                icon={edu.icon}
              >
                <h3 className="text-lg font-bold text-pink-300">{edu.degree}</h3>
                <h4 className="text-md text-pink-200">{edu.institution}</h4>
                <div className="mt-4">
                  <h5 className="text-lg font-semibold text-pink-200 mb-2">Details:</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="text-lg font-semibold text-pink-200 mb-2">Achievements:</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>
      </motion.div>
    </div>
  );
};

export default ExperienceEducationPage;
