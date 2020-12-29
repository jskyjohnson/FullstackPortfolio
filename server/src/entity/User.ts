import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Experiences {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { nullable: true })
  organization: string;

  @Field()
  @Column({ type: "date", nullable: true })
  date: Date;

  @Field()
  @Column("text", { nullable: true })
  location: string;
}

@ObjectType()
export class Softwares {
  @Field(() => Number)
  id: number;

  @Field()
  category: string;

  @Field(() => [String])
  list: string[];
}

//Most everything here doesn't need to be a sep entity
@ObjectType()
export class About {
  @Field({ nullable: true })
  @Column("text", { nullable: true })
  about_pic: string;

  @Field(  { nullable: true } )
  @Column("text", { nullable: true })
  about_header_message: string;

	@Field(() => [Experiences],  { nullable: true })
	// @Column( {nullable: true})
  experience: Experiences[];

  @Field(() => [Softwares],  { nullable: true })
  softwares: Softwares[];

  @Field(() => [[String]],  { nullable: true })
  @Column("text", { nullable: true, array: true })
  info: string[][];

  @Field(() => [[String]],  { nullable: true })
  @Column("text", { nullable: true, array: true })
  bios: string[][];
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  title_name: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  first_name: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  last_name: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  footerMessage: string;

  @Field((type) => About)
  @Column(() => About)
  about: About;
  // contact: Contact;
}

// class Contact {
//   email: String;
//   location: String;
//   lat: String;
//   long: String;
//   services: [Services];
//   contactMessage: [String];
// }

// class Services {
//   app: String;
//   account: String;
//   profileUrl: String;
// }
