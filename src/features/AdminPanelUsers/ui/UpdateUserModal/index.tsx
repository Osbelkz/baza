import React, { useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserDto, UserUpdateDto } from "shared/openapi";

interface IProps {
  modalVisible: boolean;
  isLoading: boolean;
  updateUser: (data: UserUpdateDto) => void;
  closeModal: VoidFunction;
  userForUpdate: UserDto | null;
}

export const UpdateUserModal: React.FC<IProps> = ({
  modalVisible,
  isLoading,
  userForUpdate,
  closeModal,
  updateUser,
}) => {
  const [form] = Form.useForm<UserUpdateDto>();

  useEffect(() => {
    if (userForUpdate) {
      form.setFieldsValue({
        firstName: userForUpdate.firstName,
        lastName: userForUpdate.lastName,
        email: userForUpdate.email,
      });
    }
  }, [userForUpdate, form]);

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
        onFinish={(data: UserUpdateDto) =>
          updateUser({ ...data, id: userForUpdate!.id! })
        }
      >
        <Form.Item
          label="firstName"
          name="firstName"
          rules={[{ required: true, message: "!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="lastName"
          name="lastName"
          rules={[{ required: true, message: "!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
