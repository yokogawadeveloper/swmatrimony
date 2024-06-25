import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  plans = [
    {
      name: 'Free',
      price: 'FREE',
      description: 'forever free for individuals and small teams up to 3',
      features: ['Unlimited Access', '100MB Storage', '3 Users', 'Unlimited Tasks'],
      buttonText: 'Start for free',
      highlight: false
    },
    {
      name: 'Unlimited',
      price: '$29',
      description: 'per user/month billed yearly',
      subPrice: '$39 billed monthly',
      features: ['All in Free +', 'Unlimited Guests', 'Priority Support', 'Smart Notifications'],
      buttonText: 'Get Unlimited',
      highlight: true,
      tag: '#bestdeal'
    },
    {
      name: 'Enterprise',
      price: '$35',
      description: 'per user/month billed yearly',
      subPrice: '$45 billed monthly',
      features: ['All in Unlimited +', 'Bulk Export', 'Advanced Analytics', 'Advanced Security'],
      buttonText: 'Get Enterprise',
      highlight: false
    }
  ];

}
