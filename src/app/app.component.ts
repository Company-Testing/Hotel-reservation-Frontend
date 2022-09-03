import {Component, OnInit, ViewChild} from '@angular/core';
import {Contract} from "./dto/Contract";
import {ContractService} from "./service/contract.service";
import {ContractInputComponent} from "./contract-input/contract-input.component";
import {MatDatepicker} from "@angular/material/datepicker";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  contracts: Array<Contract> = [];
  selectedContract!:Contract;

  @ViewChild('contractInputComponent') contractInputComponent!: ContractInputComponent;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    /*let contractOne = new Contract("CON001", "H002", new Date(2022,1),new Date(2022,2),25.03);
    let contractTwo = new Contract("CON002", "H002", new Date(2023,1),new Date(2045,2),15.53);
    this.contracts.push(contractOne);
    this.contracts.push(contractTwo);*/
    this.contractService.getAllContracts().subscribe({
      next:contracts=>this.contracts = contracts
    });
  }

  receiveContract($event: Contract) {
    this.selectedContract = $event;
    this.contractInputComponent.contractId.nativeElement.value = this.selectedContract.id;
    this.contractInputComponent.hotelId.nativeElement.value = this.selectedContract.hotelId;
    this.contractInputComponent.markupValue.nativeElement.value = this.selectedContract.markUpValue;
  }
}
