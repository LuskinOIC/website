import React from "react";
import SectionStyles from "@/app/components/PageSection/PageSection.module.css";

export default function PageSectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${SectionStyles.pageSection} ${className}`}>
      {children}
    </section>
  );
}
