import { Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("account")
class Account {
    @PrimaryColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at?: Date;
}

export { Account }