import "./styles.css";
import React from "react";

import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import UserTable from "./components/UserTable";

import ThemeToggle from "./components/ThemeToggle";
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h">
          <header>
            <h2>Dashboard</h2>
            <ThemeToggle />
          </header>
          <UserTable />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
