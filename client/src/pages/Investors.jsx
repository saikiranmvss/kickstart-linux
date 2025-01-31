import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
const Investors = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({

      paging: true, 
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
            <h4 className="mb-sm-0">Enterprenuer</h4>

            <div className="page-title-right">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="#">Tables</a></li>
                    <li className="breadcrumb-item active">Enterprenuers</li>
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
                        <th>Overall <br/>Invested</th>
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
                        <td>  <span class="status active"><span class="circle green"></span> Active</span></td>
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
                        <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                        <td><span>View</span></td>
                    </tr>    
                    <tr>
                        <td><input type="checkbox" name="selecta" className="form-check" /></td>
                        <td><span>EP - 0005678</span><br/><span>Feb 12 2024</span></td>
                        <td><span>Amit Sharma</span><br/><span>+91 9876541234</span></td>
                        <td><span>Organic</span><br/><span>Eco-conscious</span></td>
                        <td><span>Bangalore</span><br/><span>Karnataka</span></td>
                        <td><span>VC Firms</span><br/><span>Seed Investors</span></td>
                        <td><span>03 Founders</span><br/><span>Not Connected</span></td>
                        <td><span><i class="fas fa-eye"></i> 2.3k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.1k</span></td>
                        <td><span>50 lakh</span></td>
                        <td><span class="status active"><span class="circle green"></span> Active</span></td>
                        <td><span>View</span></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="selecta" className="form-check" /></td>
                        <td><span>EP - 0008745</span><br/><span>Mar 05 2024</span></td>
                        <td><span>Sneha Verma</span><br/><span>+91 9876547890</span></td>
                        <td><span>Recycled Goods</span><br/><span>Zero Waste</span></td>
                        <td><span>Mumbai</span><br/><span>Maharashtra</span></td>
                        <td><span>Private Equity</span><br/><span>Impact Investors</span></td>
                        <td><span>02 Founders</span><br/><span>Connected</span></td>
                        <td><span><i class="fas fa-eye"></i> 3.0k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.8k</span></td>
                        <td><span>75 lakh</span></td>
                        <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                        <td><span>View</span></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="selecta" className="form-check" /></td>
                        <td><span>EP - 0003621</span><br/><span>Apr 10 2024</span></td>
                        <td><span>Rohan Das</span><br/><span>+91 9876534567</span></td>
                        <td><span>Solar Energy</span><br/><span>Green Tech</span></td>
                        <td><span>Pune</span><br/><span>Maharashtra</span></td>
                        <td><span>Angel Investors</span><br/><span>Government Grants</span></td>
                        <td><span>04 Founders</span><br/><span>Connected</span></td>
                        <td><span><i class="fas fa-eye"></i> 1.2k</span><br/><span><i class="fas fa-thumbs-up"></i> 900</span></td>
                        <td><span>30 lakh</span></td>
                        <td><span class="status active"><span class="circle green"></span> Active</span></td>
                        <td><span>View</span></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="selecta" className="form-check" /></td>
                        <td><span>EP - 0009870</span><br/><span>May 15 2024</span></td>
                        <td><span>Pooja Iyer</span><br/><span>+91 9876542345</span></td>
                        <td><span>Biodegradable</span><br/><span>Plastic Alternative</span></td>
                        <td><span>Delhi</span><br/><span>New Delhi</span></td>
                        <td><span>Incubators</span><br/><span>Startup Accelerators</span></td>
                        <td><span>01 Founder</span><br/><span>Not Connected</span></td>
                        <td><span><i class="fas fa-eye"></i> 4.5k</span><br/><span><i class="fas fa-thumbs-up"></i> 3.7k</span></td>
                        <td><span>90 lakh</span></td>
                        <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                        <td><span>View</span></td>
                    </tr> 
                    <tr>
                      <td><input type="checkbox" name="selecta" className="form-check" /></td>
                      <td><span>EP - 0005678</span><br/><span>Feb 12 2024</span></td>
                      <td><span>Amit Sharma</span><br/><span>+91 9876541234</span></td>
                      <td><span>Organic</span><br/><span>Eco-conscious</span></td>
                      <td><span>Bangalore</span><br/><span>Karnataka</span></td>
                      <td><span>VC Firms</span><br/><span>Seed Investors</span></td>
                      <td><span>03 Founders</span><br/><span>Not Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 2.3k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.1k</span></td>
                      <td><span>50 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                  </tr>
                  <tr>
                      <td><input type="checkbox" name="selecta" className="form-check" /></td>
                      <td><span>EP - 0008745</span><br/><span>Mar 05 2024</span></td>
                      <td><span>Sneha Verma</span><br/><span>+91 9876547890</span></td>
                      <td><span>Recycled Goods</span><br/><span>Zero Waste</span></td>
                      <td><span>Mumbai</span><br/><span>Maharashtra</span></td>
                      <td><span>Private Equity</span><br/><span>Impact Investors</span></td>
                      <td><span>02 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 3.0k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.8k</span></td>
                      <td><span>75 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                  </tr>
                  <tr>
                      <td><input type="checkbox" name="selecta" className="form-check" /></td>
                      <td><span>EP - 0003621</span><br/><span>Apr 10 2024</span></td>
                      <td><span>Rohan Das</span><br/><span>+91 9876534567</span></td>
                      <td><span>Solar Energy</span><br/><span>Green Tech</span></td>
                      <td><span>Pune</span><br/><span>Maharashtra</span></td>
                      <td><span>Angel Investors</span><br/><span>Government Grants</span></td>
                      <td><span>04 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 1.2k</span><br/><span><i class="fas fa-thumbs-up"></i> 900</span></td>
                      <td><span>30 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                  </tr>
                  <tr>
                      <td><input type="checkbox" name="selecta" className="form-check" /></td>
                      <td><span>EP - 0009870</span><br/><span>May 15 2024</span></td>
                      <td><span>Pooja Iyer</span><br/><span>+91 9876542345</span></td>
                      <td><span>Biodegradable</span><br/><span>Plastic Alternative</span></td>
                      <td><span>Delhi</span><br/><span>New Delhi</span></td>
                      <td><span>Incubators</span><br/><span>Startup Accelerators</span></td>
                      <td><span>01 Founder</span><br/><span>Not Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 4.5k</span><br/><span><i class="fas fa-thumbs-up"></i> 3.7k</span></td>
                      <td><span>90 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                  </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0001234</span><br/><span>Jan 01 2024</span></td>
                      <td><span>Radha Krishna</span><br/><span>+91 9876549877</span></td>
                      <td><span>Eco-friendly</span><br/><span>Sustainable</span></td>
                      <td><span>Hyderabad</span><br/><span>Telangana</span></td>
                      <td><span>Investors</span><br/><span>Angel Investors</span></td>
                      <td><span>02 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 1.5k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.5k</span></td>
                      <td><span>10 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0005678</span><br/><span>Feb 15 2024</span></td>
                      <td><span>Arjun Reddy</span><br/><span>+91 8765432109</span></td>
                      <td><span>Renewable Energy</span><br/><span>Green Tech</span></td>
                      <td><span>Bangalore</span><br/><span>Karnataka</span></td>
                      <td><span>Venture Capital</span><br/><span>Series A</span></td>
                      <td><span>03 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 2.3k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.8k</span></td>
                      <td><span>15 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0009101</span><br/><span>Mar 10 2024</span></td>
                      <td><span>Priya Sharma</span><br/><span>+91 7654321098</span></td>
                      <td><span>Health Tech</span><br/><span>AI Diagnostics</span></td>
                      <td><span>Mumbai</span><br/><span>Maharashtra</span></td>
                      <td><span>Private Equity</span><br/><span>Growth Stage</span></td>
                      <td><span>04 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 3.1k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.5k</span></td>
                      <td><span>20 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0001121</span><br/><span>Apr 05 2024</span></td>
                      <td><span>Rahul Mehta</span><br/><span>+91 6543210987</span></td>
                      <td><span>EdTech</span><br/><span>Online Learning</span></td>
                      <td><span>Chennai</span><br/><span>Tamil Nadu</span></td>
                      <td><span>Seed Funding</span><br/><span>Early Stage</span></td>
                      <td><span>01 Founder</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 1.2k</span><br/><span><i class="fas fa-thumbs-up"></i> 0.9k</span></td>
                      <td><span>5 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0001314</span><br/><span>May 20 2024</span></td>
                      <td><span>Ananya Singh</span><br/><span>+91 5432109876</span></td>
                      <td><span>FinTech</span><br/><span>Digital Payments</span></td>
                      <td><span>Pune</span><br/><span>Maharashtra</span></td>
                      <td><span>Angel Investors</span><br/><span>Pre-Seed</span></td>
                      <td><span>02 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 1.7k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.3k</span></td>
                      <td><span>8 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0001516</span><br/><span>Jun 12 2024</span></td>
                      <td><span>Vikram Patel</span><br/><span>+91 4321098765</span></td>
                      <td><span>AgriTech</span><br/><span>Smart Farming</span></td>
                      <td><span>Ahmedabad</span><br/><span>Gujarat</span></td>
                      <td><span>Venture Capital</span><br/><span>Series B</span></td>
                      <td><span>03 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 2.8k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.2k</span></td>
                      <td><span>25 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0001718</span><br/><span>Jul 18 2024</span></td>
                      <td><span>Neha Gupta</span><br/><span>+91 3210987654</span></td>
                      <td><span>E-commerce</span><br/><span>Online Retail</span></td>
                      <td><span>Kolkata</span><br/><span>West Bengal</span></td>
                      <td><span>Private Equity</span><br/><span>Late Stage</span></td>
                      <td><span>04 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 3.5k</span><br/><span><i class="fas fa-thumbs-up"></i> 3.0k</span></td>
                      <td><span>30 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0001920</span><br/><span>Aug 22 2024</span></td>
                      <td><span>Rajesh Kumar</span><br/><span>+91 2109876543</span></td>
                      <td><span>Logistics</span><br/><span>Supply Chain</span></td>
                      <td><span>Delhi</span><br/><span>Delhi</span></td>
                      <td><span>Angel Investors</span><br/><span>Seed Stage</span></td>
                      <td><span>02 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 1.9k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.6k</span></td>
                      <td><span>12 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0002122</span><br/><span>Sep 30 2024</span></td>
                      <td><span>Suman Verma</span><br/><span>+91 1098765432</span></td>
                      <td><span>Real Estate</span><br/><span>PropTech</span></td>
                      <td><span>Jaipur</span><br/><span>Rajasthan</span></td>
                      <td><span>Venture Capital</span><br/><span>Series C</span></td>
                      <td><span>03 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 2.6k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.1k</span></td>
                      <td><span>18 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0002324</span><br/><span>Oct 10 2024</span></td>
                      <td><span>Ankit Jain</span><br/><span>+91 0987654321</span></td>
                      <td><span>Health & Wellness</span><br/><span>Fitness Tech</span></td>
                      <td><span>Lucknow</span><br/><span>Uttar Pradesh</span></td>
                      <td><span>Private Equity</span><br/><span>Growth Stage</span></td>
                      <td><span>04 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 3.2k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.7k</span></td>
                      <td><span>22 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0002526</span><br/><span>Nov 15 2024</span></td>
                      <td><span>Pooja Reddy</span><br/><span>+91 9876543210</span></td>
                      <td><span>Travel Tech</span><br/><span>Tourism</span></td>
                      <td><span>Hyderabad</span><br/><span>Telangana</span></td>
                      <td><span>Angel Investors</span><br/><span>Pre-Seed</span></td>
                      <td><span>02 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 1.4k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.1k</span></td>
                      <td><span>7 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0002728</span><br/><span>Dec 20 2024</span></td>
                      <td><span>Ravi Shankar</span><br/><span>+91 8765432109</span></td>
                      <td><span>AI & ML</span><br/><span>Machine Learning</span></td>
                      <td><span>Bangalore</span><br/><span>Karnataka</span></td>
                      <td><span>Venture Capital</span><br/><span>Series A</span></td>
                      <td><span>03 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 2.9k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.4k</span></td>
                      <td><span>17 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0002930</span><br/><span>Jan 05 2025</span></td>
                      <td><span>Kavita Singh</span><br/><span>+91 7654321098</span></td>
                      <td><span>EdTech</span><br/><span>Online Education</span></td>
                      <td><span>Mumbai</span><br/><span>Maharashtra</span></td>
                      <td><span>Private Equity</span><br/><span>Growth Stage</span></td>
                      <td><span>04 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 3.3k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.8k</span></td>
                      <td><span>21 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0003132</span><br/><span>Feb 10 2025</span></td>
                      <td><span>Manish Sharma</span><br/><span>+91 6543210987</span></td>
                      <td><span>FinTech</span><br/><span>Blockchain</span></td>
                      <td><span>Chennai</span><br/><span>Tamil Nadu</span></td>
                      <td><span>Seed Funding</span><br/><span>Early Stage</span></td>
                      <td><span>01 Founder</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 1.3k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.0k</span></td>
                      <td><span>6 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0003334</span><br/><span>Mar 15 2025</span></td>
                      <td><span>Anjali Mehta</span><br/><span>+91 5432109876</span></td>
                      <td><span>Health Tech</span><br/><span>Telemedicine</span></td>
                      <td><span>Pune</span><br/><span>Maharashtra</span></td>
                      <td><span>Angel Investors</span><br/><span>Pre-Seed</span></td>
                      <td><span>02 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 1.8k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.4k</span></td>
                      <td><span>9 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0003536</span><br/><span>Apr 20 2025</span></td>
                      <td><span>Vivek Patel</span><br/><span>+91 4321098765</span></td>
                      <td><span>AgriTech</span><br/><span>Smart Irrigation</span></td>
                      <td><span>Ahmedabad</span><br/><span>Gujarat</span></td>
                      <td><span>Venture Capital</span><br/><span>Series B</span></td>
                      <td><span>03 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 2.7k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.3k</span></td>
                      <td><span>19 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0003738</span><br/><span>May 25 2025</span></td>
                      <td><span>Neha Kapoor</span><br/><span>+91 3210987654</span></td>
                      <td><span>E-commerce</span><br/><span>Online Marketplace</span></td>
                      <td><span>Kolkata</span><br/><span>West Bengal</span></td>
                      <td><span>Private Equity</span><br/><span>Late Stage</span></td>
                      <td><span>04 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 3.4k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.9k</span></td>
                      <td><span>28 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0003940</span><br/><span>Jun 30 2025</span></td>
                      <td><span>Rajiv Malhotra</span><br/><span>+91 2109876543</span></td>
                      <td><span>Logistics</span><br/><span>Supply Chain Tech</span></td>
                      <td><span>Delhi</span><br/><span>Delhi</span></td>
                      <td><span>Angel Investors</span><br/><span>Seed Stage</span></td>
                      <td><span>02 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 2.0k</span><br/><span><i class="fas fa-thumbs-up"></i> 1.7k</span></td>
                      <td><span>13 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0004142</span><br/><span>Jul 10 2025</span></td>
                      <td><span>Sneha Verma</span><br/><span>+91 1098765432</span></td>
                      <td><span>Real Estate</span><br/><span>PropTech</span></td>
                      <td><span>Jaipur</span><br/><span>Rajasthan</span></td>
                      <td><span>Venture Capital</span><br/><span>Series C</span></td>
                      <td><span>03 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 2.5k</span><br/><span><i class="fas fa-thumbs-up"></i> 2.0k</span></td>
                      <td><span>16 lakh</span></td>
                      <td><span class="status inactive"><span class="circle red"></span> Inactive</span></td>
                      <td><span>View</span></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="selecta" id="select" className="form-check" /></td>
                      <td><span>EP - 0004344</span><br/><span>Aug 15 2025</span></td>
                      <td><span>Anil Jain</span><br/><span>+91 0987654321</span></td>
                      <td><span>Health & Wellness</span><br/><span>Fitness Tech</span></td>
                      <td><span>Lucknow</span><br/><span>Uttar Pradesh</span></td>
                      <td><span>Private Equity</span><br/><span>Growth Stage</span></td>
                      <td><span>04 Founders</span><br/><span>Connected</span></td>
                      <td><span><i class="fas fa-eye"></i> 3.6k</span><br/><span><i class="fas fa-thumbs-up"></i> 3.1k</span></td>
                      <td><span>24 lakh</span></td>
                      <td><span class="status active"><span class="circle green"></span> Active</span></td>
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

export default Investors;
