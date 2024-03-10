import { Component, OnInit } from '@angular/core';
import { PhotoService } from '@app/services/apis/photo.service';
import { ProductService } from '@app/services/apis/product.service';
import { Product } from '@app/shared/dtos/product';

@Component({
  templateUrl: './media.component.html',
})
export class MediaComponent implements OnInit {
  products!: Product[];

  images!: any[];

  galleriaResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    private productService: ProductService,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.photoService.getImages().then((images) => {
      this.images = images;
    });
  }
}
