import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";
import ProfilePage from "./component/ProfilePage";
import Portfolio from "./component/Project";


const App = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ProfilePage></ProfilePage>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <ContactForm></ContactForm>
    </div>
  );
};

export default App;