import {Component, OnInit} from '@angular/core';
import {MatDatepicker} from "@angular/material/datepicker";
import {Contract} from "../dto/Contract";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-contract-input',
  templateUrl: './contract-input.component.html',
  styleUrls: ['./contract-input.component.scss']
})
export class ContractInputComponent implements OnInit {

  constructor(private contractService: ContractService  ) { }

  ngOnInit(): void {
  }

  addContract(contractId: HTMLInputElement,hotelId: HTMLInputElement,  markupValue: HTMLInputElement, startingDate: MatDatepicker<any>, endingDate: MatDatepicker<any>):void{
    /*console.log(contractId.value);
    console.log(markupValue.value);
    let contractStarter = startingDate.datepickerInput.getStartValue();
    let contractEnder = endingDate.datepickerInput.getStartValue();
    console.log("Starting date Year: "+contractStarter?.getFullYear());
    console.log("Starting date Month: "+contractStarter?.getMonth());
    console.log("Starting date Date: "+contractStarter?.getDate());
    console.log("Starting date Year: "+contractEnder?.getFullYear());
    console.log("Starting date Month: "+(contractEnder?.getMonth()));
    console.log("Starting date Date: "+contractEnder?.getDate());*/

    let contract = new Contract(contractId.value,hotelId.value, startingDate.datepickerInput.getStartValue(), endingDate.datepickerInput.getStartValue(), parseFloat(markupValue.value))
    /*console.log(contract.id,contract.hotelId, contract.markUpValue, contract.contractCreatedDate, contract.contractEndDate);*/

    this.contractService.saveContract(contract).subscribe({
      next:value => {
        hotelId.value="";
        contractId.value = "";
        startingDate.select(undefined);
        endingDate.select(undefined);
        markupValue.value="";
      }
    })
  }
}
