import contactDetails from "../assets/images/CONTACT.png";

const Contact = () => {
  return (
    <section className="bg-white text-[#232340] transition-colors duration-300 dark:bg-[#18182F] dark:text-white bottom-240 relative">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <img
          src={contactDetails}
          alt="contact"
          className="block w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Contact;
