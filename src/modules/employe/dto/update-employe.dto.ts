import { CreateEmployeDto } from './create-employe.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateEmployeDto extends PartialType(CreateEmployeDto) {
    
}
