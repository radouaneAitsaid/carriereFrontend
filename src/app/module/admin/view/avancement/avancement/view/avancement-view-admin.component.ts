import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AvancementAdminService} from 'src/app/controller/service/admin/avancement/AvancementAdmin.service';
import {AvancementDto} from 'src/app/controller/model/avancement/Avancement.model';
import {AvancementCriteria} from 'src/app/controller/criteria/avancement/AvancementCriteria.model';

import {EchelonDto} from 'src/app/controller/model/avancement/Echelon.model';
import {EchelonAdminService} from 'src/app/controller/service/admin/avancement/EchelonAdmin.service';
import {EmployeDto} from 'src/app/controller/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/controller/service/admin/commun/EmployeAdmin.service';
@Component({
  selector: 'app-avancement-view-admin',
  templateUrl: './avancement-view-admin.component.html'
})
export class AvancementViewAdminComponent extends AbstractViewController<AvancementDto, AvancementCriteria, AvancementAdminService> implements OnInit {


    constructor(private avancementService: AvancementAdminService, private echelonService: EchelonAdminService, private employeService: EmployeAdminService){
        super(avancementService);
    }

    ngOnInit(): void {
    }


    get echelon(): EchelonDto {
       return this.echelonService.item;
    }
    set echelon(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelons(): Array<EchelonDto> {
       return this.echelonService.items;
    }
    set echelons(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get employe(): EmployeDto {
       return this.employeService.item;
    }
    set employe(value: EmployeDto) {
        this.employeService.item = value;
    }
    get employes(): Array<EmployeDto> {
       return this.employeService.items;
    }
    set employes(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }


}
