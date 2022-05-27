export class Physician {
    lastname: string;
    firstname: string;
    specialty: string;
    address: string;
    siret: string;

    constructor(paramLastname: string, paramFirstname: string, paramSpecialty: string, paramAdresse: string, paramSiret: string) {
        this.lastname = paramLastname;
        this.firstname = paramFirstname;
        this.specialty = paramSpecialty;
        this.address = paramAdresse;
        this.siret = paramSiret;
    }
}
