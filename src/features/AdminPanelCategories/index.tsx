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
import { CategoriesTable, UpdateCategoryModal } from "./ui";

const AdminPanelCategories = () => {
  const categories = useStore($categories);
  const isUpdateCategoryModalVisible = useStore($updateCategoryModalVisibility);
  const isUpdateCategoryLoading = useStore(updateAdminCategoryFx.pending);
  const categoryForUpdate = useStore($categoryForUpdate);

  useEffect(() => {
    getCategoriesFx();
  }, []);

  return (
    <div>
      <Form
        name="create category"
        layout="vertical"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={createAdminCategoryFx}
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
        deleteCategory={deleteAdminCategoryFx}
        openUpdateModal={openUpdateCategoryModal}
      />
      <UpdateCategoryModal
        modalVisible={isUpdateCategoryModalVisible}
        isLoading={isUpdateCategoryLoading}
        updateCategory={updateAdminCategoryFx}
        closeModal={closeUpdateCategoryModal}
        categoryForUpdate={categoryForUpdate}
      />
    </div>
  );
};

export default AdminPanelCategories;
