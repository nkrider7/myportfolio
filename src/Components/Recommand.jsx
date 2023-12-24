import React from 'react'

export default function Recommand() {
  return (
   <>
   <div class="bg-red py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

    <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">

      <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <div class="text-center text-gray-600">“A Top-notch developer crafting exceptional solutions, adding value with every line of code.”</div>

        <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
            <a href="https://www.linkedin.com/in/supersahil/" target='_blank'><img src="https://media.licdn.com/dms/image/D4D03AQH715CBE2uoGg/profile-displayphoto-shrink_100_100/0/1685793217820?e=1708560000&v=beta&t=xXICwraONIO9fyeyYzjX5sjUFufqsmRGpdkB_WuVhyM" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
          </a>
            </div>

          <div>
            <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Sahil Verma</div>
            <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">SDE / Microsoft</p>
          </div>
        </div>
      </div>
   
      <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <div class="text-center text-gray-600">“Highly skilled in cybersecurity with a deep understanding of advanced concepts and emerging trends. ”</div>

        <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
           <a href="https://www.linkedin.com/in/nitish-agrawal-3a4291178/" target='_blank'> <img src="https://media.licdn.com/dms/image/D4D03AQHGAnkRkDRoHQ/profile-displayphoto-shrink_100_100/0/1673422988523?e=1708560000&v=beta&t=M9L2UDZJLxemE9JNb6a1lvObfkaEQ3eiiww44mm7sTY" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
        </a>
             </div>

          <div>
            <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Nitish Agrawal</div>
            <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Security / Vmart</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <div class="text-center text-gray-600">“Narendra is a great guy to work with, he understands how to engage with people and motivate them to achieve their work goals”</div>

        <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
           <a href="https://www.linkedin.com/in/kapil-sharma-b392a9215/" target='_blank'> <img src="https://media.licdn.com/dms/image/D4D03AQEV6fs-R97o4Q/profile-displayphoto-shrink_200_200/0/1693200481319?e=1708560000&v=beta&t=RMyLYO5gL89sv5IFiKCEj7fkHIKrSzPNu2aXCgQb27A" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
          </a>
           </div>

          <div>
            <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Kapil Sharma</div>
            <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">
Facilitator / FEA</p>
          </div>
        </div>
      </div>
   
    </div>
  </div>
</div>
   </>
  )
}
