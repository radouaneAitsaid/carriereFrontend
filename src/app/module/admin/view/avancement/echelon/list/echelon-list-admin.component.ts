import {Component, OnInit} from '@angular/core';
import {EchelonAdminService} from 'src/app/controller/service/admin/avancement/EchelonAdmin.service';
import {EchelonDto} from 'src/app/controller/model/avancement/Echelon.model';
import {EchelonCriteria} from 'src/app/controller/criteria/avancement/EchelonCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EchelleDto} from 'src/app/controller/model/avancement/Echelle.model';
import {EchelleAdminService} from 'src/app/controller/service/admin/avancement/EchelleAdmin.service';


@Component({
  selector: 'app-echelon-list-admin',
  templateUrl: './echelon-list-admin.component.html'
})
export class EchelonListAdminComponent extends AbstractListController<EchelonDto, EchelonCriteria, EchelonAdminService>  implements OnInit {

    override fileName = 'Echelon';


    echelles: Array<EchelleDto>;


    constructor( private echelonService: EchelonAdminService  , private echelleService: EchelleAdminService) {
        super(echelonService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Echelon').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEchelle();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'salaire', header: 'Salaire'},
            {field: 'echelle?.libelle', header: 'Echelle'},
        ];
    }


    public async loadEchelle(){
       this.echelleService.findAllOptimized().subscribe(echelles => this.echelles = echelles, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Salaire': e.salaire ,
                'Echelle': e.echelle?.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Salaire Min': this.criteria.salaireMin ? this.criteria.salaireMin : environment.emptyForExport ,
            'Salaire Max': this.criteria.salaireMax ? this.criteria.salaireMax : environment.emptyForExport ,
        //'Echelle': this.criteria.echelle?.libelle ? this.criteria.echelle?.libelle : environment.emptyForExport ,
        }];
      }
}
