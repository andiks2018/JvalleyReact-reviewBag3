import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [data, setData] = useState({
    username: "andi",
    email: "andi@andi.com",
    avatar: "https://picsum.photos/seed/halo/200/200",
  });
  return <UserContext.Provider value={{ data, setData }}>{children}</UserContext.Provider>;
}
