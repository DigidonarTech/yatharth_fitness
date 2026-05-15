import MainLayout from "../layouts/MainLayout";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import ContactFAQ from "../components/contact/ContactFAQ";

const ContactPage = () => {
  return (
    <MainLayout>

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactMap />

      <ContactFAQ />

    </MainLayout>
  );
};

export default ContactPage;