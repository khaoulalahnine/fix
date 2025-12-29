import AboutHero from "../components/AboutUsPage/AboutHero";
import MissionValues from "../components/AboutUsPage/MissionValues";
import OurStory from "../components/AboutUsPage/OurStory";
import VisionCTA from "../components/AboutUsPage/VisionCTA";
import WhyMoussafir from "../components/AboutUsPage/WhyMoussafir";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsletterSection from "../components/NewsletterSection";


function App() {
  return (
    <>
      <AboutHero/>
      <OurStory/>
      <MissionValues/>
      <WhyMoussafir/>
      <VisionCTA/>
    <NewsletterSection/>
      <Footer/>
    </>
  );
}

export default App;
