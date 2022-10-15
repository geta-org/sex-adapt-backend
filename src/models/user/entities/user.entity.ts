import { ReviewEntity } from './../../review/entities/review.entity';
import { hash } from 'argon2';
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './../../base/entities/base-entity.entity';
import { IUserEntity } from './../interfaces/user.interface';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUserEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

<<<<<<< HEAD
  @OneToMany(() => ReviewEntity, (review) => review.user, { cascade: true })
  @JoinColumn({ name: 'review_id' })
  reviews: ReviewEntity[];
=======
	@Column({ nullable: true })
	hashedRefreshToken: string;
>>>>>>> fix/config

  @Column({ nullable: true })
  hashedRefreshToken: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password);
  }
}
