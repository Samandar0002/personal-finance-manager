import React from "react";
import { useAppContext } from "../App";
import Charts from "./chart";

function Dashboard() {
    const { transactions } = useAppContext();
    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    const expense = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    const balance = income - expense;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Dashboard</h5>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h6>Total Income</h6>
                        <p className="text-success">${income.toFixed(2)}</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Total Expense</h6>
                        <p className="text-danger">${expense.toFixed(2)}</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Balance</h6>
                        <p className="text-primary">${balance.toFixed(2)}</p>
                    </div>
                </div>
                <Charts />
            </div>
        </div>
    );
}

export default Dashboard;
