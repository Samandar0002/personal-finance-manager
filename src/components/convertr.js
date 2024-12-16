import React, { useState } from "react";
import { useAppContext } from "../App";

function CurrencyConverter() {
    const { rates } = useAppContext();
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const handleConvert = () => {
        if (rates[fromCurrency] && rates[toCurrency]) {
            const result = (amount / rates[fromCurrency]) * rates[toCurrency];
            setConvertedAmount(result.toFixed(2));
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Currency Converter</h5>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3 mb-3">
                        <select
                            className="form-select"
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            {Object.keys(rates).map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3 mb-3">
                        <select
                            className="form-select"
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                        >
                            {Object.keys(rates).map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary w-100" onClick={handleConvert}>
                            Convert
                        </button>
                    </div>
                </div>
                {convertedAmount > 0 && (
                    <p className="mt-3">
                        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                    </p>
                )}
            </div>
        </div>
    );
}

export default CurrencyConverter;
