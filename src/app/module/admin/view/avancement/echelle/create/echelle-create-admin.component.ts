import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EchelleAdminService} from 'src/app/controller/service/admin/avancement/EchelleAdmin.service';
import {EchelleDto} from 'src/app/controller/model/avancement/Echelle.model';
import {EchelleCriteria} from 'src/app/controller/criteria/avancement/EchelleCriteria.model';
@Component({
  selector: 'app-echelle-create-admin',
  templateUrl: './echelle-create-admin.component.html'
})
export class EchelleCreateAdminComponent extends AbstractCreateController<EchelleDto, EchelleCriteria, EchelleAdminService>  implements OnInit {



   private _validEchelleRef = true;
   private _validEchelleLibelle = true;

    constructor( private echelleService: EchelleAdminService ) {
        super(echelleService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validEchelleRef = value;
        this.validEchelleLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEchelleRef();
        this.validateEchelleLibelle();
    }

    public validateEchelleRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEchelleRef = false;
        } else {
            this.validEchelleRef = true;
        }
    }
    public validateEchelleLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validEchelleLibelle = false;
        } else {
            this.validEchelleLibelle = true;
        }
    }






    get validEchelleRef(): boolean {
        return this._validEchelleRef;
    }

    set validEchelleRef(value: boolean) {
         this._validEchelleRef = value;
    }
    get validEchelleLibelle(): boolean {
        return this._validEchelleLibelle;
    }

    set validEchelleLibelle(value: boolean) {
         this._validEchelleLibelle = value;
    }



}
