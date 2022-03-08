import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from "effector";
import { adminCategoryApi, categoriesApi } from "shared/api/api.instances";
import {
  CategoryDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from "../../../shared/openapi";

export const getCategoriesFx = createEffect(
  async (params?: { name?: string }) => {
    const response = await categoriesApi.getCategories(params?.name);
    return response.data;
  }
);

export const $categories = restore(getCategoriesFx.doneData, null);

export const createAdminCategoryFx = createEffect(
  async (data: CreateCategoryDto) => {
    const response = await adminCategoryApi.adminCreateCategory(data);
    return response.data;
  }
);

export const updateAdminCategoryFx = createEffect(
  async (data: UpdateCategoryDto) => {
    const response = await adminCategoryApi.adminUpdateCategory(data);
    return response.data;
  }
);

export const deleteAdminCategoryFx = createEffect(async (id: number) => {
  const response = await adminCategoryApi.adminDeleteCategory(id);
  return response.data;
});

export const openUpdateCategoryModal = createEvent<number>();
export const closeUpdateCategoryModal = createEvent();
export const $updateCategoryModalVisibility = createStore(false)
  .on(openUpdateCategoryModal, () => true)
  .reset([closeUpdateCategoryModal, updateAdminCategoryFx.doneData]);

export const setCategoryForUpdate = createEvent<CategoryDto | null>();
export const $categoryForUpdate = createStore<CategoryDto | null>(null)
  .on(setCategoryForUpdate, (_, payload) => payload)
  .reset([closeUpdateCategoryModal, updateAdminCategoryFx.doneData]);

sample({
  clock: openUpdateCategoryModal,
  source: $categories,
  fn: (source, clock) =>
    source?.items.find((category) => category.id === clock) ?? null,
  target: setCategoryForUpdate,
});

sample({
  clock: [
    createAdminCategoryFx.doneData,
    updateAdminCategoryFx.doneData,
    deleteAdminCategoryFx.doneData,
  ],
  fn: () => {},
  target: getCategoriesFx,
});
