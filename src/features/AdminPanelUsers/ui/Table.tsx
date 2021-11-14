import { Button, Checkbox, Space, Table } from "antd";
import React from "react";
import { IUser } from "../../../shared/api/users";
import { deleteUserFx } from "../model";

interface IUsersTableProps {
  users: IUser[];
}

export const UsersTable: React.FC<IUsersTableProps> = ({ users }) => {
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
      render: (user: IUser) => <Checkbox checked={user.activate} />,
    },
    {
      title: "delete",
      key: "delete",
      render: (user: IUser) => (
        <Space size="middle">
          <Button onClick={() => deleteUserFx({ userId: user.id })}>
            delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} />;
};
