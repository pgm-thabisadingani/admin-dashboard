import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Edit,
  Selection,
  Inject,
  Toolbar,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, ContextMenuItems, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSelection
        allowFiltering
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
        toolbar={["Delete"]}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Filter, Sort, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
