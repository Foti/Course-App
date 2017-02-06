import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// custom modules
import { SharedModule } from '../shared/shared.module';

// components
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';

// pipes
import { ProductFilterPipe } from './product-filter.pipe';

// services
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';



@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', 
              canActivate: [ProductDetailGuard],
              component: ProductDetailComponent 
            },
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule {}