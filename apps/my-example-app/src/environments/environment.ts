import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import { Item } from '@backbase/foundation-ang/web-sdk';
import { ExternalServices } from '@backbase/foundation-ang/start';

import { Environment } from './type';

const services: ExternalServices = {};

const pageModel: Item = {
  name: 'app-container',
  properties: {},
  children: [
    {
      name: 'bb-deck-container-ang-_-48a2b14d9c5f',
      properties: {
        classId: 'DeckContainerComponent',
      },
      children: [
        {
          name: 'source-panel',
          properties: {
            classId: 'PanelContainerComponent',
            route: 'source-journey',
          },
          children: [
            {
              name: 'source-journey',
              properties: {
                classId: 'SourceJourneyBundleModule',
              },
            },
          ],
        },
        {
          name: 'dest-panel',
          properties: {
            classId: 'PanelContainerComponent',
            route: 'dest-journey',
          },
          children: [
            {
              name: 'dest-journey',
              properties: {
                classId: 'DestinationJourneyBundleModule',
              },
            },
          ],
        },
      ],
    },
  ],
};

export const environment: Environment = {
  production: false,
  mockProviders: [createMocksInterceptor()],
  bootstrap: {
    pageModel,
    services,
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
