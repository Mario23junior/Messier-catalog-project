import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogingMapping } from '../models/CatalogingMapping';
import { DeepObject } from '../models/DeepObject';
import { ObservationParameters } from '../models/ObservationParameters';
import { CataloginMappingService } from '../service/catalogin-mapping.service';
import { DeepObjectService } from '../service/DeepObjectService.service';
import { ObservationParametersService } from '../service/observation-parameters.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent {

  dataDeepObject: DeepObject[] = []
  dataCatalogingMapping: CatalogingMapping[] = []
  dataObservation: ObservationParameters[] = []


  constructor(
    public serviceDeepObjectService: DeepObjectService,
    public serviceCatalogin: CataloginMappingService,
    public serviceObservation: ObservationParametersService

  ) { }

  ngOnInit(): void {
    this.findAllCatalogingBase()
  }

  findAllCatalogingBase(): void {
    this.serviceDeepObjectService.findAllCatalogingList()
      .subscribe(res => {
        this.dataDeepObject = res
      })
  }

  ObservationParameters(): void {
    this.serviceObservation.findAllObservationParameters()
      .subscribe(res => {
        this.dataObservation = res
      })
  }

  CataloginMapping(): void {
    this.serviceCatalogin.findAllCatalogingMapping()
      .subscribe(res => {
        this.dataCatalogingMapping = res
      })
  }


}