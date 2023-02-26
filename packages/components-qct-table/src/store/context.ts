import { createContext } from 'react';

export type TableContextType = {
  isSelected: (id: string) => boolean;
  selectedItems?: string[];
};
export const TableContext = createContext<TableContextType | undefined>(
  undefined,
);
