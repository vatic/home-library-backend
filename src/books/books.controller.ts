import { Controller, Get, Param } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  findAll() {
    return { msg: 'This action returns all books' };
  }

  @Get(':id')
  findOne(@Param() params) {
    return { msg: `This action returns a ${params.id} book` };
  }
}
