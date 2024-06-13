import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { WorkField } from './entities/work-field.entity';
import { FindOptions } from 'sequelize/types/model';

@Injectable()
export class WorkFieldRepository {
  constructor(
    @InjectModel(WorkField)
    private readonly workFieldModel: typeof WorkField,
  ) {}

  autocomplete(search?: string) {
    const searchParams: FindOptions = {};

    if (search) {
      searchParams.where = {
        title: {
          [Op.iLike]: `%${search}%`,
        },
      };
    }

    return this.workFieldModel.findAll(searchParams);
  }
}
