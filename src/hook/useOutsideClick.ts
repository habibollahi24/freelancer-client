import { useEffect, useRef, useState } from "react";

export default function useOutsideClick(handler: () => void) {
  const [toggle, setToggle] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      !boxRef.current?.contains(target) &&
        !buttonRef.current?.contains(target) &&
        handler();
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return { boxRef, buttonRef, toggle, setToggle };
}
