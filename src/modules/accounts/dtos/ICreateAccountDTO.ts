import { Statement } from "../../statements/entities/Statement";

interface ICreateAccountDTO {
    account?: number;
    name: string;
    email: string;
    cpf: string;
    password: string;
    statement?: Statement[];
    created_at?: Date;
}

export { ICreateAccountDTO }