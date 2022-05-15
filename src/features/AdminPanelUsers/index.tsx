import React from "react";
import { useGate, useStore } from "effector-react";
import { Button, Form, Space } from "antd";
import {
  $addUserModalVisibility,
  $updateUserModalVisibility,
  $userForUpdate,
  $users,
  addUserModalApi,
  closeUpdateUserModal,
  deleteUserFx,
  GetUsersGate,
  openUpdateUserModal,
  registrationUserFx,
  updateUserFx,
} from "./model";
import { UserRegistrationDto } from "shared/openapi";
import { CreateUserModal, UpdateUserModal, UsersTable } from "./ui";

const AdminPanelUsers = () => {
  const users = useStore($users);
  const addUsersModalVisible = useStore($addUserModalVisibility);
  const updateUsersModalVisible = useStore($updateUserModalVisibility);
  const userForUpdate = useStore($userForUpdate);
  const isAddUserLoading = useStore(registrationUserFx.pending);
  const isUpdateUserLoading = useStore(updateUserFx.pending);

  const [form] = Form.useForm();

  useGate(GetUsersGate);

  const createUser = async (data: UserRegistrationDto) => {
    await registrationUserFx(data);
    form.resetFields();
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
      <UpdateUserModal
        modalVisible={updateUsersModalVisible}
        isLoading={isUpdateUserLoading}
        updateUser={updateUserFx}
        closeModal={closeUpdateUserModal}
        userForUpdate={userForUpdate}
      />
      <UsersTable
        users={users?.items}
        deleteUser={deleteUserFx}
        openUpdateUserModal={openUpdateUserModal}
      />
    </Space>
  );
};

export default AdminPanelUsers;
