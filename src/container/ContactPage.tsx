import ContactForm from "src/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <div className="mb-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2925132859236!2d105.78486297438583!3d20.980908489422067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1724311113266!5m2!1svi!2s"
          width="100%"
          height="350"
          style={{ borderWidth: "none" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
