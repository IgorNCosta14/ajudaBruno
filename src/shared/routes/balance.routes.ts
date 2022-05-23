import { Router } from "express";
import { CreateAccountBalanceController } from "../../modules/accounts/useCase/CreateAccountBalance/CreateAccountBalanceController";

const balanceRoutes = Router();

const accountsBalanceController = new CreateAccountBalanceController();

balanceRoutes.post("/", accountsBalanceController.handle);

export { balanceRoutes };
