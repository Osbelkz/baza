import { Button, Checkbox, Popconfirm, Space, Table } from "antd";
import React, { useState } from "react";
import { UserDeleteDto, UserDto } from "shared/openapi";

interface IUsersTableProps {
  users?: UserDto[];
  deleteUser: (data: UserDeleteDto) => void;
  openUpdateUserModal: (userId: number) => void;
}

export const UsersTable: React.FC<IUsersTableProps> = ({
  users,
  deleteUser,
  openUpdateUserModal,
}) => {
  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);

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
          <Popconfirm
            title="Удалить категорию?"
            visible={openPopoverId === user.id}
            onConfirm={() => deleteUser({ id: user.id })}
            onCancel={() => setOpenPopoverId(null)}
          >
            <Button onClick={() => setOpenPopoverId(user.id)}>Удалить</Button>
          </Popconfirm>
          <Button onClick={() => openUpdateUserModal(user.id)}>Изменить</Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} />;
};
