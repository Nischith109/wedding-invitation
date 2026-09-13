import { useEffect, useRef, useState } from "react";

function ScrollReveal({
  children,
  className = "",
}) {

  const elementRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);


  useEffect(() => {

    const element =
      elementRef.current;


    if (!element) {
      return;
    }


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setVisible(true);

            observer.unobserve(element);

          }

        },
        {
          threshold: 0.12,

          rootMargin:
            "0px 0px -70px 0px",
        }
      );


    observer.observe(element);


    return () =>
      observer.disconnect();

  }, []);


  return (

    <div
      ref={elementRef}
      className={`
        scroll-reveal
        ${visible ? "scroll-visible" : ""}
        ${className}
      `}
    >

      {children}

    </div>

  );
}

export default ScrollReveal;