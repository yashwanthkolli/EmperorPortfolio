import './App.css';
import AboutUsSection from './Components/AboutUsSection/AboutUsSection';
import ContactUsSection from './Components/ContactUsSection/ContactUsSection';
import GallerySection from './Components/GallerySection/GallerySection';
import LandingSection from './Components/LandingSection/LandingSection';
import MapSection from './Components/MapSection/MapSection';
import Menu from './Components/Menu/Menu';
import ServicesSection from './Components/ServicesSection/ServicesSection';

function App() {
  return (
    <div className="App">
      <Menu />
      <LandingSection />
      <AboutUsSection />
      <ServicesSection />
      <GallerySection />
      <MapSection /> 
      <ContactUsSection />
    </div>
  );
}

export default App;
