import React from "react";

export default function Experience() {
  return (
    <>
      <section id="Experience" className="bg-red dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">Experience</h3>
                <span className="text-sm font-bold tracki uppercase">
                  IT & development
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold  tracki">
                    Freelancing{" "}
                  </h3>
                  <time className="text-xs tracki uppercase text-white">
                    Present
                  </time>
                  <p className="mt-3">
                    I'm proficient in all the latest web development languages
                    and frameworks (HTML, CSS, JavaScript, React, etc.) and
                    design tools (Adobe Photoshop, Illustrator, Sketch, etc.).
                    This means I can adapt to any project and deliver the
                    results you need.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Technical Members
                  </h3>
                  <time className="text-xs tracki uppercase text-white">
                    Aug 2021
                  </time>
                  <p className="mt-3">
                    As an Aligarh OWASP Chapter Technical Member, I streamlined
                    online meetings, facilitated scheduling for the OWASP Top 10
                    team, and actively contributed expertise to web security
                    discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-aut sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">Education</h3>
                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                  Computer Science
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12  space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Bachelor's of Computer Application
                  </h3>
                  <time className="text-xs tracki uppercase text-white">
                    2021-2024
                  </time>
                  <p className="mt-3">
                    In the college As a cyber volunteer, I helped uneducated
                    people about online safety by couducting workshops and
                    creating educational materials. This helped increase
                    awareness about online threats and improved the overall
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
