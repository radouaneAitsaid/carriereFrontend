import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EchelonDto} from 'src/app/controller/model/avancement/Echelon.model';
import {EchelonCriteria} from 'src/app/controller/criteria/avancement/EchelonCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EchelonAdminService extends AbstractService<EchelonDto, EchelonCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/echelon/');
    }

    public constrcutDto(): EchelonDto {
        return new EchelonDto();
    }

    public constrcutCriteria(): EchelonCriteria {
        return new EchelonCriteria();
    }
}
