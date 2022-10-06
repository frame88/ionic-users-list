import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public users = [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Perry',
        last: 'Weaver'
      },
      location: {
        street: {
          number: 4439,
          name: 'George Street'
        },
        city: 'Carlow',
        state: 'Kerry',
        country: 'Ireland',
        postcode: 10108,
        coordinates: {
          latitude: '-1.7031',
          longitude: '-143.0373'
        },
        timezone: {
          offset: '+6:00',
          description: 'Almaty, Dhaka, Colombo'
        }
      },
      email: 'perry.weaver@example.com',
      login: {
        uuid: 'cfc73260-caa6-477d-a20f-a14e410ffb0d',
        username: 'angryzebra688',
        password: 'burns',
        salt: 'VQOACCZQ',
        md5: 'ff7dccc93b9448f0ae64e7bfce27431a',
        sha1: '12e204979f5aafdc077f50c8735da50b40b16218',
        sha256: '219e95dd2ccfda12198795668bc5e04248cdad3c390b58f8aa73950405d0f125'
      },
      dob: {
        date: '1951-01-27T07:27:34.651Z',
        age: 71
      },
      registered: {
        date: '2007-05-04T06:14:26.590Z',
        age: 15
      },
      phone: '031-109-9708',
      cell: '081-075-0278',
      id: {
        name: 'PPS',
        value: '0173075T'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/88.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/88.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/88.jpg'
      },
      nat: 'IE'
    },
    {
      gender: 'male',
      name: {
        title: 'Dr',
        first: 'Mario',
        last: 'Alisei'
      },
      location: {
        street: {
          number: 4439,
          name: 'George Street'
        },
        city: 'Carlow',
        state: 'Kerry',
        country: 'Ireland',
        postcode: 10108,
        coordinates: {
          latitude: '-1.7031',
          longitude: '-143.0373'
        },
        timezone: {
          offset: '+6:00',
          description: 'Almaty, Dhaka, Colombo'
        }
      },
      email: 'perry.weaver@example.com',
      login: {
        uuid: 'cfc73260-caa6-477d-a20f-a14e410ffb0d',
        username: 'angryzebra688',
        password: 'burns',
        salt: 'VQOACCZQ',
        md5: 'ff7dccc93b9448f0ae64e7bfce27431a',
        sha1: '12e204979f5aafdc077f50c8735da50b40b16218',
        sha256: '219e95dd2ccfda12198795668bc5e04248cdad3c390b58f8aa73950405d0f125'
      },
      dob: {
        date: '1951-01-27T07:27:34.651Z',
        age: 71
      },
      registered: {
        date: '2007-05-04T06:14:26.590Z',
        age: 15
      },
      phone: '031-109-9708',
      cell: '081-075-0278',
      id: {
        name: 'PPS',
        value: '0173075T'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/88.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/88.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/88.jpg'
      },
      nat: 'IE'
    },
    {
      gender: 'male',
      name: {
        title: 'Mrs',
        first: 'Cherry',
        last: 'Red'
      },
      location: {
        street: {
          number: 4439,
          name: 'George Street'
        },
        city: 'Carlow',
        state: 'Kerry',
        country: 'Ireland',
        postcode: 10108,
        coordinates: {
          latitude: '-1.7031',
          longitude: '-143.0373'
        },
        timezone: {
          offset: '+6:00',
          description: 'Almaty, Dhaka, Colombo'
        }
      },
      email: 'perry.weaver@example.com',
      login: {
        uuid: 'cfc73260-caa6-477d-a20f-a14e410ffb0d',
        username: 'angryzebra688',
        password: 'burns',
        salt: 'VQOACCZQ',
        md5: 'ff7dccc93b9448f0ae64e7bfce27431a',
        sha1: '12e204979f5aafdc077f50c8735da50b40b16218',
        sha256: '219e95dd2ccfda12198795668bc5e04248cdad3c390b58f8aa73950405d0f125'
      },
      dob: {
        date: '1951-01-27T07:27:34.651Z',
        age: 71
      },
      registered: {
        date: '2007-05-04T06:14:26.590Z',
        age: 15
      },
      phone: '031-109-9708',
      cell: '081-075-0278',
      id: {
        name: 'PPS',
        value: '0173075T'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/88.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/88.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/88.jpg'
      },
      nat: 'IE'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
