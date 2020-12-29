import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Admin } from "./Admin";

@ObjectType()
@Entity()
export class SampleCRUDPost extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { nullable: true })
  title: string;

  @Field(() => [[String]])
  @Column("text", { nullable: true, array:true })
  content: string[][];
	
	@Field()
	@CreateDateColumn()
	datePosted: Date;

	@Field()
	@UpdateDateColumn()
	lastUpdate: Date;
}
