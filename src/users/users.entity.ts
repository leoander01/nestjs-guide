import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with id', this.id);
  }
  
  @AfterUpdate()
  logUpdate() {
    console.log('Updated user with id', this.id);
  }
  
  @AfterRemove()
  logDelete() {
    console.log('Deleted user with id', this.id);
  }
}
