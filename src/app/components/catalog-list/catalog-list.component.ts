import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DeepObject } from '../models/DeepObject';
import { CatalogingMappingService } from '../service/cataloging-mapping.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent {

  dataCatalogList: DeepObject[] = []

  constructor(public service: CatalogingMappingService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(): void {
    this.service.findAllCatalogingList()
      .subscribe(res => {
        this.dataCatalogList = res
      })
  }
}