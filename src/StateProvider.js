import React, { createContext, useContext, useReducer } from "react";

// This is the data layer 
export const StateContext = createContext();

// Building a provider
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

// Custom hook to use the StateContext
export const useStateValue = () => useContext(StateContext);
