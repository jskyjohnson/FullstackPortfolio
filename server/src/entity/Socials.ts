import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Field, Int, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Socials extends BaseEntity{

	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number; //To match user id

	@Field({nullable: true})
	@Column("text", {nullable: true})
	json: string;

	// @Field({nullable: true})
	// @Column("text", {nullable: true})
	// username: string;

	// @Field({nullable: true})
	// @Column("text", {nullable: true})
	// media: string; //SemanticICONs in client side

	//Maybe I need a user id string that matches?
}