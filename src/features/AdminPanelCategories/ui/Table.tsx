import { Table } from "antd";
import React from "react";
import { CategoryDto } from "../../../shared/openapi";

interface ICategoriesTableProps {
  categories?: CategoryDto[];
}

export const CategoriesTable: React.FC<ICategoriesTableProps> = ({
  categories,
}) => {
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
  ];

  return <Table columns={columns} dataSource={categories} pagination={false} />;
};
