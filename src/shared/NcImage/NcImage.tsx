import React, { FC, ImgHTMLAttributes, useEffect, useRef } from "react";

export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  className = "object-cover w-full h-full",
  ...args
}) => {
  let isMounted = false;
  const _containerRef = useRef(null);

  useEffect(() => {
    isMounted = true;
    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <div
      className={`nc-NcImage ${containerClassName}`}
      data-nc-id="NcImage"
      ref={_containerRef}
    >
      <img src={src} className={className} alt={alt} {...args} />
    </div>
  );
};

export default NcImage;
