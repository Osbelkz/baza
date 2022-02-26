import { Table } from "antd";
import React from "react";
import { ICategory, ICategorySibling } from "../../../shared/api/categories";

interface ICategoriesTableProps {
  categories?: ICategory[];
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
      render: (category: ICategorySibling) => category.id,
    },
    {
      title: "category name",
      dataIndex: "category name",
      render: (category: ICategorySibling) => category.name,
    },
    {
      title: "parent id",
      dataIndex: "parent",
      render: (parent: ICategorySibling) => parent.id,
    },
    {
      title: "parent name",
      dataIndex: "parent",
      render: (parent: ICategorySibling) => parent.name,
    },
  ];

  return <Table columns={columns} dataSource={categories} />;
};
