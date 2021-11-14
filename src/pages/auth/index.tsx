import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import styled, { css } from "styled-components";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { StaticContext } from "react-router";
import { authUser } from "features/Auth/model";
import { useStore } from "effector-react";
import { LoginDTO } from "../../features/Auth/model/models";
import { $app } from "../../shared/models/app";

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
  const { isUserAuth } = useStore($app);
  const history = useHistory();

  console.log(location.state.from);

  console.log("admin login page");

  const onFinish = (values: LoginDTO) => {
    authUser(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isUserAuth) {
      history.push(location.state.from);
    }
  }, [history, isUserAuth, location.state.from]);

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
