import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { Button, Form, Input } from "antd";
import { $users, getUsersFx, registrationUserFx } from "./model";
import { UsersTable } from "./ui/Table";
import { IRegisterUserData } from "../../shared/api/auth";

const AdminPanelUsers = () => {
  const users = useStore($users);

  useEffect(() => {
    getUsersFx({});
  }, []);

  console.log(users);

  const registationUser = (data: IRegisterUserData) => {
    registrationUserFx(data);
  };

  return (
    <div>
      <Form
        name="user registration"
        layout="vertical"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={registationUser}
        autoComplete="off"
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

        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Form>
      {/*<UsersTable users={users} />*/}
    </div>
  );
};

export default AdminPanelUsers;
