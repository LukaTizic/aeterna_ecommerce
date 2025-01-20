"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#020818] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-lg mt-4">This page could not be found.</p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => (window.location.href = "/")}
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
