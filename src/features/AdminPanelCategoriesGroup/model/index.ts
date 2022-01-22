import { createEffect, restore, sample } from "effector";
import {
  categoriesService,
  ICreateCategoryData,
  IGetCategoriesParams,
} from "../../../shared/api/categories";

export const getCategoriesFx = createEffect(
  async (params: IGetCategoriesParams) => {
    const response = await categoriesService.getCategories(params);
    return response.data;
  }
);

export const $categories = restore(getCategoriesFx.doneData, []);

export const createCategoryFx = createEffect(
  async (data: ICreateCategoryData) => {
    const response = await categoriesService.createCategory(data);
    return response.data;
  }
);

sample({
  source: createCategoryFx.doneData,
  fn: () => ({}),
  target: getCategoriesFx,
});
