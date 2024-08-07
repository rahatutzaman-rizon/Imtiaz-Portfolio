import About from "./component/About";
import ExtraActivitiesPage from "./component/Activity";
import ActivitiesPage from "./component/Activity";
import AwardsAndAchievements from "./component/Awards";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";
import Count from "./component/Count";
import ExperienceEducationPage from "./component/Experience";

import Projects from "./component/Projects";
import SkillsPage from "./component/Skill";
import TestimonialsPage from "./component/Testimonial";


const App = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ExperienceEducationPage></ExperienceEducationPage>
      <SkillsPage></SkillsPage>
      <Projects></Projects>
       <Count></Count>
    <TestimonialsPage></TestimonialsPage>
      <AwardsAndAchievements></AwardsAndAchievements>
      <ExtraActivitiesPage></ExtraActivitiesPage>
      <ContactForm></ContactForm>
    </div>
  );
};

export default App;