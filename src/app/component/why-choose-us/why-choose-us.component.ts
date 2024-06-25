import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {

  features = [
    {
      icon: 'bi bi-headset',
      title: 'Dedicated Advisor',
      description: 'Whether you are overwhelmed by the number of matches or unsure of how to progress, your dedicated Service Advisor will help you in the process.'
    },
    {
      icon: 'bi bi-hand-index-thumb',
      title: 'Handpicked Matches',
      description: 'Based on your preferences, the best matches are handpicked and sent to you for approval after going through thousands of profiles.'
    },
    {
      icon: 'bi bi-people',
      title: 'Personal Introductions',
      description: 'Your Select Service Advisor will initiate communication with approved matches and organise meetings at a convenient time and location.'
    }
  ];

}
