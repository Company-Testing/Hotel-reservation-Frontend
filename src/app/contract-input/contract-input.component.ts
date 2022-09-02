import {Component, OnInit} from '@angular/core';
import {MatDatepicker} from "@angular/material/datepicker";
import {Contract} from "../dto/Contract";

@Component({
  selector: 'app-contract-input',
  templateUrl: './contract-input.component.html',
  styleUrls: ['./contract-input.component.scss']
})
export class ContractInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addContract(contractId: HTMLInputElement, markupValue: HTMLInputElement, startingDate: MatDatepicker<any>, endingDate: MatDatepicker<any>){
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

    let contract = new Contract(contractId.value, parseInt(markupValue.value), startingDate.datepickerInput, endingDate.datepickerInput)
    console.log(contract.contractId, contract.markupValue, contract.contractStartingDate.getStartValue(), contract.contractEndingDate.getStartValue());
  }
}
