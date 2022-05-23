import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { Account } from "./Account";

@Entity("account")
export class AccountBalance {
    @PrimaryColumn()
    public readonly id?: number;

    @ManyToOne(() => Account)
    @JoinColumn({ name: "account_id" })
    public account_id: number;

    @Column({ nullable: false, unique: false })
    public balance: number;

    @CreateDateColumn()
    public created_at?: Date;

    @CreateDateColumn()
    public updated_at?: Date;
}