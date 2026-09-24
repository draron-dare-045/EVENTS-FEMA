import React, { useEffect, useRef, useState } from 'react';

/**
 * Drop-in <img> that fades in once it has loaded (and again whenever src changes)
 * instead of popping in half-way through a card animation.
 */
export const FadeImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  style,
  onLoad,
  ...props
}) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = ref.current;
    setLoaded(!!img && img.complete && img.naturalWidth > 0);
  }, [props.src]);

  return (
    <img
      ref={ref}
      {...props}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1100ms ease-out, transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    />
  );
};
