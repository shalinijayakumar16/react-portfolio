// hooks/itypedSubtitle.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function ItypedSubtitle() {
  const text = React.useMemo(
    () => [
      "Neuromorphic Computing 🧠",
      "A VLSI Designer 🔧",
      "An Entrepreneur🚀",

    
    ],
    []
  );
  const divRef = useRef();

  useEffect(() => {
    const options = {
      strings: text,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1200,
      startDelay: 500,
      showCursor: true,
      cursorChar: "▌",
      loop: true,
      loopCount: Infinity,
    };

    const typed = new Typed(divRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <span ref={divRef}></span>;
}
