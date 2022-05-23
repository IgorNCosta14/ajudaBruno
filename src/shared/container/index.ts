import { container } from "tsyringe";
import { AccountBalanceRepository } from "../../modules/accounts/repositories/AccountBalanceRepository";
import { AccountsRepository } from "../../modules/accounts/repositories/AccountsRepository";
import { IAccountsBalanceRepository } from "../../modules/accounts/repositories/IAccountBalanceRepository";
import { IAccountsRepository } from "../../modules/accounts/repositories/IAccountsRepository";

container.registerSingleton<IAccountsRepository>(
  "AccountsRepository",
  AccountsRepository
);

container.registerSingleton<IAccountsBalanceRepository>(
  "AccountBalanceRepository",
  AccountBalanceRepository
)