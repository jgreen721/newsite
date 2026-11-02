import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { Intro, Main, Lightning } from "./components"
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(false);


  useGSAP(() => {
    if (!showIntro) {
      const tl = gsap.timeline();

      // tl.addLabel("Exit", 0);
      tl.addLabel("Intro", 1);
      // tl.addLabel("CleanUp");

      // tl.to(".intro-container", {}, "ExitIntro")
      tl.set(".main-animate-container", { className: "main-animate-container main-container-animate-intro" }, "Intro")
      // tl.call(() => { }, null, "CleanUp");
    }
  }, [showIntro])

  return (
    <div className="app">
      {/* <Lightning /> */}
      {showIntro ?
        <Intro showIntro={showIntro} setShowIntro={setShowIntro} />
        :
        <Main />
      }
    </div>
  )
}

export default App
