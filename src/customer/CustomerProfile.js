import React from 'react'
import "../customer/Profile.css"
import '../css/style.css'
import '../css/styletwo.css'
import '../css/sb-admin-2.min.css'
import '../css/orderprintpg.css'
import Sidebar from '../components/customerProfile_includes/Sidebar'
import Topbar from '../components/customerProfile_includes/Topbar'


class CustomerProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id: '',
            name: '',
            email: '',
            address: '',
            phone: '',
            user_type: '',
            hideside:false
        }
    }
    componentDidMount(){
    let user = JSON.parse(localStorage.getItem('logisticsuser'))
        if(user){
            this.setState({
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                user_type: user['user_type']
            
        })
        }

    }
    render(){
        return(
            <div id ='page-top'>
            <div id="wrapper">
            <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">    
                        <div id="content">
                                <Topbar  />
                            <div className="container-fluid">
                                <div className="card shadow mb-4">
                                    <div className="card-body">
                                        <div className="paper__cnt text-dark">
        
        
                                            <div className="updateModalSection" style={{display: "flex", justifyContent: "flex-end", width: "100%",  marginBottom: "30px"}}>
        
                                                <button type="button" className="btn btn-primary" style={{width: "fit-content", marginRight: "10px"}} data-toggle="modal" data-target="#staticBackdrop">
                                                    <i className="fas fa-user-edit"></i>
                                                    Update Details
                                                </button>
        
                                                <button type="button" className="btn btn-primary" style={{width: "fit-content"}}>
                                                    <i className="fas fa-print"></i>
                                                    Print Details
                                                </button>
                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="staticBackdropLabel">Modify your details</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <form action="profile.php" method="POST">
                                                                <div className="modal-body">
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputEmail1">Name</label>
                                                                        <input type="name" name="name" value = {this.state.name} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputPassword1">Email address</label>
                                                                            <input type="email" name="email" value={this.state.email} className="form-control" id="exampleInputPassword1" required readonly />
                                                                        <input type="hidden" name="uid" value = {this.state.id} className="form-control" id="exampleInputPassword1" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputPassword1">Address</label>
                                                                        <input type="text" name="address" value = {this.state.address} className="form-control" id="exampleInputPassword1" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputPassword1">Phone number</label>
                                                                            <input type="text" name="phone" value={this.state.phone}className="form-control" id="exampleInputPassword1" />
                                                                    </div>
            
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                    <button type="submit" className="btn btn-primary" name="profile">Submit</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
        
                                            <div className="img__cnt">
                                                <img src="images/252-2524695_dummy-profile-image-jpg-hd-png-download.png" alt="" />
                                            </div>
                                            <div className="paper__cntDetails">
                                                <div>Name</div>
                                                    <div>{this.state.name}</div>
                                            </div>
                                            <div className="paper__cntDetails">
                                                <div>Address</div>
                                                    <div>{this.state.address}</div>
                                            </div>
                                            <div className="paper__cntDetails">
                                                <div>Email Address</div>
                                                    <div>{this.state.email}</div>
                                            </div>
                                            <div className="paper__cntDetails">
                                                <div>Phone number</div>
                                                    <div>{this.state.phone}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
        
                        </div>
        
        
                      
        
                    </div>
                   
        
                </div><a className="scroll-to-top rounded" href="#page-top">
                
                        <i className="fas fa-angle-up"></i>
                    </a>
                   
                    </div>
        
        )
    }
}

// const CustomerProfile = () => {
//     let user = JSON.parse(localStorage.getItem('logisticsuser'))
//     console.log(user)
    

//     const [data, setData] = useState({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       address: user.address,
//       phone: user.phone,
//       user_type: user['user_type']
//     }) 
//     return ( 
//     )
// }

export default CustomerProfile
