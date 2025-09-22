import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';


export default function App() {
  const text = React.useMemo(()=> ["Mithun Vimalan",]);
  const divRef = useRef();

    useEffect(() => {
      const options = {
        strings: text,
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1200,
        startDelay: 500,
        showCursor: true,
        cursorChar: "▌",
        loop: true,
        loopCount: Infinity,
      };

   const typed = new Typed(divRef.current, options);

   return ()=> {
     typed.destroy();
   }

  }, [text]);

  return (

     
      <span ref={divRef}></span>
 
  );
}
