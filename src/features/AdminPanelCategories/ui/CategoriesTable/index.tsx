import { Button, Popconfirm, Space, Table } from "antd";
import React, { useState } from "react";
import { CategoryDto } from "shared/openapi";

interface ICategoriesTableProps {
  categories?: CategoryDto[];
  deleteCategory: (id: number) => void;
  openUpdateModal: (id: number) => void;
}

export const CategoriesTable: React.FC<ICategoriesTableProps> = ({
  categories,
  deleteCategory,
  openUpdateModal,
}) => {
  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);

  const columns = [
    {
      title: "category id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "category name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "actions",
      key: "actions",
      render: (category: CategoryDto) => {
        return (
          <Space size="middle">
            <Popconfirm
              title="Удалить категорию?"
              visible={openPopoverId === category.id}
              onConfirm={() => deleteCategory(category.id)}
              onCancel={() => setOpenPopoverId(null)}
            >
              <Button onClick={() => setOpenPopoverId(category.id)}>
                Удалить
              </Button>
            </Popconfirm>
            <Button onClick={() => openUpdateModal(category.id)}>
              Изменить
            </Button>
          </Space>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={categories} pagination={false} />;
};
