import React from 'react'
import Topbar from '../components/customerProfile_includes/Topbar'
import Sidebar from '../components/customerProfile_includes/Sidebar'

const ViewOrders = () => {
    return (
      <div>
        <body id='page-top'>
          <div id='wrapper'>
            <Sidebar />

            <div id='content-wrapper' className='d-flex flex-column'>
              <div id='content'>
                <Topbar />

                <div className='container-fluid'>
                  <h1 className='h3 mb-2 text-gray-800'>All orders lists</h1>
                  <p className='mb-4'>
                    Below is a comprehensive list of all previous successfull
                    delivery transactions
                  </p>

                  <div className='card shadow mb-4'>
                    <div className='card-body'>
                      <div className='table-responsive'>
                        <table
                          className='table table-bordered table-striped'
                          id='dataTable'
                          width='100%'
                          cellspacing='0'
                        >
                          <thead>
                            <tr>
                              <th>Order id</th>
                              <th>Order Name</th>
                              <th className='hideformobile vehicletype'>
                                Customer Name
                              </th>
                              <th className='hideformobile drivername'>
                                Driver name
                              </th>
                              <th className='hidembilefortab'>Delivery Vehicle</th>
                              <th className='hidembilefortab'>Order Status</th>
                              <th className='hidembilefortab'>
                                Order request date
                              </th>
                              <th className='hidembilefortabcol'>
                                Order delivered date
                              </th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>4402352f-1d2f-472a-af62-0ab1d8fde6675</td>
                              <td>Crate of Minerals</td>
                              <td className='hideformobile vehicletype'>
                                Mark Ford
                              </td>
                              <td className='hideformobile drivername'>
                                Anthony James
                              </td>
                              <td className='hidembilefortab'>
                                Very Small - L 7m x W 4.8m x H 4.8m | Max: 805
                                kg
                              </td>
                              <td className='hidembilefortab'>Delivered</td>
                              <td className='hidembilefortab'>
                                2021-12-17T11:18:50.036Z
                              </td>
                              <td className='hidembilefortabcol'>
                                2021-12-16T11:18:50.036Z
                              </td>
                              <input type='hidden' name='order_id' value='' />
                              <td className=''>
                                <button className='btn btn-primary' type='submit'>
                                  Print
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>55467d2f-1d2f-472a-af62-0ab1d8fc3675</td>
                              <td>Crate of Eggs</td>
                              <td className='hideformobile vehicletype'>
                                Mark Ford
                              </td>
                              <td className='hideformobile drivername'>
                                Anthony James
                              </td>
                              <td className='hidembilefortab'>
                                Very Small - L 7m x W 4.8m x H 4.8m | Max: 805
                                kg
                              </td>
                              <td className='hidembilefortab'>Delivered</td>
                              <td className='hidembilefortab'>
                                2021-12-12T11:16:50.036Z
                              </td>
                              <td className='hidembilefortabcol'>
                                2021-12-12T11:18:50.036Z
                              </td>
                              <input type='hidden' name='order_id' value='' />
                              <td className=''>
                                <button className='btn btn-primary' type='submit'>
                                  Print
                                </button>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Order id</th>
                              <th>Order Name</th>
                              <th className='hideformobile vehicletype'>
                                Customer Name
                              </th>
                              <th className='hideformobile drivername'>
                                Driver name
                              </th>
                              <th className='hidembilefortab'>Delivery Vehicle</th>
                              <th className='hidembilefortab'>Order Status</th>
                              <th className='hidembilefortab'>
                                Order request date
                              </th>
                              <th className='hidembilefortabcol'>
                                Order delivered date
                              </th>
                              <th></th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer className='sticky-footer bg-white'>
                <div className='container my-auto'>
                  <div className='copyright text-center my-auto'>
                    <span>Copyright &copy; Your Website 2020</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          <a className='scroll-to-top rounded' href='#page-top'>
            <i className='fas fa-angle-up'></i>
          </a>

          <div
            className='modal fade'
            id='logoutModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Ready to Leave?
                  </h5>
                  <button
                    className='close'
                    type='button'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>×</span>
                  </button>
                </div>
                <div className='modal-body'>
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className='modal-footer'>
                  <button
                    className='btn btn-secondary'
                    type='button'
                    data-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <a className='btn btn-primary' href='login.html'>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    )
}
    


export default ViewOrders
