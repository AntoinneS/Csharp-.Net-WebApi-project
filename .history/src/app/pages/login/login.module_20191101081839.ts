import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
 import { routing } from './login.routing'; 
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
          SharedModule,
          FormsModule,
          //  ToastrService,
            ReactiveFormsModule,
          routing
    ],
    declarations: [LoginComponent]
  })
export class LoginModule {}
