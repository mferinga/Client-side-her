import { Injectable } from '@angular/core';
import { Themepark } from './themepark.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeparkService {
  themeParks: Themepark[] = [
    {
      id: 1,
      name: 'Efteling',
      description: 'Fairytale themed park',
      price: 47.99,
      FamilyFocussed: true,
      Address: 'Europalaan 1, Kaatsheuvel',
    },
    {
      id: 2,
      name: 'Walibi',
      description: 'Thrill rides',
      price: 39.99,
      FamilyFocussed: false,
      Address: 'Spijkweg 30, Biddinghuizen',
    },
    {
      id: 3,
      name: 'Duinrell',
      description: 'Waterpark',
      price: 29.99,
      FamilyFocussed: true,
      Address: 'Duinrell 1, Wassenaar',
    },
    {
      id: 4,
      name: 'Slagharen',
      description: 'Western themed park',
      price: 29.99,
      FamilyFocussed: true,
      Address: 'Zwarte Dijk 37, Slagharen',
    },
    {
      id: 5,
      name: 'Toverland',
      description: 'Magic themed park',
      price: 35.99,
      FamilyFocussed: true,
      Address: 'Toverlaan 2, Sevenum',
    },
    {
      id: 6,
      name: 'Phantasialand',
      description: 'German theme park',
      price: 49.99,
      FamilyFocussed: false,
      Address: 'Berggeiststraße 31-41, Brühl',
    },
    {
      id: 7,
      name: 'Movie Park Germany',
      description: 'Movie themed park',
      price: 39.99,
      FamilyFocussed: true,
      Address: 'Warner-Allee 1, Bottrop',
    },
    {
      id: 8,
      name: 'Disneyland Paris',
      description: 'Disney themed park',
      price: 89.99,
      FamilyFocussed: true,
      Address: 'Boulevard de Parc, Chessy',
    },
  ];
  constructor() {}

  getAllParks(): Themepark[] {
    return this.themeParks;
  }

  getParkById(id: number): Themepark {
    let filteredpark = this.themeParks.find((p) => p.id === id);
    if (filteredpark === undefined) {
      throw new Error('No park found with id ' + id);
    } else {
      return filteredpark;
    }
  }

  editPark(park: Themepark): void {
    let index = this.themeParks.findIndex((p) => p.id === park.id);
    if (index === -1) {
      throw new Error('No park found with id ' + park.id);
    } else {
      this.themeParks[index] = park;
    }
  }

  addPark(park: Themepark): void {
    this.themeParks.push(park);
  }

  deletePark(id: number): void {
    let check = this.themeParks.findIndex((p) => p.id === id);
    if (check === -1) {
      throw new Error('No park found with id ' + id);
    } else {
      this.themeParks.splice(id, 1);
    }
  }
}
