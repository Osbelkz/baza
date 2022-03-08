import { Table } from "antd";
import React from "react";
import { CategoryGroupDto } from "../../../shared/openapi";

interface ICategoriesTableProps {
  categories?: CategoryGroupDto[];
}

export const CategoriesTable: React.FC<ICategoriesTableProps> = ({
  categories,
}) => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "category id",
      dataIndex: "category",
      render: (category: CategoryGroupDto) => category.id,
    },
    {
      title: "category name",
      dataIndex: "category name",
      render: (category: CategoryGroupDto) => category.category.name,
    },
    {
      title: "parent id",
      dataIndex: "parent",
      render: (parent: CategoryGroupDto) => parent.id,
    },
    {
      title: "parent name",
      dataIndex: "parent",
      render: (parent: CategoryGroupDto) => parent.category.name,
    },
  ];

  return <Table columns={columns} dataSource={categories} />;
};
