const Contact = () => {
  const email = "diptomansingh.personal@gmail.com";
  const subject = "Inquiry from Portfolio";
  const body = "Hello, I would like to get in touch regarding..."; // Replace with your email

  return (
    <div className="text-center my-20 relative z-50 my-12 lg:my-24" id="contact">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

<div className="flex justify-center -translate-y-[1px]">
  <div className="w-3/4">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
  </div>
</div>
      <div className="my-5 lg:py-8">
      <h1 className="text-4xl font-bold mb-10 text-primary">Lets Connect!</h1>
      <p className="text-lg mb-2">Need to get in touch?</p>
      <p className="text-lg mb-6">
        <span className="wave">👋</span> Say hello or drop a quick
        message—whether its for a project, job opportunity, or just to chat! 🚀
      </p>

      <a
        href={`mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`}
      >
        {" "}
        <button className="btn btn-primary">📧 Email Me!</button>
      </a>
      <a
        href="https://www.linkedin.com/in/diptomansingh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-primary ml-2">Linkedin</button>
      </a>
      </div>
    </div>
  );
};

export default Contact;
