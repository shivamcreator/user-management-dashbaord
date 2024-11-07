import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  company: {
    name: string;
  };
}
type UserContextType = {
  users: User[];
};
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("UseUSErs");
  return context;
};
