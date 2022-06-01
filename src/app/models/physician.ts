export class Physician {
    lastname: string;
    firstname: string;
    specialty: {id: number, name: string};
    address: string;
    siret: string;
    id: any;

    constructor(paramLastname: string, paramFirstname: string, paramSpecialty: { id: number, name: string }, paramAdresse: string, paramSiret: string, paramId: any) {
        this.lastname = paramLastname;
        this.firstname = paramFirstname;
        this.specialty = paramSpecialty;
        this.address = paramAdresse;
        this.siret = paramSiret;
        this.id = paramId;
    }
}
