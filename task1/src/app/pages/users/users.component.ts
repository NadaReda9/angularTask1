import { KeyValuePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  search: string = '';
  users = [
    { Fname: 'Mohamed', Lname: 'Reda', age: 25, address: 'Cairo', phone: '01111111111' },
    { Fname: 'Mohamed', Lname: 'Ali', age: 30, address: 'Giza', phone: '01111111112' },
    { Fname: 'Mohamed', Lname: 'Sayed', age: 28, address: 'Alexandria', phone: '01111111113' },
    { Fname: 'Ahmed', Lname: 'Reda', age: 24, address: 'Cairo', phone: '01111111114' },
    { Fname: 'Ahmed', Lname: 'Ali', age: 27, address: 'Giza', phone: '01111111115' },
    { Fname: 'Ahmed', Lname: 'Sayed', age: 29, address: 'Alexandria', phone: '01111111116' },
    { Fname: 'Mona', Lname: 'Reda', age: 22, address: 'Cairo', phone: '01111111117' },
    { Fname: 'Mona', Lname: 'Ali', age: 26, address: 'Giza', phone: '01111111118' },
    { Fname: 'Mona', Lname: 'Sayed', age: 28, address: 'Alexandria', phone: '01111111119' },
    { Fname: 'Tamer', Lname: 'Reda', age: 30, address: 'Cairo', phone: '01111111120' },
    { Fname: 'Tamer', Lname: 'Ali', age: 32, address: 'Giza', phone: '01111111121' },
    { Fname: 'Tamer', Lname: 'Sayed', age: 29, address: 'Alexandria', phone: '01111111122' },
    { Fname: 'Sayed', Lname: 'Reda', age: 33, address: 'Cairo', phone: '01111111123' },
    { Fname: 'Sayed', Lname: 'Ali', age: 35, address: 'Giza', phone: '01111111124' },
    { Fname: 'Sayed', Lname: 'Sayed', age: 31, address: 'Alexandria', phone: '01111111125' }
  ];


  

}

