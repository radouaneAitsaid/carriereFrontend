import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EmployeAdminService} from 'src/app/controller/service/admin/commun/EmployeAdmin.service';
import {EmployeDto} from 'src/app/controller/model/commun/Employe.model';
import {EmployeCriteria} from 'src/app/controller/criteria/commun/EmployeCriteria.model';
@Component({
  selector: 'app-employe-create-admin',
  templateUrl: './employe-create-admin.component.html'
})
export class EmployeCreateAdminComponent extends AbstractCreateController<EmployeDto, EmployeCriteria, EmployeAdminService>  implements OnInit {



   private _validEmployeRef = true;
   private _validEmployeUsername = true;
   private _validEmployeNom = true;

    constructor( private employeService: EmployeAdminService ) {
        super(employeService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validEmployeRef = value;
        this.validEmployeUsername = value;
        this.validEmployeNom = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEmployeRef();
        this.validateEmployeUsername();
        this.validateEmployeNom();
    }

    public validateEmployeRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEmployeRef = false;
        } else {
            this.validEmployeRef = true;
        }
    }
    public validateEmployeUsername(){
        if (this.stringUtilService.isEmpty(this.item.username)) {
        this.errorMessages.push('Username non valide');
        this.validEmployeUsername = false;
        } else {
            this.validEmployeUsername = true;
        }
    }
    public validateEmployeNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
        this.errorMessages.push('Nom non valide');
        this.validEmployeNom = false;
        } else {
            this.validEmployeNom = true;
        }
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



}
