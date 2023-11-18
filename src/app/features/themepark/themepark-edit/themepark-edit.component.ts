import { Component } from '@angular/core';
import { ThemeparkService } from '../themepark.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Themepark } from '../themepark.model';

@Component({
  selector: 'app-themepark-edit',
  templateUrl: './themepark-edit.component.html',
  styleUrls: ['./themepark-edit.component.css'],
})
export class ThemeparkEditComponent {
  parkId: number | undefined | null = null;
  park: Themepark | undefined | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ThemeparkService: ThemeparkService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.parkId = Number(params.get('id'));
      if (this.parkId) {
        this.park = this.ThemeparkService.getParkById(this.parkId);
      } else {
        this.park = new Themepark();
      }
    });
  }

  save(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
