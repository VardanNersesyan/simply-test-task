import { Controller, Get, Query } from '@nestjs/common';
import { WorkFieldService } from './work-field.service';
import { WorkFieldRequestDto } from './dto/work-field.request.dto';
import { ItemsListResponseUtility } from '../../common/utilities/responses.utility';
import { WorkFieldResponseDto } from './dto/work-field.response.dto';

@Controller('work-field')
export class WorkFieldController {
  constructor(private readonly workFieldService: WorkFieldService) {}

  @Get('autocomplete')
  async autocomplete(@Query() workFieldRequest: WorkFieldRequestDto) {
    return new ItemsListResponseUtility<WorkFieldResponseDto>({
      success: true,
      items: await this.workFieldService.autocomplete(workFieldRequest),
    });
  }
}
