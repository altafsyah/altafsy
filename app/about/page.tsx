import Link from "next/link";

export default function About() {
  return (
    <>
      <section>
        <h2 className="font-medium text-lg">About</h2>
        <p>
          Right now, I'm working as Frontend Engineer based in Yogyakarta
          working both web and mobile apps at Technoparter Indonesia to handle
          clients project.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="font-medium text-lg">Expertise</h2>
        <p>
          I've been working as a software developer since 2021 and since then
          I've been working on many apps. For detail of my works, please kindly
          send me an email at{" "}
          <Link href="mailto:syahrastanialtaf@gmail.com" className="underline underline-offset-4">
            here.
          </Link>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
          <div className="border border-white/30 rounded-lg p-3">
            <h3 className="font-medium">CMS</h3>
            <p className="text-sm text-gray-400">
              I've been developed CMS for many apps, starting from landing page
              to system that support business
            </p>
          </div>
          <div className="border border-white/30 rounded-lg p-2">
            <h3 className="font-medium">LMS</h3>
            <p className="text-sm text-gray-400">
              I've had working on several projects that related to LMS such as
              online assessment and also course management.
            </p>
          </div>
          <div className="border border-white/30 rounded-lg p-2 md:col-span-2">
            <h3 className="font-medium">Company Profile</h3>
            <p className="text-sm text-gray-400">
              This is the most projects I've been taken. From simple landing
              page to complex company profile.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="font-medium text-lg">Passion</h2>
        <p>
          Developing apps is not only a job for me, but it has been come into my
          passion. I love to build great products that can help people on their
          tasks. Since then, I'm diving more into product world.
        </p>
      </section>
      {/* <section className="mt-10">
        <h2 className="font-medium text-lg">Additional</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dicta amet voluptatum ea nesciunt, natus adipisci excepturi autem
          consequuntur quaerat nulla exercitationem, velit aspernatur similique?
        </p>
      </section> */}
    </>
  );
}
