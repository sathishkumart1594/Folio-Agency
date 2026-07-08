import contact from "../assets/images1/CONTACT.png";

const Contact = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <img
          src={contact}
          alt="Contact section"
          className="block h-auto w-full object-contain"
        />

      </div>
    </section>
  );
};

export default Contact;
