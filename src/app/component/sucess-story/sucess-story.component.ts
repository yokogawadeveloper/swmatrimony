import { Component } from '@angular/core';

@Component({
  selector: 'app-sucess-story',
  templateUrl: './sucess-story.component.html',
  styleUrls: ['./sucess-story.component.scss']
})
export class SucessStoryComponent {

  couples = [
    {
      names: 'Sajid & Sonal',
      image: 'path-to-image-1.jpg',
      message: 'Marriage planning is in progress and a big thank you to Shaadi.com both of us as we have found our better half / Soul mates.'
    },
    {
      names: 'Sajid & Sonal',
      image: 'path-to-image-2.jpg',
      message: 'Marriage planning is in progress and a big thank you to Shaadi.com both of us as we have found our better half / Soul mates.'
    },
    {
      names: 'Sajid & Sonal',
      image: 'path-to-image-3.jpg',
      message: 'Marriage planning is in progress and a big thank you to Shaadi.com both of us as we have found our better half / Soul mates.'
    }
  ];

}
