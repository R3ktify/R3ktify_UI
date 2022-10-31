import React, { FC } from "react";
import GallerySlider from "@/shared/GallerySlider/GallerySlider";
import { CarouselCardDemoData } from "./demo.data";
// import { StayDataType } from "data/types";
// import StartRating from "components/StartRating/StartRating";
import { Link } from "react-router-dom";
// import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
// import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import Badge from "@/shared/Badge/Badge";

export interface CarousekCardDataType {
  id: string | number;
  href: string;
  title: string;
  galleryImgs: string[];
  price?: number;
  featuredImage?: string;
  address?: string;
  date?: string;
  isAds?: boolean | null;
}

export interface CarouselCardProps {
  className?: string;
  ratioClass?: string;
  data?: CarousekCardDataType;
  size?: "default" | "small";
}

const DEMO_DATA = CarouselCardDemoData;

const CarouselCard: FC<CarouselCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
  ratioClass,
}) => {
  const { galleryImgs, date, title, href, isAds, price, id } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <GallerySlider
          uniqueID={`StayCard_${id}`}
          ratioClass={ratioClass}
          galleryImgs={galleryImgs}
        />
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "p-4 space-y-4" : "p-3 space-y-2"}>
        <div className="space-y-2">
          <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
            All materials provided by Miro Art School, except the lunchbox.
          </span>
          <div className="flex items-center space-x-2">
            {isAds && <Badge name="ADS" color="green" />}
            <h2
              className={` font-medium capitalize ${
                size === "default" ? "text-lg" : "text-base"
              }`}
            >
              <span className="line-clamp-2">{title}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
            {size === "default" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            )}
            <span className="">{date}</span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold text-indigo-500">
            ${price}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-CarouselCard group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="CarouselCard"
    >
      {renderSliderGallery()}
      <Link to={href}>{renderContent()}</Link>
    </div>
  );
};

export default CarouselCard;
