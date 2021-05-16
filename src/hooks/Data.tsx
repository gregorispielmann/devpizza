import React, { createContext, useState, useContext } from 'react';
import { useLoading } from './Loading';

interface IDataContext {
  data: Record<string, any>;
  updateData(updated: Record<string, any>): void;
}

export const DataContext = createContext<IDataContext>({} as IDataContext);

export const DataProvider: React.FC = ({ children }) => {
  const { showLoading, hideLoading } = useLoading();

  const [data, setData] = useState(() => {
    const oldData = localStorage.getItem('@DevPizza:data');
    if (oldData) {
      return { ...JSON.parse(oldData) };
    }
    return {};
  });

  const updateData = (updated: any) => {
    try {
      showLoading();

      localStorage.setItem(
        '@DevPizza:data',
        JSON.stringify({
          ...updated,
        }),
      );
      setData({ ...data, ...updated });
    } catch (e) {
      // console.log(e);
    } finally {
      hideLoading();
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        updateData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useData(): IDataContext {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within an DataProvider');
  }

  return context;
}
