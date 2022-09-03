import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contract} from "../dto/Contract";
import {ContractService} from "../service/contract.service";
import {TransferService} from "../service/transfer.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  @Input()
  contract!:Contract;

  @Output() contractEvent = new EventEmitter<Contract>();

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
  }

  deleteContract() {
    this.contractService.deleteContract(this.contract).subscribe({
      next:value => {
        console.log("Successfully Delete");
      }
    })
  }

  updateContract() {
    console.log(this.contract);
    // this.contractService.updateContract(this.contract).subscribe({
    //   next:value=>{
    //     console.log("Successfully Updated");
    //   }
    // })
  }

  sendSelectedContract(){
    this.contractEvent.emit(this.contract);
  }
}
