import { Injectable } from '@nestjs/common';
import { ICompany } from './ICompany';
import { ICompanyDto } from './ICompanyDto';

@Injectable()
export class CompanyService {
   
   
   
    private company : ICompany[] = [
        {
            id: 1,
            name: "Matriz",
            address: "Avenue Vile Ema",
            district : "Vila Ema",
            city: "São Paulo",
            cep:"03282-001",
            uf:"SP",
            number: "4512",
            complement:"Sala 23",
            fone:"(11)98303-3766",
            email:"lucaspreviato@Live.com"
        },
        {
            id: 2,
            name: "Santos",
            address: "Praia Grande",
            district : "Praia",
            city: "São Paulo",
            cep:"03282-001",
            uf:"SP",
            number: "4512",
            complement:"Sala 23",
            fone:"(11)98303-3766",
            email:"lucaspreviato@Live.com"
        },
       ];

    findAll(){
        return this.company.filter(Boolean);
    }

    async findById(id: number) {
        const company = this.company.find((unit)=> unit?.id === id)

        if(!company){
            throw Error(`Not found company ${id}`)
        }
        return company
        // return this.company.find(company => company.id === id);
    }
    create( CompanyDto: ICompanyDto) {
        const id = this.company.length + 1;
        const company: ICompany = {
            id,
            ...CompanyDto,
        };
        this.company.push(company)
        return company  ;
    }
    async update(id : number, bodyDto: ICompanyDto) {
        const index = this.company.findIndex((body : ICompany)=> body?.id === id);

        if(index < 0){
            throw Error(`Company ${id} not found`)
        }
        const company: ICompany = {
            id,
            ...bodyDto,
        };
        this.company[index] = company;
        return company;
    }
    async delete(id: number) {
        const index = this.company.findIndex((body : ICompany)=> body?.id === id);
        if(index < 0){
            throw Error(`Company ${id} not found`)
        }
        delete this.company[index];
        return true
    }
}
