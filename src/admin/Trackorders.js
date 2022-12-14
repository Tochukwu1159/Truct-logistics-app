import React from 'react'
import Sidenav from '../components/admin_includes/Sidenav'
import Topbar from '../components/admin_includes/Topbar'

const Trackorders = () => {
 return (
   <div>
     <body id='page-top'>
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
                     <table
                       className='table table-bordered table-striped'
                       id='dataTable'
                       width='100%'
                       cellspacing='0'
                     >
                       <thead>
                         <tr>
                           <th>Tracking Id</th>
                           <th>Truck Name</th>
                           <th className='hideformobile vehicletype'>
                             Driver Name
                           </th>
                           <th className='hideformobile drivername'>
                             Customer Name
                           </th>
                           <th className='hidembilefortab'>Source</th>
                           <th className='hidembilefortab'>Current Location</th>
                           <th className='hidembilefortab'>Destination</th>
                           <th className='hidembilefortabcol'>
                             Order delivered date
                           </th>
                           <th></th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <form action='orderprintpg.php' method='get'>
                             <td></td>
                             <td></td>
                             <td className='hideformobile vehicletype'></td>
                             <td className='hideformobile drivername'>Edinburgh</td>
                             <td className='hidembilefortab'></td>
                             <td className='hidembilefortab'></td>
                             <td className='hidembilefortab'></td>
                             <td className='hidembilefortabcol'></td>
                             <input type='hidden' name='order_id' value='' />
                             <td className=''>
                               <button className='btn btn-primary' type='submit'>
                                 View / Print Details
                               </button>
                             </td>
                           </form>
                         </tr>
                         <tr>
                           <form action='orderprintpg.php' method='get'>
                             <td></td>
                             <td></td>
                             <td className='hideformobile vehicletype'></td>
                             <td className='hideformobile drivername'>Edinburgh</td>
                             <td className='hidembilefortab'></td>
                             <td className='hidembilefortab'></td>
                             <td className='hidembilefortab'></td>
                             <td className='hidembilefortabcol'></td>
                             <input type='hidden' name='order_id' value='' />
                             <td className=''>
                               <button className='btn btn-primary' type='submit'>
                                 View / Print Details
                               </button>
                             </td>
                           </form>
                         </tr>
                       </tbody>
                       <tfoot>
                         <tr>
                           <th>Tracking Id</th>
                           <th>Truck Name</th>
                           <th className='hideformobile vehicletype'>
                             Driver Name
                           </th>
                           <th className='hideformobile drivername'>
                             Customer Name
                           </th>
                           <th className='hidembilefortab'>Source</th>
                           <th className='hidembilefortab'>Current Location</th>
                           <th className='hidembilefortab'>Destination</th>
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
                 <span aria-hidden='true'>??</span>
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

export default Trackorders
