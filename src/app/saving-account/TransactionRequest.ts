export interface TransactionRequest<T> {
    body: T;
    tranCode: string;
}

export interface Deposit {
    account: string;
    amount: number;
}

export interface Withdrawal {
    account: string;
    amount: number;
}
