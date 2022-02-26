import { apiInstance } from "./index";
import { IItemsResponse } from "../types";

export interface IGetCategoriesParams {
  name?: string;
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
}

export interface IUpdateCategoryData {
  category: string;
  id: string;
  parent: string | null;
}

export const categoriesService = {
  getCategories(params: IGetCategoriesParams) {
    return apiInstance.get<IItemsResponse<ICategory[]>>("categories", {
      params,
    });
  },
  createCategory(data: ICreateCategoryData) {
    return apiInstance.post("admin/categories", {
      name: data.category,
    });
  },
  updateCategory(data: IUpdateCategoryData) {
    return apiInstance.put("admin/categories", data);
  },
};
