export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Response<T> {
    data: T;
    message: string;
    status: number;
}