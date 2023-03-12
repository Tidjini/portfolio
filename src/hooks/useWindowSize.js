import React from "react";

// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function useBreakPoints() {
  const size = useWindowSize();

  const [type, setType] = React.useState("lg");

  React.useEffect(() => {
    function handleChanges() {
      if (size.width <= 767) setType("xs");
      if (size.width > 767 && size.width <= 991) setType("sm");
      if (size.width > 991 && size.width <= 1199) setType("md");
      if (size.width > 1199 && size.width <= 1200) setType("lg");
      if (size.width > 1200) setType("xl");
    }
    handleChanges();
  }, [size]);

  return type;
}
