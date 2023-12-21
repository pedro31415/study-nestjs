import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){}
    
    @Get('list')
    findAll(@Res() response){
        return response.status(200).json({
            message: "Lista de cursos"
        });
    }

    @Get(":id/:name")
    findOne(@Res() response, @Param("id") id: string, @Param("name") name: string){
        return response.status(200).send(`Curso numero ${id} e o nome do curso ${name}`);
    }

    @Post()
    create(@Body() body) { 
        return body;
    }

    //exemplo usando HttpCode
    @HttpCode(204)
    @Post("exemplo")
    createEx(@Body() body) { 
        return body;
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() body) {
        console.log(body);
        return `O id atualizado -> ${id}`;
    }

    @HttpCode(204)
    @Delete(":id")
    remove(@Param("id") id: string) {
        return `O id removido -> ${id}`;
    }

}
