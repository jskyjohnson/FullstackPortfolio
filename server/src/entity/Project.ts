import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity()
export class Project extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  title: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  subtitle: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  category: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  filter: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  thumbnail: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  date: string;

  //JSON OBJECT (parse it at decode)
  @Field({ nullable: true })
  @Column("text", { nullable: true })
  meta: string;

  @Field(() => [[String]])
  @Column("text", { nullable: true, array: true })
  description: string[][];

  @Field(() => [String], { nullable: true })
  @Column("text", { nullable: true, array: true })
  images: [string];

  // @ManyToOne((type) => User, (user) => user.id)
  @Field(() => ID)
  @Column()
  userId: number;
}
