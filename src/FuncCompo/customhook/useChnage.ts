import { useEffect } from "react";

export const useChnage = (componentName: string, value: string) => {
  useEffect(() => {
    console.log(`${componentName}`, value);
  });
  
};