import googleSvg from "@/assets/images/Google.svg";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Input from "@/shared/Input/Input";
import React from "react";
import { Link } from "react-router-dom";

const SignupSocials = [
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

export interface SignupWidgetProps {
  header?: React.ReactNode;
}

export default function SignupWidget(props: SignupWidgetProps) {
  return (
    <div className="container mb-24 lg:mb-32">
      {props.header && (
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          {props.header}
        </h2>
      )}
      <div className="max-w-md mx-auto space-y-6 ">
        <div className="grid gap-3">
          {SignupSocials.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img className="flex-shrink-0" src={item.icon} alt={item.name} />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                {item.name}
              </h3>
            </a>
          ))}
        </div>
        {/* OR */}
        <div className="relative text-center">
          <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
            OR
          </span>
          <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
        </div>
        {/* FORM */}
        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Email address
            </span>
            <Input
              type="email"
              placeholder="example@example.com"
              className="mt-1"
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Password
            </span>
            <Input type="password" className="mt-1" />
          </label>

          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Verification code
            </span>
            <div className="flex content-between flex-row">
              <Input
                placeholder={"6 digits sent to your email address"}
                max={6}
                min={6}
                type="number"
                className="mt-1 mr-4"
              />
              <ButtonSecondary type="button">Send</ButtonSecondary>
            </div>
          </label>
          <ButtonPrimary type="submit">Continue</ButtonPrimary>
        </form>

        {/* ==== */}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Already have an account? {` `}
          <Link className="underline" to="/login">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
}
