import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe, FaPython, FaJsSquare, FaPhp, FaJava, FaAndroid, FaLaravel, FaReact, FaVuejs, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiSolidity, SiFlutter, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si';
import { MdWork, MdSchool } from 'react-icons/md';
import Lottie from 'react-lottie';
import contactAnimation from './contact.json'; // You'll need to add this animation file

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const profileData = {
    personalInfo: {
      name: "Sayem Hossen",
      title: "Product Manager | Full Stack Developer",
      email: "sayemhossen874@gmail.com",
      phone: "+8801886441152",
      location: { city: "Dhaka", country: "Bangladesh" },
      summary: "Experienced Product Manager and Full Stack Developer with a strong background in mobile and web development. Skilled in multiple programming languages and frameworks, with a track record of successful project delivery and team leadership.",
      links: {
        linkedin: "https://www.linkedin.com/in/sayemhossen",
        github: "https://github.com/sayemhossen",
        website: "https://sayemhossen-portfolio.example.com"
      }
    },
    workExperience: [
      // ... (same as before)
    ],
    education: [
      // ... (same as before)
    ],
    skills: {
      languages: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "C/C++", "Solidity"],
      frameworks: {
        frontend: ["ReactJs", "VueJs"],
        backend: ["Laravel", "NodeJs"],
        mobile: ["Native Android", "Flutter"],
        database: ["MongoDB", "PostgreSQL", "MySQL"]
      }
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const fadeIn = useSpring({
    opacity: isLoading ? 0 : 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  const slideUp = useSpring({
    transform: isLoading ? 'translateY(50px)' : 'translateY(0)',
    opacity: isLoading ? 0 : 1,
    from: { transform: 'translateY(50px)', opacity: 0 },
    config: config.gentle
  });

  const contactItems = [
    { icon: <FaEnvelope className="mr-3 text-indigo-400 text-xl" />, text: profileData.personalInfo.email },
    { icon: <FaPhoneAlt className="mr-3 text-indigo-400 text-xl" />, text: profileData.personalInfo.phone },
    { icon: <FaMapMarkerAlt className="mr-3 text-indigo-400 text-xl" />, text: `${profileData.personalInfo.location.city}, ${profileData.personalInfo.location.country}` },
    {
      icon: <FaGlobe className="mr-3 text-indigo-400 text-xl" />,
      text: (
        <a href={profileData.personalInfo.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
          My Website
        </a>
      )
    }
  ];

  const skillIcons = {
    Python: <FaPython />,
    JavaScript: <FaJsSquare />,
    TypeScript: <SiTypescript />,
    PHP: <FaPhp />,
    Java: <FaJava />,
    "C/C++": <SiCplusplus />,
    Solidity: <SiSolidity />,
    "Native Android": <FaAndroid />,
    Flutter: <SiFlutter />,
    Laravel: <FaLaravel />,
    ReactJs: <FaReact />,
    VueJs: <FaVuejs />,
    NodeJs: <FaNodeJs />,
    MongoDB: <SiMongodb />,
    PostgreSQL: <SiPostgresql />,
    MySQL: <SiMysql />
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black">
        <animated.div style={fadeIn} className="text-3xl font-bold text-indigo-400">
          Loading...
        </animated.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <animated.section style={fadeIn} className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl shadow-2xl p-8 mb-12 hover:shadow-indigo-500/50 transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">About Me</h2>
          <p className="text-indigo-100 leading-relaxed text-lg">{profileData.personalInfo.summary}</p>
        </animated.section>

        <animated.section style={fadeIn} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">Contact Information</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-indigo-100 mb-8 md:mb-0">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center bg-blue-700 rounded-lg p-4 shadow-md hover:bg-blue-600 transition-colors">
                  {item.icon}
                  <span className="text-lg">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/2 h-64">
              <Lottie options={lottieOptions} height="100%" width="100%" />
            </div>
          </div>
        </animated.section>

        <animated.section style={fadeIn} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">Work Experience</h2>
          <VerticalTimeline lineColor={'#818cf8'}>
            {profileData.workExperience.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(30, 58, 138)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(30, 58, 138)' }}
                date={`${experience.startDate} - ${experience.current ? 'Present' : experience.endDate}`}
                iconStyle={{ background: 'rgb(30, 58, 138)', color: '#fff' }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">{experience.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-lg">{experience.company} - {experience.location}</h4>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </animated.section>

        <animated.section style={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">Education</h2>
          <VerticalTimeline lineColor={'#818cf8'}>
            {profileData.education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(30, 58, 138)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(30, 58, 138)' }}
                date={edu.period}
                iconStyle={{ background: 'rgb(30, 58, 138)', color: '#fff' }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">{edu.degree}</h3>
                <h4 className="vertical-timeline-element-subtitle text-lg">{edu.institution}</h4>
                <p className="mt-2">{edu.gpa || edu.result}</p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </animated.section>

        <animated.section style={fadeIn}>
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-200">Languages</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {profileData.skills.languages.map((lang, index) => (
                  <div key={index} className="flex flex-col items-center bg-blue-700 rounded-lg p-4 shadow-md hover:bg-blue-600 transition-colors transform hover:scale-105">
                    <span className="text-3xl mb-2 text-indigo-300">{skillIcons[lang]}</span>
                    <span className="text-center">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-200">Frameworks & Technologies</h3>
              {Object.entries(profileData.skills.frameworks).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-indigo-300 capitalize">{category}</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {items.map((item, index) => (
                      <div key={index} className="flex flex-col items-center bg-blue-700 rounded-lg p-4 shadow-md hover:bg-blue-600 transition-colors transform hover:scale-105">
                        <span className="text-3xl mb-2 text-indigo-300">{skillIcons[item]}</span>
                        <span className="text-center">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </animated.section>
      </main>
    </div>
  );
};

export default ProfilePage;