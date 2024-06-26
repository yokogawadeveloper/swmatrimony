import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://i.imgur.com/FQBrQnH.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Chief Marketing Officer',
      image: 'https://i.imgur.com/FQBrQnH.jpg'
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Developer',
      image: 'https://i.imgur.com/FQBrQnH.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
