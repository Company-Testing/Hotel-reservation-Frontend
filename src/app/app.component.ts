import {Component, OnInit} from '@angular/core';
import {Contract} from "./dto/Contract";
import {ContractService} from "./service/contract.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  contracts: Array<Contract> = [];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    let contractOne = new Contract("CON001", "H002", new Date(2022,1),new Date(2022,2),25.03);
    let contractTwo = new Contract("CON002", "H002", new Date(2023,1),new Date(2045,2),15.53);
    this.contracts.push(contractOne);
    this.contracts.push(contractTwo);
  }


}
