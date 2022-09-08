import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ICompany } from './ICompany';
import { ICompanyDto } from './ICompanyDto';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService){

    }

    @Get()
    findAll(){
       return this.companyService.findAll();
    }
    @Get(":id")
    findById(@Param("id", ParseIntPipe) id){
        return this.companyService.findById(id).catch((err)=>{
            throw new NotFoundException(err.message)
        });
    }
    @Post()
    create(@Body() bodyDto: ICompanyDto){
        return this.companyService.create( bodyDto )
    }
    @Put(":id")
    update(@Param("id", ParseIntPipe) id ,@Body()bodyDto: ICompanyDto){
        return this.companyService.update(id, bodyDto).catch((err)=>{
            throw new NotFoundException(err.message)
        });
    }
    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id){
       return this.companyService.delete(id).catch((err)=>{
        throw new NotFoundException(err.message)
    });
    }
}

   