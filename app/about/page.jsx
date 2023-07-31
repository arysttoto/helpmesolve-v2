import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Want to know more about our website? Thanks! We are waiting for your feedback."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Footer /> 
    </> 
  );
};

export default AboutPage;
