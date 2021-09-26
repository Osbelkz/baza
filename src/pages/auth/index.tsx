import React from "react";
import { Button, Form, Input } from "antd";
import styled, { css } from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";

const ViewStyled = styled.div`
  ${(props) => css`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

interface AdminLoginPageProps {}

type LocationState = {
  from: Location;
};

const AdminLoginPage: React.FC<
  RouteComponentProps<AdminLoginPageProps, StaticContext, LocationState>
> = ({ location }) => {
  console.log(location.state.from);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
          label="Имя пользователя"
          name="username"
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
