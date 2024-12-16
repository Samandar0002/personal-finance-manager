export const fetchExchangeRates = async () => {
    const API_URL = "https://open.er-api.com/v6/latest/USD";
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
    }
    const data = await response.json();
    return data.rates;
};
