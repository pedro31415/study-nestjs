import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put} from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course-dto';
import { UpdateCourseDTO } from './dto/update-course-dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){}
    
    @Get('list')
    findAll(){
        return this.coursesService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: number){
        const course = this.coursesService.findOne(id);
        if(!course){
            throw new HttpException(`Courses ID ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return course;
    }

    @Post()
    create(@Body() createCourseDTO: CreateCourseDTO) { 
        return this.coursesService.create(createCourseDTO);
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() updateCourseDTO: UpdateCourseDTO) {
        return this.coursesService.update(id,updateCourseDTO);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.coursesService.remove(id);
    }

}
