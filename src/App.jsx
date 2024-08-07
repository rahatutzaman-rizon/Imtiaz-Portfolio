import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";
import Count from "./component/Count";
import ExperienceEducationPage from "./component/Experience";

import Projects from "./component/Projects";
import SkillsPage from "./component/Skill";


const App = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ExperienceEducationPage></ExperienceEducationPage>
      <SkillsPage></SkillsPage>
      <Projects></Projects>
       <Count></Count>
      <Contact></Contact>
      <ContactForm></ContactForm>
    </div>
  );
};

export default App;