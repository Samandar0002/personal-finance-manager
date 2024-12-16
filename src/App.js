import React, { useState, useEffect, createContext, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import CurrencyConverter from "./components/convertr";
import Transactions from "./components/transaction";
import Dashboard from "./components/dashboard";
import { fetchExchangeRates } from "./service/api";

const AppContext = createContext();

function App() {
    const [rates, setRates] = useState({});
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("transactions");
        return saved ? JSON.parse(saved) : [];
    });

    const fetchRates = async () => {
        try {
            const data = await fetchExchangeRates();
            setRates(data);
        } catch (error) {
            console.error("Error fetching exchange rates:", error);
        }
    };

    useEffect(() => {
        fetchRates();
    }, []);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    return (
        <AppContext.Provider value={{ rates, transactions, setTransactions }}>
            <div className="container mt-4">
                <Header />
                <CurrencyConverter />
                <Dashboard />
                <Transactions />
            </div>
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);

export default App;

