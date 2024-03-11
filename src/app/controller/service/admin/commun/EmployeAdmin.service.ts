import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EmployeDto} from 'src/app/controller/model/commun/Employe.model';
import {EmployeCriteria} from 'src/app/controller/criteria/commun/EmployeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EmployeAdminService extends AbstractService<EmployeDto, EmployeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/employe/');
    }

    public constrcutDto(): EmployeDto {
        return new EmployeDto();
    }

    public constrcutCriteria(): EmployeCriteria {
        return new EmployeCriteria();
    }
}
