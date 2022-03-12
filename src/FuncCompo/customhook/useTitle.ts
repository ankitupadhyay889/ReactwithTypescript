import { useEffect } from "react";
export const useTitle = (title: string) => {
  const originalTitle = document.title;
  
  useEffect(() => {
    document.title = title;
  }, [title, originalTitle]);
};