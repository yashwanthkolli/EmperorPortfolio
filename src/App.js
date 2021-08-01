import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import AboutUsSection from './Components/AboutUsSection/AboutUsSection';
import ContactUsSection from './Components/ContactUsSection/ContactUsSection';
import GallerySection from './Components/GallerySection/GallerySection';
import LandingSection from './Components/LandingSection/LandingSection';
import MapSection from './Components/MapSection/MapSection';
import Menu from './Components/Menu/Menu';
import ServicePage from './Components/ServicePage/ServicePage';
import ServicesSection from './Components/ServicesSection/ServicesSection';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/service/:serviceName' exact component={ServicePage} />
      </Switch>
    </div>
  );
}

const HomePage = () => {
  return(
    <>
      <Menu />
      <LandingSection />
      <AboutUsSection />
      <ServicesSection />
      <GallerySection />
      <MapSection /> 
      <ContactUsSection />
    </>  
  )
}

export default withRouter(App);
