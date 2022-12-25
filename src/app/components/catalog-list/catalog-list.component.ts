import { Component } from '@angular/core';
import { CatalogingMappingService } from '../service/cataloging-mapping.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent {

  dataCatalogList: DeepObject[] = []

  constructor(private service: CatalogingMappingService) { }

  ngOnInit(): void { }

  findAll():void {
    this.service.findAllCatalogingList()
      .subscribe((res) => {
        this.dataCatalogList = res
      })
  }
}