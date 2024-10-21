import React, { useState } from "react";
import Header from "@/components/Header";
import Friend from "@/components/Friend";
import MoneySendInputHandler from "@/components/MoneySendInputHandler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SendMoney = () => {
  const [username, setUsername] = useState("");

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  const handleInitiatedTansfer = () => {
    axios.post(
      "http://localhost:4001/root/account/transfer",
      {
        to: id,
        amount,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-slate-400">
        <div className="max-w-md w-full space-y-6 px-4">
          <div className="border bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="from-slate-400 to-blue-600 text-white px-6 py-4">
              <Header label="Send Money" />
            </div>
            <div className="px-6 py-8 space-y-6">
              <Friend name={username} />
              <div className="space-y-4">
                <Input
                  className="w-full border text-slate-700 shadow-xl rounded-xl font-medium px-4 py-2"
                  label="Username"
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <MoneySendInputHandler />
                <Button  onClick = {handleInitiatedTansfer} className="w-full bg-slate-500 hover:bg-slate-600 text-white rounded-xl font-medium px-4 py-2">
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
