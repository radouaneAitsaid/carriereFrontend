import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EmployeAdminService} from 'src/app/controller/service/admin/commun/EmployeAdmin.service';
import {EmployeDto} from 'src/app/controller/model/commun/Employe.model';
import {EmployeCriteria} from 'src/app/controller/criteria/commun/EmployeCriteria.model';

@Component({
  selector: 'app-employe-view-admin',
  templateUrl: './employe-view-admin.component.html'
})
export class EmployeViewAdminComponent extends AbstractViewController<EmployeDto, EmployeCriteria, EmployeAdminService> implements OnInit {


    constructor(private employeService: EmployeAdminService){
        super(employeService);
    }

    ngOnInit(): void {
    }




}
