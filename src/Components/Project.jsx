import React from "react";
import rapid from "../assets/rapidp.png";
import cyber from "../assets/cybergen.png";
import linker from "../assets/meter.jpg";
import other from "../assets/other.png";

export default function Project() {
  return (
    <>
      <div id="Project" class="bg-red py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-white text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Projects
            </h2>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">

{/* First box  */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6 transition ease-in-out delay-150 bg-red hover:-translate-y-1 hover:scale-110 duration-300 ">
              <a
                href="https://www.linkedin.com/company/rapidcuts"
                target="_blank"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src={rapid}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">Jun 19, 2023</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="https://www.linkedin.com/company/rapidcuts"
                    target="_blank"
                    class="transition duration-100 text-white  active:text-indigo-600"
                  >
                    RapidCuts
                  </a>
                </h2>

                <p class="text-gray-500">
                  Developed an Online learning platform for sharing resources
                  Roadmaps, information and tip and tricks related to
                  technology.
                </p>

                <div>
                  <a
                    href="https://www.linkedin.com/company/rapidcuts"
                    target="_blank"
                    class="font-bold transition duration-100 hover:text-white hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
{/* Second box */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6 transition ease-in-out delay-150 bg-red hover:-translate-y-1 hover:scale-110 duration-300 ">
              <a
                href="https://cybergenerator.netlify.app/"
                target="_blank"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src={cyber}
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200  group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 07, 2021</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="https://cybergenerator.netlify.app/"
                    target="_blank"
                    class="transition duration-100 hover:text-indigo-500 text-white active:text-indigo-600"
                  >
                   CyberGen
                  </a>
                </h2>

                <p class="text-gray-500">
                This project aims to develop a tool that generates custom wordlists for ethical Hacker and penetration testing.
                </p>

                <div>
                  <a
                    href="https://cybergenerator.netlify.app/"
                    target="_blank"
                    class="font-semibold text-indigo-500 hover:text-white transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
{/* Third box */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6 transition ease-in-out delay-150 bg-red hover:-translate-y-1 hover:scale-110 duration-300 ">
              <a
                href="https://drive.google.com/drive/folders/1CNIvy9pUBZ0g9Hp7zqF5LhWGLHoLdmm0?usp=drive_link"
                target="_blank"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src={linker}
                  loading="lazy"
                  alt="Photo by Magicle"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">March 15, 2021</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="https://drive.google.com/drive/folders/1CNIvy9pUBZ0g9Hp7zqF5LhWGLHoLdmm0?usp=drive_link"
                    target="_blank"
                    class="transition duration-100 hover:text-indigo-500 text-white active:text-indigo-600"
                  >
                    Meter Location
                  </a>
                </h2>

                <p class="text-gray-500">
                  I Developed a application that can track the location of electric meter easily.
                </p>

                <div>
                  <a
                    href="https://drive.google.com/drive/folders/1CNIvy9pUBZ0g9Hp7zqF5LhWGLHoLdmm0?usp=drive_link"
                    target="_blank"
                    class="font-semibold text-indigo-500 hover:text-white transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
{/* fourth box */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6 transition ease-in-out delay-150 bg-red hover:-translate-y-1 hover:scale-110 duration-300 ">
              <a
                href="https://nkrider7.github.io/myproj/"
                target="_blank"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src={other}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">January 27, 2021</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="https://nkrider7.github.io/myproj/"
                    target="_blank"
                    class="transition duration-100 hover:text-indigo-500 text-white active:text-indigo-600"
                  >
                    Other Projects
                  </a>
                </h2>

                <p class="text-gray-500">
                  I have developed many other projects like a
                  javascript Games and random color Genrator and many more.
                </p>

                <div>
                  <a
                    href="https://nkrider7.github.io/myproj/"
                    target="_blank"
                    class="font-semibold text-indigo-500 transition hover:text-white duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
