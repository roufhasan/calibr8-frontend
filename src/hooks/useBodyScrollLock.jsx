import { useEffect } from "react";

export default function useBodyScrollLock(isLocked = false) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}
