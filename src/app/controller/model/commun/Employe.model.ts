import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EmployeDto extends BaseDto{

    public ref: string;

    public username: string;

    public nom: string;

    public password: string;

    public salaire: null | number;

    

    constructor() {
        super();

        this.ref = '';
        this.username = '';
        this.nom = '';
        this.password = '';
        this.salaire = null;

        }

}
