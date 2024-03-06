import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  public users: User[] = [
    {id: 1, name: 'John Doe', age: 25, email: 'johndoe@gmail.com', subscription: true}, 
    {id: 2, name: 'Jane Doe', age: 25, email: 'Jane@gmail.com', subscription: false},
    {id: 3, name: 'John Smith', age: 25, email: 'JohnSmith@gmail.com', subscription: true}
];

  create(createUserDto: CreateUserDto) {
    this.users.push( {
      id: this.users.length + 1,
      ...createUserDto
  } 
  ); 
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
        throw new NotFoundException(`user with id: ${id} not found`);
    }
    return user;    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    this.remove(id);
    this.users.push({...user, ...updateUserDto});
  }

  remove(id: number) {
    this.findOne(id);
    this.users = this.users.filter(user => user.id !== id);
  }
}
