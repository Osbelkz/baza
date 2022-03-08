import { Button, Checkbox, Space, Table } from "antd";
import React from "react";
import { UserDeleteDto, UserDto } from "shared/openapi";

interface IUsersTableProps {
  users?: UserDto[];
  deleteUser: (data: UserDeleteDto) => void;
}

export const UsersTable: React.FC<IUsersTableProps> = ({
  users,
  deleteUser,
}) => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Login",
      dataIndex: "login",
      key: "login",
    },
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "activate",
      key: "activate",
      render: (user: UserDto) => <Checkbox checked={user.activate} />,
    },
    {
      title: "delete",
      key: "delete",
      render: (user: UserDto) => (
        <Space size="middle">
          <Button onClick={() => deleteUser({ id: user.id })}>delete</Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} />;
};
