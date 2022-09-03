import {Component, Input, OnInit} from '@angular/core';
import {Contract} from "../dto/Contract";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  @Input()
  contract!:Contract;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
  }

  deleteContract() {
    this.contractService.deleteContract(this.contract).subscribe({
      next:value => {
        console.log("Successfully deleted");
      }
    })
  }
}
