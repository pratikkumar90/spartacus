import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  CurrencyService,
  I18nModule,
  UrlModule,
  OrgUnitService,
} from '@spartacus/core';
import { UnitAddressFormComponent } from './unit-address-form.component';
import { FormErrorsModule } from '../../../../shared/components/form/form-errors/form-errors.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    UrlModule,
    I18nModule,
    ReactiveFormsModule,
    FormErrorsModule,
  ],
  declarations: [UnitAddressFormComponent],
  exports: [UnitAddressFormComponent],
  providers: [CurrencyService, OrgUnitService],
  entryComponents: [UnitAddressFormComponent],
})
export class UnitAddressFormModule {}