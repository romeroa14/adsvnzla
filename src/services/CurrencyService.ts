import axios from 'axios';
import type { ICurrency } from '../interfaces/ICurrency';

const API_URL = 'https://ve.dolarapi.com/v1/dolares';

export const getCurrencies = async (): Promise<ICurrency[]> => {
    try {
        const response = await axios.get<ICurrency[]>(API_URL);
        // The API returns an array of currency objects
        return response.data;
    } catch (error) {
        console.error('Failed to fetch currencies:', error);
        return [];
    }
};
