# Personal Finance Manager

Personal Finance Manager is a web application built using **ReactJS** and **Bootstrap**. It helps users manage their finances effectively by allowing them to:

- View real-time currency exchange rates.
- Add, categorize, and manage financial transactions (income/expenses).
- Visualize financial data through interactive charts.

## Features

1. **Currency Conversion**: Convert an amount to different currencies using real-time exchange rates.
2. **Transaction Management**: 
   - Add transactions with details like amount, category, date, and description.
   - Categorize transactions as income or expense.
   - View total income, total expense, and net balance.
3. **Charts**: 
   - Doughnut chart for expense categories.
   - Animated bar charts for income/expense trends.
4. **Responsive UI**: Modern and responsive design using **Bootstrap**.
5. **Local Storage**: Transactions are saved in the browser's `localStorage`.
6. **Filters**: Filter transactions by date range or category.

---

## Getting Started

Follow the instructions below to run the project on your local machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Samandar0002/personal-finance-manager.git
   cd personal-finance-manager

2.Install Dependencies: Run the following command to install required packages:
**npm install**
3.Setup Environment: No additional setup is required as the ExchangeRate API is public for demo purposes. However, if needed, replace the API URL in src/services/api.js.

4.Start the Application: Launch the development server:
**npm start**

5.Open your browser and go to http://localhost:3000 to view the application.


**Folder structure**
personal-finance-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js           # Navigation bar
│   │   ├── CurrencyConverter.js # Currency conversion functionality
│   │   ├── Transactions.js      # Transaction management
│   │   ├── Dashboard.js         # Balance summary and filters
│   │   ├── Charts.js            # Visualization using react-chartjs-2
│   ├── services/
│   │   ├── api.js              # Fetch exchange rates from API
│   ├── App.js                   # Main application component
│   ├── index.js                 # Entry point
├── package.json

7.Technologies Used
Frontend: ReactJS, Bootstrap
State Management: React Hooks, Context API
Charts: react-chartjs-2, Chart.js
API: ExchangeRate API (https://www.exchangerate-api.com/)

8.Key Commands
Command	Description
**npm install**	Install project dependencies
**npm start**	Run the development server
**npm run build**	Create a production build

**Additional Notes**
--Ensure an active internet connection for real-time currency rates.
--This project is optimized for modern browsers. For the best experience, use the latest version of Chrome, Firefox, or Edge.
--Contributions are welcome! Feel free to fork the repository and submit pull requests.