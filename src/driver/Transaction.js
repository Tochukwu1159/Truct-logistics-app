import React from 'react'
import Sidenav from '../components/driver_includes/Sidenav'
import Topbar from '../components/driver_includes/Topbar'


import "./vendor/fontawesome-free/css/all.min.css"
import "./vendor/stylesheets/sb-admin-2.min.css"
import "./vendor/datatables/dataTables.bootstrap4.min.css"





const Transaction = () => {
    return (
        <div>
            <body id="page-top">

<div id="wrapper">

        <Sidenav/>

    <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

            <Topbar/>

            <div className="container-fluid">

                <h1 className="h3 mb-2 text-gray-800">All orders lists</h1>
                <p className="mb-4">Below is a comprehensive list of all previous successfull delivery transactions</p>

                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Order id</th>
                                        <th>Order Name</th>
                                        <th className="hideformobile vehicletype">Customer Name</th>
                                        <th className="hideformobile drivername">Driver name</th>
                                        <th className="hidembilefortab">Delivery Vehicle</th>
                                        <th className="hidembilefortab">Order Status</th>
                                        <th className="hidembilefortab">Order request date</th>
                                        <th className="hidembilefortabcol">Order delivered date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <form action="orderprintpg.php" method="get">
                                            <td></td>
                                            <td></td>
                                            <td className="hideformobile vehicletype"></td>
                                            <td className="hideformobile drivername">Edinburgh</td>
                                            <td className="hidembilefortab"></td>
                                            <td className="hidembilefortab"></td>
                                            <td className="hidembilefortab"></td>
                                            <td className="hidembilefortabcol"></td>
                                            <input type="hidden" name="order_id" value=""/>
                                            <td className=""><button className="btn btn-primary" type="submit" >View / Print Details</button></td>
                                        </form>
                                    </tr>

                                </tbody>
                                <tfoot>
                                    <tr>
                                    <th>Order id</th>
                                        <th>Order Name</th>
                                        <th className="hideformobile vehicletype">Customer Name</th>
                                        <th className="hideformobile drivername">Driver name</th>
                                        <th className="hidembilefortab">Delivery Vehicle</th>
                                        <th className="hidembilefortab">Order Status</th>
                                        <th className="hidembilefortab">Order request date</th>
                                        <th className="hidembilefortabcol">Order delivered date</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2020</span>
                </div>
            </div>
        </footer>

    </div>

</div>

<a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
</a>

<div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>


</body>

        </div>
    )
}

export default Transaction
