import { Component, OnInit } from '@angular/core';
import { Well } from '../../models/well.model';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit {

  wells: Well[];
  selectedWell:  Well
  constructor() { }

  ngOnInit(): void {
    this.wells = [
      {
        name: "TestRLSWeb001",
        type: "esp",
        source: 101010101
      },
      {
        name: "TestSLPWeb002",
        type: "na",
        source: 101200101
      },
      {
        name: "TestESPWeb003",
        type: "esp",
        source: 3202021
      },
      // {
      //   name: "TestRLSWeb004",
      //   type: "ma",
      //   source: 10004321
      // },

    ]
  }

  addNewWell(newWell){
    this.wells.push(newWell)
  }

  patchWellValue(well) {
    this.selectedWell= well
  }

}
