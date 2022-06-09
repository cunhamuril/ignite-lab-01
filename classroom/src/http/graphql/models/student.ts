import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Enrollment } from './enrollment';

@ObjectType('User') // nome em comum para student e customer
@Directive('@extends')
@Directive('@key(fields: "authUserId")')
export class Student {
  id: string;

  @Field(() => ID)
  @Directive('@external')
  authUserId: string;

  @Field(() => [Enrollment])
  enrollments: Enrollment[];
}
