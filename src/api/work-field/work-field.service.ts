import { Injectable } from '@nestjs/common';
import { WorkFieldRequestDto } from './dto/work-field.request.dto';
import { WorkFieldResponseDto } from './dto/work-field.response.dto';
import { WorkFieldRepository } from './work-field.repository';

@Injectable()
export class WorkFieldService {
  constructor(private workFieldRepository: WorkFieldRepository) {}
  async autocomplete(
    workFieldRequest: WorkFieldRequestDto,
  ): Promise<WorkFieldResponseDto[]> {
    const fields = await this.workFieldRepository.autocomplete(
      workFieldRequest.search,
    );

    return fields.map(
      (field) => new WorkFieldResponseDto(field.get({ plain: true })),
    );
  }
}
