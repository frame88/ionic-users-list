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
        thumbnail: 'data:image/jpeg;base64,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'
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
        title: 'Sir',
        first: 'Michael',
        last: 'Schumacher'
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
        thumbnail: 'https://www.sportitalia.it/wp-content/uploads/2022/10/Michael-Schumacher-durante-una-vittoria-con-la-Ferrari-1.jpg'
      },
      nat: 'IE'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
