import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  cards = [
    { image: 'https://i.imgur.com/OflyaGo.jpg', title: 'David Chrish', text: 'This is card 1.', star:"★★★★☆"},
    { image: 'https://i.imgur.com/OflyaGo.jpg', title: 'Kristina Bellis', text: 'This is card 2.', star: "★★★★☆" },
    { image: 'https://i.imgur.com/OflyaGo.jpg', title: 'Stephen Marlo', text: 'This is card 3.', star: "★★★★★" },
    { image: 'https://i.imgur.com/OflyaGo.jpg', title: 'Miss Braganga', text: 'This is card 4.', star: "★★★★☆" },
    { image: 'https://i.imgur.com/OflyaGo.jpg', title: 'Emily Jhon', text: 'This is card 5.', star: "★★★★☆" },
    { image: 'https://i.imgur.com/OflyaGo.jpg', title: 'Peter jack', text: 'This is card 6.', star: "★★★★☆" },
    { image: 'https://i.imgur.com/OflyaGo.jpg', title: 'Namiya Hack', text: 'This is card 7.', star: "★★★★☆" },
    { image: 'https://i.imgur.com/OflyaGo.jpg', title: 'Card 8', text: 'This is card 8.', star: "★★★★☆" },
  ];

  groupedCards: any[] = [];
  activeSlide: number = 0;

  ngOnInit(): void {
    this.groupCards();
  }

  groupCards(): void {
    const size = 4;
    for (let i = 0; i < this.cards.length; i += size) {
      this.groupedCards.push(this.cards.slice(i, i + size));
    }
  }

  prevSlide(): void {
    this.activeSlide = (this.activeSlide === 0) ? this.groupedCards.length - 1 : this.activeSlide - 1;
  }

  nextSlide(): void {
    this.activeSlide = (this.activeSlide === this.groupedCards.length - 1) ? 0 : this.activeSlide + 1;
  }

}
