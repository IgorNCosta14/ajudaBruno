import { Statement } from "../../statements/entities/Statement";

interface ICreateAccountDTO {
    id?: number;
    name: string;
    email: string;
    cpf: string;
    statement?: Statement[];
    created_at?: Date;
}

export { ICreateAccountDTO }