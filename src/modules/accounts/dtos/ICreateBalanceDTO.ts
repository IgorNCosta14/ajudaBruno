export interface ICreateBalanceDTO {
    id: number;
    account_id: number;
    balance: number;
    created_at?: Date;
    updated_at?: Date;
}
