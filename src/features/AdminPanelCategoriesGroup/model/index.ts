import { createEffect, restore, sample } from "effector";
import { adminCategoryGroupApi, categoriesApi } from "shared/api/api.instances";
import {
  CreateCategoryGroupDto,
  UpdateCategoryGroupDto,
} from "../../../shared/openapi";

export const getCategoriesFx = createEffect(
  async (params?: { parent?: number; name?: string }) => {
    const response = await categoriesApi.getCategories(params?.name);
    return response.data;
  }
);

export const $categories = restore(getCategoriesFx.doneData, null);

export const createCategoryGroupFx = createEffect(
  async (data: CreateCategoryGroupDto) => {
    const response = await adminCategoryGroupApi.adminCreateCategoryGroup(data);
    return response.data;
  }
);

export const updateCategoryGroupFx = createEffect(
  async (data: UpdateCategoryGroupDto) => {
    const response = await adminCategoryGroupApi.adminUpdateCategoryGroup(data);
    return response.data;
  }
);

export const deleteCategoryGroupFx = createEffect(async (id: number) => {
  const response = await adminCategoryGroupApi.adminDeleteCategoryGroup(id);
  return response.data;
});
