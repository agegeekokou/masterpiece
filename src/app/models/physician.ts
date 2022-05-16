export class Physician {
    lastname: string;
    firstname: string;
    specialite: string;
    adresse: string;
    siret: number;

    constructor(paramLastname: string, paramFirstname: string, paramSpecialite: string, paramAdresse: string, paramSiret: number) {
        this.lastname = paramLastname;
        this.firstname = paramFirstname;
        this.specialite = paramSpecialite;
        this.adresse = paramAdresse;
        this.siret = paramSiret;
    }
}
