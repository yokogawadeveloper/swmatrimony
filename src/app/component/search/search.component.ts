import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  profiles = [
    { name: 'John Doe', age: 25, religion: 'Christian', caste: 'General' },
    { name: 'Jane Smith', age: 27, religion: 'Buddhist', caste: 'OBC' },
    { name: 'Sam Brown', age: 29, religion: 'Christian', caste: 'SC' },
    { name: 'Manhodd', age: 25, religion: 'Christian', caste: 'General' },
    { name: 'Bakyonu', age: 27, religion: 'Buddhist', caste: 'OBC' },
    { name: 'Harry watson', age: 29, religion: 'Christian', caste: 'SC' },
    // Add more profiles as needed
  ];

  searchResults: any[] = [];

  constructor(private router: Router) { }

  onSubmit(formValues: any) {
    console.log(formValues);
    this.searchResults = this.profiles.filter(profile => {
      return profile.age >= formValues.ageMin && profile.age <= formValues.ageMax && profile.religion === formValues.religion &&
        (formValues.caste === 'Not Matters' || profile.caste === formValues.caste);
    });
  }

  chunkedResults(array: any[], chunkSize: number) {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  }

  viewFullBio() {
    this.router.navigate(['/profile']);
  }


}
