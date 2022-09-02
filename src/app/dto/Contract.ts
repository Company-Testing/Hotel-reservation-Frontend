import {MatDatepickerControl} from "@angular/material/datepicker/datepicker-base";

export class Contract{
  constructor(public contractId: string,
              public markupValue: number,
              public contractStartingDate: MatDatepickerControl<Date>,
              public contractEndingDate: MatDatepickerControl<Date>) {
  }
}
