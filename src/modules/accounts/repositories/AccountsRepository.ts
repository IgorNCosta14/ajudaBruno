import { getRepository, Repository } from "typeorm";
import { ICreateAccountDTO } from "../dtos/ICreateAccountDTO";
import { Account } from "../entities/Account";
import { IAccountsRepository } from "./IAccountsRepository";

class AccountsRepository implements IAccountsRepository {
  private repository: Repository<Account>;

  constructor() {
    this.repository = getRepository(Account);
  }
  
  async create({
    id,
    name,
    email,
    cpf,
    created_at,
    updated_at
  }: ICreateAccountDTO): Promise<Account> {
    const userAccount = this.repository.create({
      id,
      name,
      email,
      cpf,
      created_at,
      updated_at
    });

    await this.repository.save(userAccount);

    return userAccount;
  }
}

export { AccountsRepository };
