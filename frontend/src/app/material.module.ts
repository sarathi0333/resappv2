
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    imports: [BrowserAnimationsModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule],
    exports: [BrowserAnimationsModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule]
})
export class MaterialModule { }