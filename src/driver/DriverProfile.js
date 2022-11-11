import React from 'react'
import Sidenav from '../components/driver_includes/Sidenav'
import Topbar from '../components/driver_includes/Topbar'

import './vendor/fontawesome-free/css/all.min.css'
import './vendor/stylesheets/sb-admin-2.min.css'
import './vendor/datatables/dataTables.bootstrap4.min.css'


class DriverProfile extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id: '',
      name: '',
      email: '',
      address: '',
      phone: '',
      user_type: 0,
    }
  }
  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.setState({
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        user_type: user['user_type'],
      })   
    }
  }
  render(){
    return(
      <div>
      <body id='page-top'>
        <div id='wrapper'>
          <Sidenav />

          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Topbar />
              <div className='container-fluid'>
                <h1 className='h3 mb-2 text-gray-800'>
                  <i className='fa fa-user'></i> Profile
                </h1>

                <div className='card shadow mb-4'>
                  <div className='card-body'>
                    <div className='table-responsive'>
                      <form>
                        <div className='mb-3'>
                          <label for='exampleInputEmail1' className='form-label'>
                            Fullname
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                            value={this.state.name}
                            readOnly
                          />
                        </div>
                        <div className='mb-3'>
                          <label for='exampleInputEmail1' className='form-label'>
                            Email address
                          </label>
                          <input
                            type='email'
                            className='form-control'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                            value={this.state.email}
                            readOnly
                          />
                        </div>
                        <div className='mb-3'>
                          <label for='exampleInputEmail1' className='form-label'>
                            Home Address
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                            value={this.state.address}
                            readOnly
                          />
                        </div>
                        <div className='mb-3'>
                          <label for='exampleInputEmail1' className='form-label'>
                            Phone
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                            value={this.state.phone}
                            readOnly
                          />
                        </div>
                        <div className='mb-3'>
                          <label for='exampleInputPassword1' className='form-label'>
                            Password
                          </label>
                          <input
                            type='password'
                            className='form-control'
                            id='exampleInputPassword1'
                          />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                          Update Profile
                        </button>
                      </form>
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
}

export default DriverProfile
