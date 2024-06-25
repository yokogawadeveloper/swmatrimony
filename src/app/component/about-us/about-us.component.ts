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
      image: 'assets/john-doe.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Chief Marketing Officer',
      image: 'assets/jane-smith.jpg'
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Developer',
      image: 'assets/emily-johnson.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
