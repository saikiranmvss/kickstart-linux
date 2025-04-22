import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";  // Corrected the import for jwt-decode
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

const Investors = () => {
  const tableRef = useRef(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));

    if (!token) return;
    const email = token.email;

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/journey/user-journey?email=${email}`)
      .then((res) => {
        // Ensure that we are dealing with an array of journeys
        setTableData(res.data.journeys || []); // fallback to an empty array if no journeys are found
      })
      .catch((err) => {
        console.error("Error fetching journey data:", err);
      });
  }, []);

  useEffect(() => {
    if (tableData.length > 0) {
      console.log(tableData);  // Debugging to check the output
    
      const table = $(tableRef.current).DataTable({
        paging: true,
        destroy: true, 
        data: tableData,
        columns: [
          {
            title: '<input type="checkbox" class="form-check" />',
            data: null,
            orderable: false,
            render: () => `<input type="checkbox" class="form-check" />`,
          },
          {
            title: "Category<br/>Sub Category",
            data: null, 
            render: (data) => {
              console.log('Data for Category:', data);  
              return `<span>${data?.catTitle || 'N/A'}</span><br/><span>${data?.catSubtitle || 'N/A'}</span>`;
            },
          },
          {
            title: "Begin Date<br/>",
            data: "catStartUpBeginDate",  
            render: (data) =>
              `<span>${data || 'N/A'}</span><br/>`,
          },
          {
            title: "Action",
            data: null,
            render: () => `<span>View</span>`,
          },
        ],
      });
    
      return () => {
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
          $(tableRef.current).DataTable().destroy();
        }
      };
    }
    
  }, [tableData]);

  return (
    <div className="container-fluid test">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Projects</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="#">Tables</a>
                </li>
                <li className="breadcrumb-item active">Projects</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <table
                ref={tableRef}
                className="table dashboard-table"
                style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}
              ></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
