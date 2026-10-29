import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminTemplate } from './admin-template/admin-template';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatChipTrailingIcon } from '@angular/material/chips';
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenavContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatDivider, MatListItem, MatNavList } from '@angular/material/list';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Students } from './students/students';
import { Payments } from './payments/payments';
import { LoadPayments } from './load-payments/load-payments';
import { LoadStudents } from './load-students/load-students';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
} from '@angular/material/card';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatFormField, MatInput, MatInputModule, MatLabel } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Authentication } from './services/authentication';
import { AuthGuard } from './guards/auth-guard';
import { AuthorizationGuard } from './guards/authorization-guard';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { StudentDetails } from './student-details/student-details';
import { NewPayment } from './new-payment/new-payment';
import {MatDatepickerInput, MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatSelect, MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    App,
    AdminTemplate,
    Home,
    Profile,
    Login,
    Dashboard,
    Students,
    Payments,
    LoadPayments,
    LoadStudents,
    StudentDetails,
    NewPayment,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconButton,
    MatMenuModule,
    MatMenuTrigger,
    MatIconModule,
    MatDrawerContainer,
    MatDrawer,
    MatSidenavModule,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSort,
    MatSortHeader,
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideNativeDateAdapter(), {provide : MAT_DATE_LOCALE, useValue : 'fr-FR'} ,  Authentication, AuthGuard, AuthorizationGuard],
  bootstrap: [App],
})
export class AppModule {}
