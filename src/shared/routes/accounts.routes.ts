import { Router } from "express";
import { CreateAccountController } from "../../modules/accounts/useCase/CreateAccount/CreateAccountController";

const accountsRoutes = Router();


const accountsController = new CreateAccountController();

accountsRoutes.post("/", accountsController.handle);

export { accountsRoutes };
