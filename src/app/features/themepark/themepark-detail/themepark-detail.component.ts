import { Component } from '@angular/core';
import { Themepark } from '../themepark.model';
import { ThemeparkService } from '../themepark.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-themepark-detail',
  templateUrl: './themepark-detail.component.html',
  styleUrls: ['./themepark-detail.component.css'],
})
export class ThemeparkDetailComponent {
  park: Themepark | undefined;
  id: number | undefined;

  constructor(
    private parkService: ThemeparkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      if (this.id) {
        this.park = this.parkService.getParkById(this.id);
      } else {
        console.log('Error: id is undefined');
      }
    });
  }
}
