import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {

    const currentUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
      };

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
}