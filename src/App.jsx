import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";
import Count from "./component/Count";
import ProfilePage from "./component/ProfilePage";
import Projects from "./component/Projects";


const App = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ProfilePage></ProfilePage>
      <Projects></Projects>
       <Count></Count>
      <Contact></Contact>
      <ContactForm></ContactForm>
    </div>
  );
};

export default App;