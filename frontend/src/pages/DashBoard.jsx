import React, { useEffect, useState } from "react"; // Combined imports
import AppBar from "@/components/AppBar";
import Balance from "@/components/Balance";
import UserDetails from "@/components/UserDetails";
import Footer from "@/components/Footer";
import axios from "axios";
const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:4001/root/account/balance", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (response.data) {
                    setBalance(response.data.balance);
                }
            } catch (error) {
                console.error("Error fetching balance:", error);
                setError("Failed to fetch balance");
                
                if (error.response?.status === 401) {
                    localStorage.removeItem("token");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);
    return (
        <div className="min-h-screen flex flex-col">
            {" "}
            <AppBar />
            <main className="flex-grow">
                {" "}
                <Balance value={balance} />{" "}
                <UserDetails />
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
