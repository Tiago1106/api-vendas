import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// trabalhamos com Decorators - @
@Entity('medico')
class Medico {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @Column()
    area: string;

    @Column('int')
    idade: number;

    @Column('int')
    crm: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    
    
}

export default Medico;