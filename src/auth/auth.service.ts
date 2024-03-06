import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
@Injectable()
export class AuthService {

  public users: User[] = [
    {id: 1, name: 'John Doe', age: 25, email: 'johndoe@gmail.com'}, 
    {id: 2, name: 'Jane Doe', age: 25, email: 'Jane@gmail.com'},
    {id: 3, name: 'John Smith', age: 25, email: 'JohnSmith@gmail.com'}
];

  check(email: string) {
    const user = this.users.find(user => user.email === email);
    if (!user) {
        throw new NotFoundException(`user with email: ${email}} not found`);
    }
    return user;    
  }
}
