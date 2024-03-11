import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EchelonAdminService} from 'src/app/controller/service/admin/avancement/EchelonAdmin.service';
import {EchelonDto} from 'src/app/controller/model/avancement/Echelon.model';
import {EchelonCriteria} from 'src/app/controller/criteria/avancement/EchelonCriteria.model';


import {EchelleDto} from 'src/app/controller/model/avancement/Echelle.model';
import {EchelleAdminService} from 'src/app/controller/service/admin/avancement/EchelleAdmin.service';

@Component({
  selector: 'app-echelon-edit-admin',
  templateUrl: './echelon-edit-admin.component.html'
})
export class EchelonEditAdminComponent extends AbstractEditController<EchelonDto, EchelonCriteria, EchelonAdminService>   implements OnInit {


    private _validEchelonRef = true;
    private _validEchelonLibelle = true;

    private _validEchelleRef = true;
    private _validEchelleLibelle = true;



    constructor( private echelonService: EchelonAdminService , private echelleService: EchelleAdminService) {
        super(echelonService);
    }

    ngOnInit(): void {
        this.echelle = new EchelleDto();
        this.echelleService.findAll().subscribe((data) => this.echelles = data);
    }


    public override setValidation(value: boolean){
        this.validEchelonRef = value;
        this.validEchelonLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEchelonRef();
        this.validateEchelonLibelle();
    }
    public validateEchelonRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validEchelonRef = false;
        } else {
            this.validEchelonRef = true;
        }
    }
    public validateEchelonLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEchelonLibelle = false;
        } else {
            this.validEchelonLibelle = true;
        }
    }



   public async openCreateEchelle(echelle: string) {
        const isPermistted = await this.roleService.isPermitted('Echelle', 'edit');
        if (isPermistted) {
             this.echelle = new EchelleDto();
             this.createEchelleDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get echelle(): EchelleDto {
       return this.echelleService.item;
   }
  set echelle(value: EchelleDto) {
        this.echelleService.item = value;
   }
   get echelles(): Array<EchelleDto> {
        return this.echelleService.items;
   }
   set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
   }
   get createEchelleDialog(): boolean {
       return this.echelleService.createDialog;
   }
  set createEchelleDialog(value: boolean) {
       this.echelleService.createDialog= value;
   }


    get validEchelonRef(): boolean {
        return this._validEchelonRef;
    }
    set validEchelonRef(value: boolean) {
        this._validEchelonRef = value;
    }
    get validEchelonLibelle(): boolean {
        return this._validEchelonLibelle;
    }
    set validEchelonLibelle(value: boolean) {
        this._validEchelonLibelle = value;
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
