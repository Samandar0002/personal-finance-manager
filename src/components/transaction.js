import React, { useState, useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const addTransaction = (type, amount, category, date, note) => {
    const newTransaction = {
      id: Date.now(),
      type, 
      amount: parseFloat(amount),
      category,
      date,
      note,
    };

    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);

    if (type === "income") {
      setIncome((prev) => prev + newTransaction.amount);
      setBalance((prev) => prev + newTransaction.amount);
    } else if (type === "expense") {
      setExpense((prev) => prev + newTransaction.amount);
      setBalance((prev) => prev - newTransaction.amount);
    }

    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) {
      setTransactions(savedTransactions);

      let totalIncome = 0;
      let totalExpense = 0;
      savedTransactions.forEach((txn) => {
        if (txn.type === "income") totalIncome += txn.amount;
        if (txn.type === "expense") totalExpense += txn.amount;
      });

      setIncome(totalIncome);
      setExpense(totalExpense);
      setBalance(totalIncome - totalExpense);
    }
  }, []);

  return (
    <div className="container my-4">
      <Card className="shadow-lg p-4 mb-3 bg-white rounded">
        <Card.Body>
          <Card.Title className="text-center mb-3">Moliyaviy Balans</Card.Title>
          <div className="text-center">
            <h4 className="mb-2">Balans: <span className={balance >= 0 ? "text-success" : "text-danger"}>${balance}</span></h4>
            <h5 className="mb-4">Jami Daromad: ${income}</h5>
            <h5>Jami Xarajat: ${expense}</h5>
          </div>
          <div className="d-flex justify-content-center my-4">
            <Button variant="success" className="mx-2" onClick={() => addTransaction("income", 500, "Ish haqi", "2024-12-16", "Qo'shimcha daromad")}>
              Daromad Qo'shish
            </Button>
            <Button variant="danger" className="mx-2" onClick={() => addTransaction("expense", 200, "Transport", "2024-12-16", "Yo'lkira")}>
              Xarajat Qo'shish
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="shadow-lg p-3 bg-white rounded">
        <Card.Body>
          <Card.Title className="text-center">Barcha Tranzaksiyalar</Card.Title>
          <ListGroup className="list-group-flush">
            {transactions.map((txn) => (
              <ListGroup.Item key={txn.id} className="animate__animated animate__fadeIn">
                <div>
                  <strong>{txn.date}</strong> - {txn.category} -{" "}
                  <span className={txn.type === "income" ? "text-success" : "text-danger"}>
                    {txn.type === "income" ? "+" : "-"}${txn.amount}
                  </span> 
                  <span className="text-muted"> ({txn.note})</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Transactions;
