import { ICreateBalanceDTO } from "../dtos/ICreateBalanceDTO";
import { AccountBalance } from "../entities/AccountBalance";

export interface IAccountsBalanceRepository {
    create(data: ICreateBalanceDTO): Promise<AccountBalance>
}