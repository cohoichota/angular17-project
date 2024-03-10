import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private primengConfig: PrimeNGConfig
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
