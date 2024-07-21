import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Profile {
  name: string;
  age: number;
  profession: string;
  location: string;
  showDetails: boolean;
  imageUrl: string;
}

@Component({
  selector: 'app-highprofile',
  templateUrl: './highprofile.component.html',
  styleUrls: ['./highprofile.component.scss']
})
export class HighprofileComponent {
  profiles: Profile[] = [
    {
      name: 'John Doe',
      age: 30,
      profession: 'Engineer',
      location: 'New York',
      showDetails: false,
      imageUrl: 'https://i.imgur.com/M8InLof.jpg'
    },
    {
      name: 'Jane Smith',
      age: 28,
      profession: 'Designer',
      location: 'San Francisco',
      showDetails: false,
      imageUrl: 'https://i.imgur.com/rwj3FT2.jpg'
    },
    {
      name: 'Alice Johnson',
      age: 35,
      profession: 'Architect',
      location: 'Chicago',
      showDetails: false,
      imageUrl: 'https://i.imgur.com/p7vwgKj.jpg'
    },
    {
      name: 'Bob Brown',
      age: 40,
      profession: 'Doctor',
      location: 'Los Angeles',
      showDetails: false,
      imageUrl: 'https://via.placeholder.com/200'
    },
    {
      name: 'Charlie Davis',
      age: 32,
      profession: 'Lawyer',
      location: 'Houston',
      showDetails: false,
      imageUrl: 'https://i.imgur.com/M8InLof.jpg'
    }
  ];

  constructor(private router: Router) { }

  toggleDetails(profile: any) {
    profile.showDetails = !profile.showDetails;
  }

  viewFullBio(profile: Profile) {
    this.router.navigate(['/profile']);
  }
}
