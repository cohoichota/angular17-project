import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { MediaRoutingModule } from '@app/modules/uikit/media/media-routing.module';
import { MediaComponent } from '@app/modules/uikit/media/component/media.component';

@NgModule({
  imports: [
    CommonModule,
    MediaRoutingModule,
    ButtonModule,
    ImageModule,
    GalleriaModule,
    CarouselModule,
  ],
  declarations: [MediaComponent],
})
export class MediaModule {}
