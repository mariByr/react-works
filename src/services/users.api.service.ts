
const baseUrl= import.meta.env.VITE_BASE_API_URL;
console.log(baseUrl);
export const getAll: <T>(endpoint: string) => Promise<T> =
    async <T,>(endpoint: string):Promise<T> => {
        return await fetch(`${baseUrl}${endpoint}`).then(res => res.json());
    };
