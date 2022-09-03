import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contract as ContractDTO} from "../dto/Contract";
import {map, Observable, Subject} from "rxjs";

@Injectable()
export class ContractService {

  private readonly CONTRACT_API_ENDPOINT = `http://localhost:8080/hotelReservations/api/v1/contracts`;
  private contracts: Array<ContractDTO> = [];
  private subject = new Subject<Array<ContractDTO>>();


  constructor(@Inject(HttpClient)private httpService : HttpClient) {
    // if(this.contracts.length === 0){
    //   this.httpService.get<Array<ContractDTO>>(this.CONTRACT_API_ENDPOINT).pipe(map(contracts=>this.contracts = contracts));
    // }
  }

  saveContract(contract: ContractDTO):Observable<boolean>{
    return this.httpService.post<ContractDTO>(this.CONTRACT_API_ENDPOINT, contract)
      .pipe(map(n =>{
        this.contracts.push(n);
        this.subject.next(this.contracts);
        return true;
      }))
  };

  getAllContracts():Observable<Array<ContractDTO>>{
    return this.httpService.get<Array<ContractDTO>>(this.CONTRACT_API_ENDPOINT).pipe(map(contracts=>this.contracts = contracts));
    // return this.subject.asObservable();
  }


  deleteContract(contract: ContractDTO):Observable<boolean>{
    return this.httpService.delete(`${this.CONTRACT_API_ENDPOINT}/${contract.id}`).pipe(map(n=>{
      let index = this.contracts.indexOf(contract);
      this.contracts.splice(index,1);
      this.subject.next(this.contracts);
      return true;
    }))
  }

}
