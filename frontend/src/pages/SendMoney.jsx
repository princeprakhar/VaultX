import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Header";
import Friend from "@/components/Friend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import toast from 'react-hot-toast';
import Footer from "@/components/Footer";

const SendMoney = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [amount, setAmount] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInitiatedTransfer = async () => {
    if (!receiverEmail || !amount || amount <= 0) {
      setError("Please provide valid email and amount");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        "http://localhost:4001/root/account/transfer",
        { amount: Number(amount), receiverEmail },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      console.log("Transfer response:", response); 

      if (response.status === 200) {
        setSuccess(true);
        toast.success("Transfer successful! Redirecting...");
        setAmount("");
        setReceiverEmail("");
        setTimeout(() => {
          navigate('/dashboard');
        }, 4000);
      }
    } catch (error) {
      toast.error("Transfer failed. Please try again.");
      setSuccess(false);
      setError(error.response?.data?.message || "Transfer failed. Please try again.");
      console.error("Transfer failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-slate-400 py-8">
        <div className="max-w-md w-full space-y-6 px-4">
          <div className="border bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-400 to-blue-600 text-white px-6 py-4">
              <Header label="Send Money" />
            </div>
            <div className="px-6 py-8 space-y-6">
              {name && <Friend name={name} />}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Receiver's Email
                  </label>
                  <Input
                    className="w-full border text-slate-700 shadow-xl rounded-xl font-medium px-4 py-2"
                    type="email"
                    placeholder="Enter receiver's email"
                    value={receiverEmail}
                    onChange={(e) => {
                      setError("");
                      setReceiverEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Amount (in Rs)
                  </label>
                  <Input
                    className="w-full border text-slate-700 shadow-xl rounded-xl font-medium px-4 py-2"
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => {
                      setError("");
                      setAmount(e.target.value);
                    }}
                    required
                  />
                </div>
                {error && (
                  <div className="text-red-500 text-sm text-center">{error}</div>
                )}
                {success && (
                  <div className="text-green-500 text-sm text-center">
                    Transfer successful! Redirecting...
                  </div>
                )}
                <Button 
                  onClick={handleInitiatedTransfer} 
                  disabled={!receiverEmail || !amount || !isValidEmail(receiverEmail) || isLoading}
                  className="w-full bg-slate-500 hover:bg-slate-600 text-white rounded-xl font-medium px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Processing..." : "Initiate Transfer"}
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