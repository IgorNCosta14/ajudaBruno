import { Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("account")
export class Account {
    @PrimaryColumn()
    public readonly id?: number;

    @Column({ nullable: false, unique: false })
    public name: string;

    @Column({ nullable: false, unique: false })
    public email: string;

    @Column({ nullable: false, unique: false })
    public cpf: string;

    @CreateDateColumn()
    public created_at?: Date;

    @CreateDateColumn()
    public updated_at?: Date;
}