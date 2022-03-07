import { createEffect, restore, sample } from "effector";
import {
  categoriesService,
  ICreateCategoryData,
  IGetCategoriesParams,
} from "../../../shared/api/categories";
import { AdminCategoryGroupApi } from "../../../shared/openapi";
import { apiInstance } from "../../../shared/api";

const adminCategoryGroupApi = new AdminCategoryGroupApi(
  undefined,
  "https://baza-application.herokuapp.com",
  apiInstance
);

export const getCategoriesFx = createEffect(
  async (params: IGetCategoriesParams) => {
    const response = await adminCategoryGroupApi.getCreateCategoryGroup();
    return response.data;
  }
);

export const $categories = restore(getCategoriesFx.doneData, null);

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
