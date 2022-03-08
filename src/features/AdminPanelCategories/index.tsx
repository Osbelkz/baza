import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { $categories, createAdminCategoryFx, getCategoriesFx } from "./model";
import { CategoriesTable } from "./ui/Table";
import { CreateCategoryDto } from "shared/openapi";

const AdminPanelCategories = () => {
  const categories = useStore($categories);

  useEffect(() => {
    getCategoriesFx();
  }, []);

  const createCategory = (data: CreateCategoryDto) => {
    createAdminCategoryFx(data);
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
      <CategoriesTable categories={categories?.items} />
    </div>
  );
};

export default AdminPanelCategories;
