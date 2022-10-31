import React from "react";

interface BorderBoxProps {
  header?: React.ReactNode;
  className?: string;
}

const BorderBox: React.FC<BorderBoxProps> = ({
  header,
  className = "",
  children,
}) => {
  return (
    <div
      className={`w-full flex flex-col bg-white rounded-2xl border border-neutral-200 dark:border-neutral-700 space-y-8 px-4 py-4 sm:p-6 xl:p-8`}
    >
      {header && (
        <>
          <h2 className="text-2xl lg:text-3xl font-semibold">{header}</h2>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        </>
      )}
      <div className={`${className}`}>{children}</div>
    </div>
  );
};

export default BorderBox;
