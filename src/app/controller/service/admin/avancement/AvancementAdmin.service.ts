import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {AvancementDto} from 'src/app/controller/model/avancement/Avancement.model';
import {AvancementCriteria} from 'src/app/controller/criteria/avancement/AvancementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class AvancementAdminService extends AbstractService<AvancementDto, AvancementCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/avancement/');
    }

    public constrcutDto(): AvancementDto {
        return new AvancementDto();
    }

    public constrcutCriteria(): AvancementCriteria {
        return new AvancementCriteria();
    }
}
