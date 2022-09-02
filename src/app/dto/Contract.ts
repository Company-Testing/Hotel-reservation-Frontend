
export class Contract {
  constructor(public id: string,
              public hotelId: string,
              public contractCreatedDate: Date,
              public contractEndDate: Date,
              public markUpValue: number) {
  }


}
