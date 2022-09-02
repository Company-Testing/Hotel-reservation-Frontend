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

  addContract(contractId: HTMLInputElement,hotelId: HTMLInputElement,  markupValue: HTMLInputElement, startingDate: MatDatepicker<any>, endingDate: MatDatepicker<any>){
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

    let contract = new Contract(contractId.value,hotelId.value, parseInt(markupValue.value), startingDate.datepickerInput, endingDate.datepickerInput)
    console.log(contract.contractId,contract.hotelId, contract.markupValue, contract.contractStartingDate.getStartValue(), contract.contractEndingDate.getStartValue());
  }
}
