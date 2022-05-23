import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAccountBalanceUseCase } from "./CreateAccountBalanceUseCase";

class CreateAccountBalanceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { account_id, balance, } = request.body;

        const createAccountUseCase = container.resolve(CreateAccountBalanceUseCase);

        const newBalance = await createAccountUseCase.execute({ account_id, balance })

        return response.status(201).json(newBalance)

    }
}

export { CreateAccountBalanceController }