import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
const Dashboard = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({

      paging: false, 
      order: [], 
      columnDefs: [
        {
          targets: 0,
          orderable: false,
        },
      ],
    });

    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        table.destroy();
      }
    };
  }, []);

  return (
<div className="container-fluid">

<div className="row">
    <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Investors</h4>

            <div className="page-title-right">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="#">Tables</a></li>
                    <li className="breadcrumb-item active">Investors</li>
                </ol>
            </div>

        </div>
    </div>
</div>

<div className="row">
    <div className="col-12">
        <div className="card">
            <div className="card-body">                    

                <table id="datatable" ref={tableRef} className="table dashboard-table" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                    <thead>
                    <tr>
                        <th><input type="checkbox" name="selectall" id="selectall" className="form-check"/></th>
                        <th>Account ID <br/>Joining Data</th>
                        <th>Name <br/>Mobile Number</th>
                        <th>Category <br/>Sub Category</th>
                        <th>City <br/>State Region</th>
                        <th>Investors <br/>Category</th>
                        <th>Investors <br/>Connect</th>
                        <th>View <br/>Likes</th>
                        <th>Investment <br/>required</th>
                        <th>Account<br/> Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>


                    <tbody>
                    <tr>
                        <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                        <td><span>EP - 0001234</span><br/><span>Jan 01 2024</span></td>
                        <td><span>Radha Krishna</span><br/><span>+91 9876549877</span></td>
                        <td><span>Eco-friendly</span><br/><span>Sustainable</span></td>
                        <td><span>Hyderabad</span><br/><span>Telanagana</span></td>
                        <td><span>Investors</span><br/><span>Angel Investors</span></td>
                        <td><span>02 Fouunders</span><br/><span>Connected</span></td>                        
                        <td><span><i class="fas fa-eye"></i> 1.5k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.5k</span></td>
                        <td><span>10 lakh</span></td>
                        <td>  <span class="status active"><span class="circle green"></span> Active</span> <br/> <span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                        <td><span>View</span></td>
                    </tr>
                    <tr>
                    <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                        <td><span>EP - 0001234</span><br/><span>Jan 01 2024</span></td>
                        <td><span>Radha Krishna</span><br/><span>+91 9876549877</span></td>
                        <td><span>Eco-friendly</span><br/><span>Sustainable</span></td>
                        <td><span>Hyderabad</span><br/><span>Telanagana</span></td>
                        <td><span>Investors</span><br/><span>Angel Investors</span></td>
                        <td><span>02 Fouunders</span><br/><span>Connected</span></td>                        
                        <td><span><i class="fas fa-eye"></i> 1.5k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.5k</span></td>
                        <td><span>10 lakh</span></td>
                        <td>  <span class="status active"><span class="circle green"></span> Active</span> <br/> <span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                        <td><span>View</span></td>
                    </tr>                    
                    </tbody>
                </table>

            </div>
        </div>
    </div> 
</div>                         

</div>
  );
};

export default Dashboard;
