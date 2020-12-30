import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Field, Int, ObjectType, ID } from "type-graphql";
import { Softwares } from "./Softwares";
import { Experiences } from "./Experiences";
import { Services } from "./Services";




@ObjectType()
export class Contact {
  @Field({ nullable: true })
  @Column("text", { nullable: true })
  email: String;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  location: String;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  lat: String;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  long: String;


  @Field(() => [Services], { nullable: true })
  @OneToMany((type) => Services, (service) => service.user)
  services: [Services];

  @Field(() => [[String]], { nullable: true })
  @Column("text", { nullable: true, array: true })
  contactMessage: [String];
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

  @Field(() => [Experiences],  { nullable: true })
  @OneToMany((type) => Experiences, (experience) => experience.user)
  experience: Experiences[];

  @Field(() => [Softwares], { nullable: true })
  @OneToMany((type) => Softwares, (software) => software.user)
  softwares: Softwares[];

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



