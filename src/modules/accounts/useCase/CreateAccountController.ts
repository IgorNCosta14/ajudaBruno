import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

class CreateAccountController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { 
            name,
            email,
            cpf,
            password 
        } = request.body;

        const createAccountUseCase = container.resolve(CreateAccountUseCase);

        const newAccount = await createAccountUseCase.execute({
            name,
            email,
            cpf,
            password 
        })

        return response.status(201).json(newAccount);
    }
}

export { CreateAccountController }