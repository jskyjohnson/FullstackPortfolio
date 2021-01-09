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

export interface homepageinfoType {
  hero_intro: string;
  intro_text: string;
  carousel_text: string;
  carousel_text_values: string[];
  hero_portrait: string;
}

@ObjectType()
@Entity()
export class Homepage extends BaseEntity{

	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number; //To match user id

	// @Field({nullable: true})
	// @Column("text", {nullable: true})
	// json: string;

	@Field({ nullable: true })
  @Column("text", { nullable: true })
	hero_intro: string;
	
	@Field({ nullable: true })
  @Column("text", { nullable: true })
	intro_text: string;
	
	@Field({ nullable: true })
  @Column("text", { nullable: true })
	carousel_text: string;
	
	@Field({ nullable: true })
  @Column("text", { nullable: true })
	hero_portrait: string;
	
	@Field(() => [String], { nullable: true })
  @Column("text", { nullable: true, array: true })
  carousel_text_values: [string];

	//Maybe I need a user id string that matches?
}