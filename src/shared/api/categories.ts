import { apiInstance } from "./index";

export interface IGetCategoriesParams {
  name?: string;
  parent?: number;
}

export interface ICategorySibling {
  id: string;
  name: string;
}

export interface ICategory {
  category: ICategorySibling;
  id: string;
  parent: ICategorySibling;
}

export interface ICreateCategoryData {
  category: string;
  parent: string | null;
}

export interface IUpdateCategoryData {
  category: string;
  id: string;
  parent: string | null;
}

export const categoriesService = {
  getCategories(params: IGetCategoriesParams) {
    return apiInstance.get<ICategory[]>("admin/categories", { params });
  },
  createCategory(data: ICreateCategoryData) {
    return apiInstance.post("admin/categories", {
      category: data.category,
      parent: null,
    });
  },
  updateCategory(data: IUpdateCategoryData) {
    return apiInstance.put("admin/categories", data);
  },
};
