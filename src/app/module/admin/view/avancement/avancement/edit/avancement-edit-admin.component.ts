import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {AvancementAdminService} from 'src/app/controller/service/admin/avancement/AvancementAdmin.service';
import {AvancementDto} from 'src/app/controller/model/avancement/Avancement.model';
import {AvancementCriteria} from 'src/app/controller/criteria/avancement/AvancementCriteria.model';


import {EchelonDto} from 'src/app/controller/model/avancement/Echelon.model';
import {EchelonAdminService} from 'src/app/controller/service/admin/avancement/EchelonAdmin.service';
import {EmployeDto} from 'src/app/controller/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/controller/service/admin/commun/EmployeAdmin.service';

@Component({
  selector: 'app-avancement-edit-admin',
  templateUrl: './avancement-edit-admin.component.html'
})
export class AvancementEditAdminComponent extends AbstractEditController<AvancementDto, AvancementCriteria, AvancementAdminService>   implements OnInit {


    private _validAvancementRef = true;

    private _validEmployeRef = true;
    private _validEmployeUsername = true;
    private _validEmployeNom = true;
    private _validEchelonRef = true;
    private _validEchelonLibelle = true;



    constructor( private avancementService: AvancementAdminService , private echelonService: EchelonAdminService, private employeService: EmployeAdminService) {
        super(avancementService);
    }

    ngOnInit(): void {
        this.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employes = data);
        this.echelon = new EchelonDto();
        this.echelonService.findAll().subscribe((data) => this.echelons = data);
    }


    public override setValidation(value: boolean){
        this.validAvancementRef = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAvancementRef();
    }
    public validateAvancementRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validAvancementRef = false;
        } else {
            this.validAvancementRef = true;
        }
    }



   public async openCreateEchelon(echelon: string) {
        const isPermistted = await this.roleService.isPermitted('Echelon', 'edit');
        if (isPermistted) {
             this.echelon = new EchelonDto();
             this.createEchelonDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get echelon(): EchelonDto {
       return this.echelonService.item;
   }
  set echelon(value: EchelonDto) {
        this.echelonService.item = value;
   }
   get echelons(): Array<EchelonDto> {
        return this.echelonService.items;
   }
   set echelons(value: Array<EchelonDto>) {
        this.echelonService.items = value;
   }
   get createEchelonDialog(): boolean {
       return this.echelonService.createDialog;
   }
  set createEchelonDialog(value: boolean) {
       this.echelonService.createDialog= value;
   }
   get employe(): EmployeDto {
       return this.employeService.item;
   }
  set employe(value: EmployeDto) {
        this.employeService.item = value;
   }
   get employes(): Array<EmployeDto> {
        return this.employeService.items;
   }
   set employes(value: Array<EmployeDto>) {
        this.employeService.items = value;
   }
   get createEmployeDialog(): boolean {
       return this.employeService.createDialog;
   }
  set createEmployeDialog(value: boolean) {
       this.employeService.createDialog= value;
   }


    get validAvancementRef(): boolean {
        return this._validAvancementRef;
    }
    set validAvancementRef(value: boolean) {
        this._validAvancementRef = value;
    }

    get validEmployeRef(): boolean {
        return this._validEmployeRef;
    }
    set validEmployeRef(value: boolean) {
        this._validEmployeRef = value;
    }
    get validEmployeUsername(): boolean {
        return this._validEmployeUsername;
    }
    set validEmployeUsername(value: boolean) {
        this._validEmployeUsername = value;
    }
    get validEmployeNom(): boolean {
        return this._validEmployeNom;
    }
    set validEmployeNom(value: boolean) {
        this._validEmployeNom = value;
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
}
