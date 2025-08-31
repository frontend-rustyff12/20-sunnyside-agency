import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Testimonial from "./components/Testimonial";
import PhotoBox from "./components/PhotoBox";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <MainContent />
        <Testimonial />
        <PhotoBox />
        <Footer />
      </div>
    </>
  );
}

export default App;
