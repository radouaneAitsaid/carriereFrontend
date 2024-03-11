import {Component, OnInit} from '@angular/core';
import {EchelleAdminService} from 'src/app/controller/service/admin/avancement/EchelleAdmin.service';
import {EchelleDto} from 'src/app/controller/model/avancement/Echelle.model';
import {EchelleCriteria} from 'src/app/controller/criteria/avancement/EchelleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-echelle-list-admin',
  templateUrl: './echelle-list-admin.component.html'
})
export class EchelleListAdminComponent extends AbstractListController<EchelleDto, EchelleCriteria, EchelleAdminService>  implements OnInit {

    override fileName = 'Echelle';




    constructor( private echelleService: EchelleAdminService  ) {
        super(echelleService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Echelle').subscribe(() => {
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
            {field: 'libelle', header: 'Libelle'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
