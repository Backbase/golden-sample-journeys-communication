import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationJourneyNavigationExtras } from '@backbase/destination-journey';
import { SourceJourneyModule, ISourceJourneyEventService } from '@backbase/source-journey';

export class EventService implements ISourceJourneyEventService {

  constructor(readonly router: Router) {}

  talk(id: string) {
    this.router.navigate(['dest-journey'], {state: <DestinationJourneyNavigationExtras>{
      identifier: id,
      type: 'Type1',
    }});
  }
}
@NgModule({
  declarations: [],
  imports: [SourceJourneyModule],
  providers: [
    {
      provide: ISourceJourneyEventService,
      useClass: EventService,
    },
  ],
})
export class SourceJourneyBundleModule {}
