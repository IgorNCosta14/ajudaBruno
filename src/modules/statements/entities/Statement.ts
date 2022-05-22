import { Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuidV4 } from "uuid";

enum OperationType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
}

@Entity("statements")
class Statement {
    @PrimaryColumn()
    id: string;

    @Column({ type: 'enum', enum: OperationType })
    event: OperationType;

    @Column()
    bankTarget: string;  // Banco Toro

    @Column()
    branchTarget: string; // Única agenda, sempre 0001

    @Column()
    account: string; // Conta do usuário na Toro

    @Column()
    bankOrigin: string; // Banco de origem 

    @Column()
    branchOrigin: string;// Agencia de origem

    @Column()
    cpfOrigin: string; // CPF do remetente

    @Column('decimal', { precision: 5, scale: 2 })
    amount: number;

    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Statement }