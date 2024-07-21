import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Profile {
  id: string;
  name: string;
  age: number;
  height: string;
  religion: string;
  caste: string;
  location: string;
  imageUrl: string;
  about: string;
  education: string;
  career: string;
  family: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile !: Profile | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const profileId = this.route.snapshot.paramMap.get('id');
    // Fetch the profile details based on profileId
    this.profile = this.getProfileById(profileId);
  }

  getProfileById(id: string | null): Profile | undefined {
    // Replace with real data fetching logic
    const profiles: Profile[] = [
      {
        id: 'WEB16662446HNM',
        name: 'John Doe',
        age: 33,
        height: '182 cm - 6 Ft',
        religion: 'Hindu',
        caste: 'Nair',
        location: 'Bangalore',
        imageUrl: 'profile-image-url.jpg',
        about: 'He is a leading...',
        education: "Bachelor's in Engineering from XYZ University",
        career: 'Software Engineer at ABC Corp',
        family: 'Father: Retired Government Officer, Mother: Homemaker',
        email: 'example@example.com',
        phone: '+91 1234567890'
      },
      // Add more profiles here...
    ];

    return profiles.find(profile => profile.id === id);
  }

}
