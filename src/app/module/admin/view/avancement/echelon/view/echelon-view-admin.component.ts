import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EchelonAdminService} from 'src/app/controller/service/admin/avancement/EchelonAdmin.service';
import {EchelonDto} from 'src/app/controller/model/avancement/Echelon.model';
import {EchelonCriteria} from 'src/app/controller/criteria/avancement/EchelonCriteria.model';

import {EchelleDto} from 'src/app/controller/model/avancement/Echelle.model';
import {EchelleAdminService} from 'src/app/controller/service/admin/avancement/EchelleAdmin.service';
@Component({
  selector: 'app-echelon-view-admin',
  templateUrl: './echelon-view-admin.component.html'
})
export class EchelonViewAdminComponent extends AbstractViewController<EchelonDto, EchelonCriteria, EchelonAdminService> implements OnInit {


    constructor(private echelonService: EchelonAdminService, private echelleService: EchelleAdminService){
        super(echelonService);
    }

    ngOnInit(): void {
    }


    get echelle(): EchelleDto {
       return this.echelleService.item;
    }
    set echelle(value: EchelleDto) {
        this.echelleService.item = value;
    }
    get echelles(): Array<EchelleDto> {
       return this.echelleService.items;
    }
    set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
    }


}
