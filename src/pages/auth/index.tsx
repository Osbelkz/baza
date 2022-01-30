import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { authUserFx } from "features/Auth/model";
import { useStore } from "effector-react";
import { LoginDTO } from "../../features/Auth/model/models";
import { $app } from "../../shared/models/app";
import { useLocation, useNavigate } from "react-router-dom";
import paths from "../../shared/routes/paths";

const ViewStyled = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface AdminLoginPageProps {}

const AdminLoginPage: React.FC<AdminLoginPageProps> = () => {
  const { isUserAuth } = useStore($app);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("admin login page");

  const onFinish = (values: LoginDTO) => {
    authUserFx(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isUserAuth) {
      if (location.state) {
        navigate(location.state as string);
      } else {
        navigate(paths.admin.root);
      }
    }
  }, [isUserAuth, location.state, navigate]);

  return (
    <ViewStyled>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Логин"
          name="login"
          rules={[{ required: true, message: "Введите имя пользователя!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Введите пароль!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ViewStyled>
  );
};

export default AdminLoginPage;
