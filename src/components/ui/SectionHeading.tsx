import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        {children}
      </h2>

      <div className="mt-2 h-1 w-5 bg-primary" />
    </>
  );
};