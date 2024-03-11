import {Component, OnInit} from '@angular/core';
import {AvancementAdminService} from 'src/app/controller/service/admin/avancement/AvancementAdmin.service';
import {AvancementDto} from 'src/app/controller/model/avancement/Avancement.model';
import {AvancementCriteria} from 'src/app/controller/criteria/avancement/AvancementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EchelonDto} from 'src/app/controller/model/avancement/Echelon.model';
import {EchelonAdminService} from 'src/app/controller/service/admin/avancement/EchelonAdmin.service';
import {EmployeDto} from 'src/app/controller/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/controller/service/admin/commun/EmployeAdmin.service';


@Component({
  selector: 'app-avancement-list-admin',
  templateUrl: './avancement-list-admin.component.html'
})
export class AvancementListAdminComponent extends AbstractListController<AvancementDto, AvancementCriteria, AvancementAdminService>  implements OnInit {

    override fileName = 'Avancement';


    employes: Array<EmployeDto>;
    echelons: Array<EchelonDto>;


    constructor( private avancementService: AvancementAdminService  , private echelonService: EchelonAdminService, private employeService: EmployeAdminService) {
        super(avancementService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Avancement').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEmploye();
                this.loadEchelon();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'employe?.nom', header: 'Employe'},
            {field: 'echelon?.libelle', header: 'Echelon'},
            {field: 'salaireAjoute', header: 'Salaire ajoute'},
        ];
    }


    public async loadEmploye(){
       this.employeService.findAllOptimized().subscribe(employes => this.employes = employes, error => console.log(error))
    }
    public async loadEchelon(){
       this.echelonService.findAllOptimized().subscribe(echelons => this.echelons = echelons, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                'Employe': e.employe?.nom ,
                'Echelon': e.echelon?.libelle ,
                 'Salaire ajoute': e.salaireAjoute ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Employe': this.criteria.employe?.nom ? this.criteria.employe?.nom : environment.emptyForExport ,
        //'Echelon': this.criteria.echelon?.libelle ? this.criteria.echelon?.libelle : environment.emptyForExport ,
            'Salaire ajoute Min': this.criteria.salaireAjouteMin ? this.criteria.salaireAjouteMin : environment.emptyForExport ,
            'Salaire ajoute Max': this.criteria.salaireAjouteMax ? this.criteria.salaireAjouteMax : environment.emptyForExport ,
        }];
      }
}
