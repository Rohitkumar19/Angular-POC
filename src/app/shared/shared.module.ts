import { NgModule } from '@angular/core';
import { DraggingDirective } from './directive/dragging.directive';
import { ButtonComponent } from './components/button/button.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DraggingDirective, ButtonComponent, TextboxComponent, SpinnerComponent, NavbarComponent],
  imports: [
    ReactiveFormsModule
  ],
  exports:[DraggingDirective, ButtonComponent, SpinnerComponent, TextboxComponent, NavbarComponent]
})
export class SharedModule { }
