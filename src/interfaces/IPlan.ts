export interface IPlan {
    days: number;
    dailyBudget: number;
    investment: number;
    commission: number;
    total: number;
}

export interface IService {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
}
