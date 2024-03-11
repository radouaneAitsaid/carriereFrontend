import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EchelleDto} from 'src/app/controller/model/avancement/Echelle.model';
import {EchelleCriteria} from 'src/app/controller/criteria/avancement/EchelleCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EchelleAdminService extends AbstractService<EchelleDto, EchelleCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/echelle/');
    }

    public constrcutDto(): EchelleDto {
        return new EchelleDto();
    }

    public constrcutCriteria(): EchelleCriteria {
        return new EchelleCriteria();
    }
}
