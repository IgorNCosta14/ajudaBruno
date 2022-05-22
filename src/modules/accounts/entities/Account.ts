import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accounts")
class Account {
    @PrimaryGeneratedColumn('increment')
    account?: number;

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