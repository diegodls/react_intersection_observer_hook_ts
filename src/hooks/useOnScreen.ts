import { useEffect, useState, useRef, RefObject, useMemo } from "react";

interface useOnScreenProps {
  ref: RefObject<HTMLDivElement>;
  options?: IntersectionObserverInit;
  keepOnScreen?: boolean;
}

export default function useOnScreen({
  ref,
  options,
  keepOnScreen,
}: useOnScreenProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [isOnScreen, setIsOnScreen] = useState(false);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const memoOptions = useMemo(() => {
    return {
      root: options?.root || null,
      rootMargin: options?.rootMargin || "0px",
      threshold: options?.threshold || 0.5,
    };
  }, [options]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, memoOptions);
  }, [memoOptions]);

  useEffect(() => {
    if (keepOnScreen && isOnScreen) setIsVisible(true);

    if (!keepOnScreen) setIsVisible(isOnScreen);
  }, [isOnScreen, keepOnScreen]);

  useEffect(() => {
    if (ref.current && observerRef.current)
      observerRef.current.observe(ref.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isVisible;
}
