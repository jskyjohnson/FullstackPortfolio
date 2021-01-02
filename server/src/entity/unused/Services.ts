// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   BaseEntity,
//   ManyToOne,
//   OneToMany,
// } from "typeorm";
// import { Field, Int, ObjectType, ID } from "type-graphql";
// import { About, User } from "./User";

// @ObjectType()
// @Entity()
// export class Services extends BaseEntity {
//   //@Field(() => Number)
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Field()
//   @Column("text", { nullable: true })
//   app: String;

//   @Field()
//   @Column("text", { nullable: true })
//   account: String;

//   @Field()
//   @Column("text", { nullable: true })
//   profileUrl: String;

//   // @ManyToOne((type) => User, (user) => user.contact.services)
//   // user: User;
// }
