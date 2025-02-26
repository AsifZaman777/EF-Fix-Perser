import React, { createContext, useState } from 'react';

export const ParseContext = createContext();

export const ParseProvider = ({ children }) => {
    const [parsedData, setParsedData] = useState([]);

    return (
        <ParseContext.Provider value={{ parsedData, setParsedData }}>
            {children}
        </ParseContext.Provider>
    );
};
