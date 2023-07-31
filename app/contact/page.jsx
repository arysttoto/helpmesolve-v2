import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Contact us for any questions, and bugs you found."
      />

      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
