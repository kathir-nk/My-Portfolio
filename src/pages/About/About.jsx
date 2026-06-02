import HeroImg from "@/assets/images/hero.jpg";


export default function About() {
  return (
    <>
     <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
  <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
    <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
      About Me
    </h2>

    <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
      <div className="relative mb-6 sm:mb-0">
        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
          <img
            src={HeroImg}
            className="rounded-[15px] shadow block"
            alt="Kathirvel"
            width={1207}
            height={929}
          />
        </div>
      </div>

      <div className="relative space-y-12 sm:space-y-16 text lg:text-lg">
        <p className="text-white leading-relaxed">
          Hello! I'm <span className="font-bold">Kathirvel</span>, a passionate
          Frontend Developer from Bangalore with 2 years of experience building
          modern, responsive, and user-friendly web applications using React,
          JavaScript, Tailwind CSS, and Vite.
        </p>

        <p className="text-white leading-relaxed">
          I love creating clean UI designs, smooth user experiences, and
          scalable web solutions. Along with frontend development, I'm also
          exploring backend technologies to grow as a Full Stack Developer.
        </p>

        <div className="pt-6">
          <blockquote className="border-l-4 border-gray-300 pl-4">
            <p className="text-white leading-relaxed">
              I enjoy turning creative ideas into real-world digital experiences.
              My goal is to build fast, modern, and impactful applications while
              continuously learning new technologies and improving my skills as
              a developer.
            </p>

            <div className="mt-6 space-y-3">
              <cite className="block font-medium text-white not-italic">
                Kathirvel
              </cite>

              <div className="flex items-center gap-2">
                
                <span className="text-white">
                        💻Frontend Developer & React Enthusiast
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}