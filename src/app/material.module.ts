import { NgModule } from "@angular/core";
import { 
    MatButtonModule, 
    MatListModule, 
    MatSliderModule,
    MatIconModule ,
    MatToolbarModule,
} from '@angular/material';

const importsExports = [ 
    MatButtonModule, 
    MatListModule, 
    MatSliderModule, 
    MatIconModule,
    MatToolbarModule,
];

@NgModule({
    imports: importsExports,
    exports: importsExports
})
export class MaterialModule {

}