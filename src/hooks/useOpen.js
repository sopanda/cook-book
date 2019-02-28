import { useState } from "react";
export function useOpen() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return { isOpen, toggle };
}
