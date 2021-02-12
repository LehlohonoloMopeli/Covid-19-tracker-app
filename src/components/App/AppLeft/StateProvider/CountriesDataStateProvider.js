import React, { createContext, useContext , useReducer } from 'react';

//prepare the dataLayer
export const StateContext = createContext();

// Wrap the main application and provide the datalayer to every component
export const CountriesDataStateProvider = ({ countries__data__reducer, countries__data__initial__state, children }) =>{
    return(
        <StateContext.Provider value={useReducer(countries__data__reducer, countries__data__initial__state)}>
            {children}
        </StateContext.Provider>
    );
}

// export every information from the dataLayer
export const useCountriesDataStateValue = () => useContext(StateContext);

// export default StateProvider


