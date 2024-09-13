import React from "react";
import SectionWrapper from "@/components/common/section-wrapper";
import SectionHeader from "@/components/common/section-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SectionWrapper className="px-10">
        <SectionHeader
          heading="Inquiry Management"
          variant={"lg"} />
      </SectionWrapper>
      <main>{children}</main>
    </div>
  );
};

export default layout;
