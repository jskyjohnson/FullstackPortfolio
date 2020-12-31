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
// export class Softwares extends BaseEntity {
//   @Field(() => ID)
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Field()
//   @Column("text", { nullable: true })
//   category: string;

//   @Field(() => [String])
//   @Column("text", { nullable: true, array: true })
//   list: string[];

//   // @ManyToOne((type) => User, (user) => user.about.softwares)
//   // user: User;
// }