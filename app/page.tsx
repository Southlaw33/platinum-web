import { Button } from "@/components/ui/button";
import React from "react";

const Rootpage = () => {
  return (
    <div className="h-svh container mx-auto">
      <div className="h-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl ">
          platinum
        </h1>
        <p>platinum is the world&apos;s largest tech news aggregator</p>
        <div className="flex flex-row items-center gap-4">
          <Button>Sign Up</Button>
          <Button variant="secondary">Log In</Button>
        </div>
      </div>
    </div>
  );
};

export default Rootpage;
