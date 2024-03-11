import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EchelonDto} from './Echelon.model';
import {EmployeDto} from '../commun/Employe.model';

export class AvancementDto extends BaseDto{

    public ref: string;

    public salaireAjoute: null | number;

    public employe: EmployeDto ;
    public echelon: EchelonDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.salaireAjoute = null;
        this.employe = new EmployeDto() ;

        }

}
