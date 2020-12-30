import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Field, Int, ObjectType, ID } from "type-graphql";
import { About, User } from "./User";

@ObjectType()
@Entity()
export class Experiences extends BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { nullable: true })
  organization: string;

  @Field()
  @Column("text", { nullable: true })
  job: string;

  @Field()
  @Column({ type: "date", nullable: true })
  date: Date;

  @Field()
  @Column("text", { nullable: true })
	location: string;
	
	@ManyToOne((type) => User, (user) => user.about.experience)
  user: User;
}