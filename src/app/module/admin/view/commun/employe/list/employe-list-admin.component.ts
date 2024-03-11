import {Component, OnInit} from '@angular/core';
import {EmployeAdminService} from 'src/app/controller/service/admin/commun/EmployeAdmin.service';
import {EmployeDto} from 'src/app/controller/model/commun/Employe.model';
import {EmployeCriteria} from 'src/app/controller/criteria/commun/EmployeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-employe-list-admin',
  templateUrl: './employe-list-admin.component.html'
})
export class EmployeListAdminComponent extends AbstractListController<EmployeDto, EmployeCriteria, EmployeAdminService>  implements OnInit {

    override fileName = 'Employe';




    constructor( private employeService: EmployeAdminService  ) {
        super(employeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Employe').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'username', header: 'Username'},
            {field: 'nom', header: 'Nom'},
            {field: 'password', header: 'Password'},
            {field: 'salaire', header: 'Salaire'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Username': e.username ,
                 'Nom': e.nom ,
                 'Password': e.password ,
                 'Salaire': e.salaire ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Username': this.criteria.username ? this.criteria.username : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport ,
            'Salaire Min': this.criteria.salaireMin ? this.criteria.salaireMin : environment.emptyForExport ,
            'Salaire Max': this.criteria.salaireMax ? this.criteria.salaireMax : environment.emptyForExport ,
        }];
      }
}
