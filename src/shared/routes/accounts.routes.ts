import { Router } from "express";
import { CreateAccountController } from "../../modules/accounts/useCase/CreateAccountController";

const accountsRoutes = Router();


const accountsController = new CreateAccountController();

accountsRoutes.post("/", accountsController.handle);

export { accountsRoutes };
