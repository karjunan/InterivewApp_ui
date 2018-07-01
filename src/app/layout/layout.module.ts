import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { InterviewerModule } from './interviewer/interviewer.module';
import { InterviewerGuard } from '../shared/guard/interviewer.guard';
import { RecruiterGuard } from '../shared/guard/recruiter.guard';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent,
                   HeaderComponent,
                   SidebarComponent],
    providers: [InterviewerGuard,RecruiterGuard],
})
export class LayoutModule {}
