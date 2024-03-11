import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EchelleAdminService} from 'src/app/controller/service/admin/avancement/EchelleAdmin.service';
import {EchelleDto} from 'src/app/controller/model/avancement/Echelle.model';
import {EchelleCriteria} from 'src/app/controller/criteria/avancement/EchelleCriteria.model';

@Component({
  selector: 'app-echelle-view-admin',
  templateUrl: './echelle-view-admin.component.html'
})
export class EchelleViewAdminComponent extends AbstractViewController<EchelleDto, EchelleCriteria, EchelleAdminService> implements OnInit {


    constructor(private echelleService: EchelleAdminService){
        super(echelleService);
    }

    ngOnInit(): void {
    }




}
