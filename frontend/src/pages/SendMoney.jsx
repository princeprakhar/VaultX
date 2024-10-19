import React from "react";
import Header from "@/components/Header";
import Friend from "@/components/Friend";
import MoneySendInputHandler from "@/components/MoneySendInputHandler";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SendMoney = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen bg-slate-400">
        <div className="h-full flex flex-col justify-center">
          <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <Header label="Send Money" />
            </div>
            <div className="p-6">
              <Friend name="Prakhar deep" />
              <div className="space-y-4 mt-6">
                <div className="space-y-2">
                  <MoneySendInputHandler />
                </div>
                <Button className="justify-center hover:bg-slate-800 rounded-xl text-md font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-slate-500 text-white">
                  Initiate Transfer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SendMoney;
