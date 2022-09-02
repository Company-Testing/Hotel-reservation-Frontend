import {Component, Input, OnInit} from '@angular/core';
import {Contract} from "../dto/Contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  @Input()
  contract!:Contract;

  constructor() { }

  ngOnInit(): void {
  }

}
