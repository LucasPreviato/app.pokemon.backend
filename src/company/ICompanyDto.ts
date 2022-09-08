import { IsNotEmpty, IsString } from "class-validator";

export class ICompanyDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    address: string;
    district: string;
    city: string;
    cep: string;
    uf: string;
    number: string;
    complement: string;
    fone: string;
    email: string;
}
