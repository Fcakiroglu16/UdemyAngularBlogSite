import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlformatPipe} from "./urlformat.pipe";
@NgModule({
  declarations: [UrlformatPipe],
  imports: [
    CommonModule
  ],
  exports:[UrlformatPipe]
})
export class PipeModule { }
