
export function isNotNullAndUndefined<T>(
    variable: T | undefined | null
   ): variable is T {
    return typeof variable !== "undefined" && variable !== null;
}

export const customLog = (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  }; 