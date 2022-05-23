import { Statement } from "../../statements/entities/Statement";

interface ICreateAccountDTO {
    id?: number;
    name: string;
    email: string;
    cpf: string;
    created_at?: Date;
    updated_at?: Date;
}

export { ICreateAccountDTO }