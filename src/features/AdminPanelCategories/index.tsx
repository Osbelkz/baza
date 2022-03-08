import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useStore } from "effector-react";
import {
  $categories,
  $categoryForUpdate,
  $updateCategoryModalVisibility,
  closeUpdateCategoryModal,
  createAdminCategoryFx,
  deleteAdminCategoryFx,
  getCategoriesFx,
  openUpdateCategoryModal,
  updateAdminCategoryFx,
} from "./model";
import { CreateCategoryDto, UpdateCategoryDto } from "shared/openapi";
import { CategoriesTable, UpdateCategoryModal } from "./ui";

const AdminPanelCategories = () => {
  const categories = useStore($categories);
  const isUpdateCategoryModalVisible = useStore($updateCategoryModalVisibility);
  const isUpdateCategoryLoading = useStore(updateAdminCategoryFx.pending);
  const categoryForUpdate = useStore($categoryForUpdate);

  useEffect(() => {
    getCategoriesFx();
  }, []);

  const createCategory = (data: CreateCategoryDto) => {
    createAdminCategoryFx(data);
  };

  const deleteCategory = (id: number) => {
    deleteAdminCategoryFx(id);
  };

  const updateCategory = (data: UpdateCategoryDto) => {
    updateAdminCategoryFx(data);
  };

  console.log(categories);

  return (
    <div>
      <Form
        name="create category"
        layout="vertical"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={createCategory}
        autoComplete="off"
      >
        <Form.Item
          label="наименование новой категории"
          name="name"
          rules={[{ required: true, message: "!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Form>
      <CategoriesTable
        categories={categories?.items}
        deleteCategory={deleteCategory}
        openUpdateModal={openUpdateCategoryModal}
      />
      <UpdateCategoryModal
        modalVisible={isUpdateCategoryModalVisible}
        isLoading={isUpdateCategoryLoading}
        updateCategory={updateCategory}
        closeModal={closeUpdateCategoryModal}
        categoryForUpdate={categoryForUpdate}
      />
    </div>
  );
};

export default AdminPanelCategories;
