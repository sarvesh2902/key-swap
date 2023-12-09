import React from "react";
import NewApi from "@/components/NewApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const NewApiPage = () => {
  return (
    <div className="pb-20 pt-40">
      <NewApi />
    </div>
  );
};

export default NewApiPage;
