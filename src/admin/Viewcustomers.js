import React, { useState, useEffect } from "react";
import Sidenav from "../components/admin_includes/Sidenav";
import Topbar from "../components/admin_includes/Topbar";
import DataTable from "react-data-table-component";

function Viewcustomers() {
  const [data, setData] = useState([]);
  const [ setSelectedRows] = React.useState(false);
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
        "https://webappexpressnew.herokuapp.com/admin/viewcustomers"
      );
      const json = await res.json();
      console.log(json);
      setData(json.data);
    };
    fetchData();
  }, [setData]);

  const columns = [
    {
      name: "Customer Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Fullname",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    }
  ];





  return (
    <div>
      <div id='page-top'>
        <div id='wrapper'>
          <Sidenav />

          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Topbar />

              <div className='container-fluid'>
                <h1 className='h3 mb-2 text-gray-800'>All customer lists</h1>
                <p className='mb-4'>
                  Below is a comprehensive list of all customer transactions
                  details
                </p>
                <div className='card shadow mb-4'>
                  <div className='card-body'>
                    <div className='table-responsive'>

                    <button
                        className="btn btn-primary"
                        onClick={handleClearRows}
                      >
                        Clear Selected Rows
                      </button>
                      <DataTable
                        columns={columns}
                        data={data}
                        selectableRows
                        pagination
                        highlightOnHover
                        pointerOnHover
                        onSelectedRowsChange={handleChange}
                        clearSelectedRows={toggledClearRows}
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className='scroll-to-top rounded' href='#page-top'>
          <i className='fas fa-angle-up'></i>
        </a>

    </div>
    </div>
  )
}

export default Viewcustomers
