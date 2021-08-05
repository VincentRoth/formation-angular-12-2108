import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {}

  title = 'formation2108';

  getEnv(): string {
    return environment.production ? 'PROD' : 'DEV';
  }

  useLang(lang: string): void {
    this.translateService.use(lang);
  }
}
