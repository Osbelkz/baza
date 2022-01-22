import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { $categories, createCategoryFx, getCategoriesFx } from "./model";
import { ICreateCategoryData } from "../../shared/api/categories";

const AdminPanelCategoriesGroup = () => {
  const categories = useStore($categories);

  useEffect(() => {
    getCategoriesFx({});
  }, []);

  const createCategory = (data: ICreateCategoryData) => {
    createCategoryFx(data);
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
          name="category"
          rules={[{ required: true, message: "!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="наименование категории родителя"
          name="parent"
          rules={[{ required: false, message: "!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminPanelCategoriesGroup;
