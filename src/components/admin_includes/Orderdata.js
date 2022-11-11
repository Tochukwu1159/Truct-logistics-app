import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const Orderdata = () => {
  const [data, setData] = useState([]);
  const [setSelectedRows] = React.useState(false);
  const [toggledClearRows, setToggleClearRows] = React.useState(false);

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://webappexpressnew.herokuapp.com/admin/vieworder"
      );
      const json = await res.json();
      console.log(json);
      setData(json.data);
    };
    fetchData();
  }, [setData]);

  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Product name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "Product category",
      selector: (row) => row.product_category,
      sortable: true,
    },
    {
      name: "Delivery address",
      selector: (row) => row.delivery_address,
      sortable: true,
    },
    {
      name: "Recipient name",
      selector: (row) => row.recipient_name,
      sortable: true,
    },
    {
      name: "Order status",
      selector: (row) => row.order_status,
      sortable: true,
    },
    {
      name: "view more",
      selector: (row) => row.view_more,
      sortable: true,
    },
  ];

  let newData = data.map((val) => {
    return {
      id: val["id"],
      product_name: val.product_name,
      product_category: val.product_category,
      delivery_address: val.delivery_address,
      recipient_name: val.recipient_name,
      order_status: val.order_status,
      view_more: `View More`,
    };
  });
  console.log(newData);
  

  return (
    <div>
      <button className='btn btn-primary' onClick={handleClearRows}>Clear Selected Rows</button>
      <DataTable
        columns={columns}
        data={newData}
        selectableRows
        pagination
        highlightOnHover
        pointerOnHover
        onSelectedRowsChange={handleChange}
        clearSelectedRows={toggledClearRows}
      />

      {console.log(data)}
    </div>
  );
};

export default Orderdata;
