"use client";

import React, { useState, createContext, ReactNode } from "react";

interface SearchContextType {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setQuery(e.target.value);
  };

  return (
    <SearchContext.Provider value={{ query, onChange }}>
      {children}
    </SearchContext.Provider>
  );
};
