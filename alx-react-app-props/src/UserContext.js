import React from "react";

const UserContext = React.createContext();

// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState({
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//   });

//   return (
//     <UserContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

export default UserContext;
