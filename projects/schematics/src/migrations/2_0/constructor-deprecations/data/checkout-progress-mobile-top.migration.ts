import {
  ACTIVE_CART_SERVICE,
  CART_SERVICE,
  CHECKOUT_CONFIG,
  CHECKOUT_PROGRESS_MOBILE_TOP_COMPONENT,
  ROUTING_CONFIG_SERVICE,
  ROUTING_SERVICE,
  SPARTACUS_CORE,
  SPARTACUS_STOREFRONTLIB,
} from '../../../../shared/constants';
import { ConstructorDeprecation } from '../../../../shared/utils/file-utils';

export const CHECKOUT_PROGRESS_MOBILE_TOP_COMPONENT_MIGRATION: ConstructorDeprecation = {
  // projects/storefrontlib/src/cms-components/checkout/components/checkout-progress/checkout-progress-mobile-top/checkout-progress-mobile-top.ts
  class: CHECKOUT_PROGRESS_MOBILE_TOP_COMPONENT,
  importPath: SPARTACUS_STOREFRONTLIB,
  deprecatedParams: [
    {
      className: CHECKOUT_CONFIG,
      importPath: SPARTACUS_STOREFRONTLIB,
    },
    {
      className: ROUTING_SERVICE,
      importPath: SPARTACUS_CORE,
    },
    {
      className: CART_SERVICE,
      importPath: SPARTACUS_CORE,
    },
    {
      className: ROUTING_CONFIG_SERVICE,
      importPath: SPARTACUS_CORE,
    },
  ],
  removeParams: [
    {
      className: CART_SERVICE,
      importPath: SPARTACUS_CORE,
    },
  ],
  addParams: [
    {
      className: ACTIVE_CART_SERVICE,
      importPath: SPARTACUS_CORE,
    },
  ],
};