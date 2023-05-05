import React, { createContext, useState } from 'react';

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [ten, setTen]= useState('');

  return (
    <DataContext.Provider value={[ten, setTen]}>
      {children}
    </DataContext.Provider>
  );
};
