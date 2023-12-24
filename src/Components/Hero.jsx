import React from 'react'


export default function Hero() {
  return (
   <>
   <div class="bg-red pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
   <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-red py-16 shadow-lg md:py-20 xl:py-48">
      
      <img src="https://wallpapercave.com/wp/wp8041844.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover blur-sm object-center" />
     
      <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
     

     
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p class="mb-4 text-center text-lg text-indigo-200 font-extrabold sm:text-xl md:mb-8">Are You Looking Freelancer</p>
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">I'm Available for Freelancing</h1>

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="https://www.linkedin.com/in/narendra-a90182223/" target='_blank' class="inline-block rounded-lg bg-indigo-500 px-8 py-3 border hover:bg-white hover:text-dark  text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">HIRE ME</a>

          <a href="https://drive.google.com/drive/folders/1gjAHH8NIXzWX4_7OfTr8tPM-HmUyg5Ul?usp=drive_link" target='_blank' class="inline-block rounded-lg bg-gray-200 px-8 py-3 border hover:bg-dark hover:text-white text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Download CV</a>
        </div>
      </div>
    
    </section>
    </div>
    </div>
   </>
  )
}
