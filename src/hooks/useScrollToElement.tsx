import { useEffect, MutableRefObject } from "react";

const useScrollToElement = (
  elementRef: MutableRefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [elementRef]);
};

export default useScrollToElement;
