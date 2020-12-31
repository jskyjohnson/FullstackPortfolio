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
// import { Softwares } from "./Softwares";
// import { Experiences } from "./Experiences";
// import { Services } from "./Services";

@ObjectType()
export class Service {
  //@Field(() => Number)
  id: number;

  @Field()
  app: String;

  @Field()
  account: String;

  @Field()
  profileUrl: String;
}

@ObjectType()
export class Contact {
  @Field({ nullable: true })
  @Column("text", { nullable: true })
  email: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  location: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  lat: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  long: string;

  //THIS IS REALLY BAD SOMEONE PLEASE FIX THIS IN THE FUTURE
  @Field({ nullable: true })
  @Column("text", { nullable: true })
  services: string;

  @Field(() => [String], { nullable: true })
  @Column("text", { nullable: true, array: true })
  contactMessage: [string];
}

//Most everything here doesn't need to be a sep entity
@ObjectType()
export class About {
  @Field({ nullable: true })
  @Column("text", { nullable: true })
  about_pic: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  about_header_message: string;

  //THIS IS REALLY BAD SOMEONE PLEASE FIX THIS IN THE FUTURE
  // @Field(() => [Experiences],  { nullable: true })
  // @OneToMany((type) => Experiences, (experience) => experience.user)
  @Field({ nullable: true })
  @Column("text", { nullable: true })
  experience: string;
  // experience: Experiences[];

  //THIS IS REALLY BAD SOMEONE PLEASE FIX THIS IN THE FUTURE
  // @Field(() => [Softwares], { nullable: true })
  // @OneToMany((type) => Softwares, (software) => software.user)
  @Field({ nullable: true })
  @Column("text", { nullable: true })
  softwares: string;
  // softwares: Softwares[];

  @Field(() => [[String]], { nullable: true })
  @Column("text", { nullable: true, array: true })
  info: string[][];

  @Field(() => [[String]], { nullable: true })
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

  @Field((type) => Contact)
  @Column(() => Contact)
  contact: Contact;
}
