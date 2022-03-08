import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserRegistrationDto } from "shared/openapi";

export interface IProps {
  modalVisible: boolean;
  isLoading: boolean;
  createUser: (data: UserRegistrationDto) => void;
  closeModal: VoidFunction;
}

export const CreateUserModal: React.FC<IProps> = ({
  modalVisible,
  isLoading,
  createUser,
  closeModal,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Basic Modal"
      visible={modalVisible}
      onCancel={closeModal}
      footer={[
        <Button
          loading={isLoading}
          form="addUserForm"
          key="submit"
          htmlType="submit"
        >
          Создать
        </Button>,
      ]}
    >
      <Form
        form={form}
        id={"addUserForm"}
        name="user registration"
        autoComplete="off"
        size={"middle"}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={createUser}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[{ type: "email", required: true, message: "!" }]}
        >
          <Input />
        </Form.Item>

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
          label="login"
          name="login"
          rules={[{ required: true, message: "!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: "!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};
