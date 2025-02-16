const aboutItems = [
  {
    label: "Project done",
    number: 15,
  },
  {
    label: "Years of experience",
    number: 3,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className=" bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! I&apos;m Geeta, I am a dedicated and ambitious Master’s in
            Computer Science student at the Illinois Institute of Technology,
            Chicago, with a strong passion for software development and
            artificial intelligence. My expertise spans Python, Java, C++,
            JavaScript, and web development frameworks like React, Node.js, and
            AngularJS. Additionally, I have experience in databases including
            MySQL, PostgreSQL, and MongoDB, as well as AI and data science tools
            such as TensorFlow, OpenCV, and Scikit-learn. I thrive on solving
            complex technical challenges and developing innovative solutions. I
            am actively seeking opportunities to collaborate on cutting-edge
            projects, enhance my technical skills, and contribute to the tech
            industry.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flrx items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-red-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            {/* <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
