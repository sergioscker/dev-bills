import { Router } from 'express';

import { CategoriesController } from '../controllers/categories.controller';
import { createCategorySchema } from '../dtos/categories.dto';
import { ParamsType, validator } from '../middleware/validator.middleware';
import { CategoriesFactory } from '../factories/categories.factory';

export const categoriesRoutes = Router();

const controller = new CategoriesController(
  CategoriesFactory.getServiceInstance(),
);

categoriesRoutes.get('/', controller.index);

categoriesRoutes.post(
  '/',
  validator({
    schema: createCategorySchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);
