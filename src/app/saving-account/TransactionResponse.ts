export enum TransactionStatus {Succeeded,Failed}

export interface TransactionResponse<T> {
    error: string;
    status: TransactionStatus;
    response: T;
}