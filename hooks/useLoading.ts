import { useEffect, useRef } from "react";
import { atom, useSetRecoilState } from "recoil";

export const isLoadingState = atom({
    key: "isLoading",
    default: 0,
});

export function useLoading(isLoading: boolean) {
  const setIsLoading = useSetRecoilState(isLoadingState);
  const hasSetLoading = useRef(isLoading);
  useEffect(
    () => {
      if (!isLoading && hasSetLoading.current) { // Don't subtract if started with false
        setIsLoading(prev => prev - 1);
        hasSetLoading.current = false;
      }
      else if (isLoading) {
        setIsLoading(prev => prev + 1);
        hasSetLoading.current = true;
      }
  
      return () => {
        debugger;
        if (hasSetLoading.current) {
          setIsLoading(prev => prev -1);
          hasSetLoading.current = false;
        }
      };
    },
    [isLoading, setIsLoading],
  );
}