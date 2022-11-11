import Swal from 'sweetalert2'

export function isLoggedin() {
    let logistics=JSON.parse(localStorage.getItem('logisticsuser'))
    let status=true
    if (!logistics) {
        console.log('dffdfdfdf');
        window.location.href="/login"
        status=false
    }
    return status  
}
export function checkLoggedinDisplay() {
    let logistics=JSON.parse(localStorage.getItem('logisticsuser'))
    let status=true
    if (!logistics) {
        console.log('dffdfdfdf');
        status=false
    }
    return status  
}



export function isAdmin() {
    let logistics=JSON.parse(localStorage.getItem('logisticsuser'))
    if (logistics.user_type!==30) {
        // alert('not allowed to view data')
        notifyuser('Access Denied','You dont have permission to access this page','warning','/login')
        // window.location.href="/login"
    }
}
export function isAdminStatus() {
    let logistics=JSON.parse(localStorage.getItem('logisticsuser'))
    let status=false
    if (!logistics) {
        return status
    }
    if (logistics.user_type===30) {
        status=true
    }
    return status
}
export function isDriver() {
    let logistics=JSON.parse(localStorage.getItem('logisticsuser'))
    if (logistics.user_type!==20) {
        // alert('not allowed to view data')
        notifyuser('Access Denied','You dont have permission to access the driver page','warning','/login')
        // window.location.href="/login"
    }
}
export function isDriverStatus() {
    let logistics=JSON.parse(localStorage.getItem('logisticsuser'))
    let status=false
    if (!logistics) {
        return status
    }
    if (logistics.user_type===20) {
        status=true
    }
    return status
}

export function isCustomerStatus() {
    let logistics=JSON.parse(localStorage.getItem('logisticsuser'))
    let status=false
    if (!logistics) {
        return status
    }
    if (logistics.user_type===10) {
        status=true
    }
    return status
}

export function hideSidebar() {

    let rendermobile=document.querySelector('.rendermobile')
    if(rendermobile.style.display==='none'){
        rendermobile.style.display='block'
    }else{
        rendermobile.style.display='none'
    }
}



export function logOut() {
    localStorage.clear()
      notifyuser('Logging Out!','Please wait...','success','reload')
}


export function notifyuser(titleMsg,bodyMsg,iconType,urlLocation) {
    // alert notification
    Swal.fire({
      title: `${titleMsg}`,
      html:  `${bodyMsg}`,
      icon: `${iconType}`,
      timer: 3899,
      showConfirmButton: false,
      timerProgressBar: true,
    })

    setTimeout(() => {
        if(urlLocation==='reload'){
            window.location.reload()
        }else if(urlLocation==='error'){
            console.log('error')
        }else{
            window.location.href = `${urlLocation}`;
        }
    }, 3899);
  
}


  