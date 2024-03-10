import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from '@app/modules/features-routing.module';
import { CountryService } from '@app/services/apis/country.service';
import { CustomerService } from '@app/services/apis/customer.service';
import { EventService } from '@app/services/apis/event.service';
import { IconService } from '@app/services/apis/icon.service';
import { NodeService } from '@app/services/apis/node.service';
import { PhotoService } from '@app/services/apis/photo.service';
import { ProductService } from '@app/services/apis/product.service';

@NgModule({
  imports: [FeatureRoutingModule],
  providers: [
    CountryService,
    CustomerService,
    EventService,
    IconService,
    NodeService,
    PhotoService,
    ProductService,
  ],
})
export class FeaturesModule {}
