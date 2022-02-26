import React from "react";
import { useGate, useStore } from "effector-react";
import { Button, Form, Input, Modal, Space } from "antd";
import {
  $addUserModalVisibility,
  $users,
  addUserModalApi,
  GetUsersGate,
  registrationUserFx,
} from "./model";
import { UsersTable } from "./ui/Table";
import { IRegisterUserData } from "../../shared/api/auth";

const AdminPanelUsers = () => {
  const users = useStore($users);
  const addUsersModalVisible = useStore($addUserModalVisibility);
  const isAddUserLoading = useStore(registrationUserFx.pending);

  const [form] = Form.useForm();

  useGate(GetUsersGate);

  const registationUser = async (data: IRegisterUserData) => {
    await registrationUserFx(data);
    form.resetFields();
  };

  return (
    <Space size={"large"} direction={"vertical"} style={{ width: "100%" }}>
      <Button type="primary" onClick={() => addUserModalApi.open()}>
        Создать пользователя
      </Button>
      <Modal
        title="Basic Modal"
        visible={addUsersModalVisible}
        onCancel={() => addUserModalApi.close()}
        footer={[
          <Button
            loading={isAddUserLoading}
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
          onFinish={registationUser}
        >
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "!" }]}
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
      <UsersTable users={users?.items} />
    </Space>
  );
};

export default AdminPanelUsers;
