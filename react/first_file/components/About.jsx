export function About() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-40">
        <div className="bg-black rounded-md inline-block px-2 mx-auto">
          <p className="text-white">About Me</p>
        </div>
      </div>
      <div className="md:flex justify-center justify-between mt-16 gap-8">
        <img
          style={{ boxShadow: "1px 22px 8px 18px rgba(0,0,0,0.43)" }}
          className=" md:w-2/5 h-80 w-4/6 mx-auto "
          src="martin.webp"
        ></img>
        <div className="mt-20  md:mt-0  flex flex-col gap-3">
          <p className="text-2xl">Curious about me? Here you have it:</p>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
