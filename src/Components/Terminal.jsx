import React from 'react'
import { ReactTerminal } from "react-terminal";

   export default function Terminal(props) {
      // Define commands here
      function  al(){
        alert("run")
      }
      function gitOpen(){
        setTimeout(() => {
          const newTab = window.open('https://github.com/nkrider7', '_blank');
          newTab.focus();
        }, 1000);
        return "Opening......"
      }
      function linkOpen(){
        setTimeout(() => {
          const newTab = window.open('https://www.linkedin.com/in/narendra-a90182223/', '_blank');
          newTab.focus();
        }, 1000);
        return "Opening......"
      }
      function twitOpen(){
        setTimeout(() => {
          const newTab = window.open('https://twitter.com/narendbugfixer', '_blank');
          newTab.focus();
        }, 1000);
        return "Opening......"
      }
      const commands = {
        whoami: "I'm a software engineer",
        cd: (directory) => `changed path to ${directory}`,
        skills : (
          <>
          <span className='text-yellow'>JavaScript, </span>
          <span className='text-sky'>C++, </span>
          <span className='text-lime'>Python, </span>
          <span className='text-lime'></span>
          <span className='text-lime'></span>
          <span className='text-lime'></span>
          <span className='text-lime'></span>
          </>
        ),
        experience : `1 Year Experience`,
        help : (<>
          <h1><span className='text-lime'>whoami :</span><span > Check my name </span></h1>
          <h1><span className='text-lime'>skills :</span><span > Check my Skills</span></h1>
          <h1><span className='text-lime'>github :</span><span > Check my Github Profile  </span></h1>
          <h1><span className='text-lime'>linkedin :</span><span > Check my Linkedin Profile </span></h1>
          <h1><span className='text-lime'>twitter :</span><span > Check my Twitter Profile </span></h1>
          <h1><span className='text-lime'>experience :</span><span > Check my Experience  </span></h1>
          <h1><span className='text-lime'>clear :</span><span > Clear screen </span></h1>
          </>),
        github : (gitOpen),
        linkedin :(linkOpen),
        twitter : (twitOpen)
        
      };
      
    
      return (
        <>
        <div className="bg-red flex  justify-center ">
       <div className="w-[600px]  p-10 sm:p-5  h-72 drop-shadow-4xl">
        <ReactTerminal
          commands={commands}
          welcomeMessage={
            <div>
              <p>
                Get started by typing `help` command 
              </p>
          
            </div>
          }
          themes={{
            "my-custom-theme": {
              themeBGColor: "#1f0100",
              themeToolbarColor: "#1f0100",
              themeColor: "#FFFEFC",
              themePromptColor: "#a917a8"
            }
          }}
          theme="my-custom-theme"
        />
        </div>
        </div>
        </>
      );
    }
