import { TOKEN_KEY } from "../config";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => JSON.parse(localStorage.getItem(TOKEN_KEY));
