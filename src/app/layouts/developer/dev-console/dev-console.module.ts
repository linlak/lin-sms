import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevConsoleComponent } from './dev-console.component';
import { SharedModule } from '../../../../app/shared/shared.module';
import { DConsoleRouting } from './devconsole.routing';
import { DevConsoleHomeComponent } from './dev-console-home/dev-console-home.component';
import { MyappComponent } from './myapps/myapp/myapp.component';
import { MydomainsComponent } from './myapps/mydomains/mydomains.component';
import { DevCreateAppComponent } from './myapps/dev-create-app/dev-create-app.component';
import { DevMyAppsComponent } from './myapps/dev-my-apps/dev-my-apps.component';
import { AppHomeComponent } from './myapps/app/app-home/app-home.component';
import { AppHooksComponent } from './myapps/app/app-hooks/app-hooks.component';
import { AppMessagesComponent } from './myapps/app/app-messages/app-messages.component';
import { AppStatatisticsComponent } from './myapps/app/app-statatistics/app-statatistics.component';
import { AppSettingsComponent } from './myapps/app/app-settings/app-settings.component';
import { AppEditComponent } from './myapps/app/app-edit/app-edit.component';

@NgModule({
	declarations: [
		DevConsoleComponent,
		DevConsoleHomeComponent,
		MyappComponent,
		MydomainsComponent,
		DevCreateAppComponent,
		DevMyAppsComponent,
		AppHomeComponent,
		AppHooksComponent,
		AppMessagesComponent,
		AppStatatisticsComponent,
		AppSettingsComponent,
		AppEditComponent
	],
	imports: [CommonModule, SharedModule, DConsoleRouting]
})
export class DevConsoleModule {}
