import React from "react";
import { useGate, useStore } from "effector-react";
import { Button, Form, Space } from "antd";
import {
  $addUserModalVisibility,
  $users,
  addUserModalApi,
  deleteUserFx,
  GetUsersGate,
  registrationUserFx,
} from "./model";
import { UserDeleteDto, UserRegistrationDto } from "shared/openapi";
import { CreateUserModal, UsersTable } from "./ui";

const AdminPanelUsers = () => {
  const users = useStore($users);
  const addUsersModalVisible = useStore($addUserModalVisibility);
  const isAddUserLoading = useStore(registrationUserFx.pending);

  const [form] = Form.useForm();

  useGate(GetUsersGate);

  const createUser = async (data: UserRegistrationDto) => {
    await registrationUserFx(data);
    form.resetFields();
  };

  const deleteUser = async (data: UserDeleteDto) => {
    await deleteUserFx(data);
  };

  return (
    <Space size={"large"} direction={"vertical"} style={{ width: "100%" }}>
      <Button type="primary" onClick={() => addUserModalApi.open()}>
        Создать пользователя
      </Button>
      <CreateUserModal
        isLoading={isAddUserLoading}
        createUser={createUser}
        modalVisible={addUsersModalVisible}
        closeModal={addUserModalApi.close}
      />
      <UsersTable users={users?.items} deleteUser={deleteUser} />
    </Space>
  );
};

export default AdminPanelUsers;
