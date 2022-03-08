import React, { useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";
import { CategoryDto, UpdateCategoryDto } from "shared/openapi";

export interface IProps {
  modalVisible: boolean;
  isLoading: boolean;
  updateCategory: (data: UpdateCategoryDto) => void;
  closeModal: VoidFunction;
  categoryForUpdate: CategoryDto | null;
}

export const UpdateCategoryModal: React.FC<IProps> = ({
  modalVisible,
  isLoading,
  updateCategory,
  closeModal,
  categoryForUpdate,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (categoryForUpdate) {
      form.setFieldsValue({ name: categoryForUpdate.name });
    }
  }, [categoryForUpdate, form]);

  return (
    <Modal
      title="Basic Modal"
      visible={modalVisible}
      onCancel={closeModal}
      footer={[
        <Button
          loading={isLoading}
          form="updateCategoryForm"
          key="submit"
          htmlType="submit"
        >
          Обновить
        </Button>,
      ]}
    >
      <Form
        form={form}
        id={"updateCategoryForm"}
        name="user registration"
        autoComplete="off"
        size={"middle"}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={(data: { name: string }) =>
          updateCategory({ id: categoryForUpdate!.id!, name: data.name })
        }
      >
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: "!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
