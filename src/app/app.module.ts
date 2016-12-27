//Built-in modules
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {TopNavModule} from "./shared/topnav/topnav.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { API_BASE } from "./base/config";
import { SimpleNotificationsModule } from "angular2-notifications";
import { rootRouterConfig, appRoutingProviders } from "./app.routes";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InventoriesHomeComponent } from "./inventories/inventoriesHome/inventories-home.component";
import { UsersComponent } from './settings/users/users.component'

import { DashboardHomeModule } from "./dashboard/components/dashboardHome/dashboard-home.module";
import { InventoriesTableModule } from './inventories/inventoriesTable/inventories-table.module';
import { SettingsModule } from './settings/settings.module';
import { SettingsComponent } from './settings/settings.component';
import { SettingsHomeModule } from './settings/settingsHome/settings-home.module';
import { UserAddComponent } from './settings/users/usersAdd/user-add.component';
import { InventoriesTableComponent } from './settings/users/usersTable/users-table.component';
import { OrganizationsComponent } from './settings/organizations/organizations.component';
import { OrganizationsAddComponent } from './settings/organizations/organizationsAdd/organizations-add.component';
import { ChunkPipe } from './shared/chunk.pipe';
import { TeamsComponent } from './settings/teams/teams.component';
import { TeamEditComponent } from './settings/teams/teamEdit/team-edit.component';
import { TeamsTableComponent } from './settings/teams/teamsTable/teams-table.component';
import { TeamUsersComponent } from './settings/teams/teamsUsers/team-users.component';
import { TeamPermissionsComponent } from './settings/teams/teamPermissions/team-permissions.component'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        InventoriesTableModule,
        ReactiveFormsModule,
        SimpleNotificationsModule,
        SettingsModule,
        TopNavModule,
        HttpModule,
        DashboardHomeModule,
        NgbModule,
        SettingsHomeModule,
        RouterModule.forRoot(rootRouterConfig)
    ],

    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        InventoriesHomeComponent,
        InventoriesTableComponent,
        UsersComponent,
        UserAddComponent,
        OrganizationsComponent,
        OrganizationsAddComponent,
        ChunkPipe,
        TeamsComponent,
        TeamEditComponent,
        TeamsTableComponent,
        TeamUsersComponent,
        TeamPermissionsComponent
    ],
    providers: [appRoutingProviders, {provide: API_BASE, useValue: 'http://10.76.196.18:8010'}],
    bootstrap: [AppComponent]
})
export class AppModule {

}
