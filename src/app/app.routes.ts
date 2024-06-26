import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TabsPage } from './tabs/tabs.page';
import { LoginPage } from './login/login.page';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { EdituserComponent } from './edituser/edituser.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddapartmentComponent } from './addapartment/addapartment.component';
import { TasksViewsComponent } from './tasks-views/tasks-views.component';
import { AddReminderComponent } from './add-reminder/add-reminder.component';
import { ReminderViewsComponent } from './reminder-views/reminder-views.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { SurveysViewsComponent } from  './surveys-views/surveys-views.component';
import { SearchApartmentComponent } from './search-apartment/search-apartment.component';
import { ApartmentInfoComponent } from './apartment-info/apartment-info.component';


export const routes: Routes = [
  
  
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterComponent },
  {path: 'edituser', component: EdituserComponent},
  {path: 'addTasks', component: AddTasksComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: 'addapartment', component: AddapartmentComponent},
  {path: 'tasks-views', component: TasksViewsComponent},
  {path: 'add-reminder', component: AddReminderComponent},
  {path: 'reminder-views', component: ReminderViewsComponent},
  {path: 'add-survey', component: AddSurveyComponent},
  {path: 'survey-views', component: SurveysViewsComponent},
  {path: 'Search-apartment', component: SearchApartmentComponent},
  {path: 'apartment-info', component: ApartmentInfoComponent},
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  
 


];