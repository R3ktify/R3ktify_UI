import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import React from "react";
// import { Helmet } from "react-helmet";
import I404Png from "@/assets/images/404.png";
import { NavigatableComponentProps } from "@/components/Business/BookingSteps/types";
import NcImage from "@/shared/NcImage/NcImage";
import { Helmet } from "react-helmet";

interface Page404Props extends NavigatableComponentProps {}

export default function Page404({ backHref = "/" }: Page404Props) {
  return (
    <div className="nc-Page404">
      <Helmet>
        <title>404 || R3ktify UI</title>
      </Helmet>
      <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto space-y-2">
          <NcImage src={I404Png} />
          <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
            THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.{" "}
          </span>
          <div className="pt-8">
            {backHref && (
              <ButtonPrimary href={backHref}>Return back</ButtonPrimary>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
