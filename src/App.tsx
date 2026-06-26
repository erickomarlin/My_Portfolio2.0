import "./App.css";
import { useState } from "react";
import Overlay from "../components/Overlay";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Connect from "../components/Connect";
import Music from "../components/Music";

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <div className="min-h-screen bg-earth-ink font-body text-earth-ash flex flex-col justify-between place-items-center relative overflow-x-hidden selection:bg-earth-clay selection:text-earth-ash">
      <Overlay onAnimationComplete={() => setIsAppReady(true)} />
      <main className=" z-1 flex flex-col justify-center mb-0">
        <Hero />
        {isAppReady && (
          <>
            <Navbar /> <Music />
          </>
        )}
        <Projects />
        <Connect />
      </main>
    </div>
  );
}

export default App;
