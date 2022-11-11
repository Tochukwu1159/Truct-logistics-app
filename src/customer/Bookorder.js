import React, { useState } from 'react'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import NaijaStates from 'naija-state-local-government'
import { isLoggedin, notifyuser } from '../util'



const Bookorder = () => {
  isLoggedin()
  let user = JSON.parse(localStorage.getItem('logisticsuser'))
  let [state, setState] = useState('State')
  let [lga, setLga] = useState('LGA')
  // let [setVehicle] = useState('Select Vehicle')

  const [allLgas, setAllLgas] = useState([])

  function handleStateChange(e) {
    let newState = e.target.value
    console.log(newState)
    setAllLgas(NaijaStates.lgas(newState).lgas)
    setState(newState)
  }

  // function handleVehicleChange(e) {
  //   let newState = e.target.value
  //   setVehicle(newState)
  //   console.log(newState)
  // }

  let handleLga = (e) => {
    let newState = e.target.value
    setLga(newState)
    console.log(newState)
  }

  const [data, setData] = useState({
    customer_id: '',
    phone: '',
    vehicle_type: '',
    pick_address: '',
    delivery_address: '',
    product_name: '',
    product_category: '',
    recipient_name: '',
    order_status: 'pending',
    weight: 0,
  })

  function handle(e) {
    const newdata = { ...data }
    console.log(e.target.id)
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  let body = {
    customer_id: user.id,
    pick_address: data.pick_address,
    delivery_address: data.delivery_address,
    product_name: data.product_name,
    product_category: data.product_category,
    recipient_name: data.recipient_name,
    weight: parseInt(data.weight),
    phone:data.phone,
    order_status:'pending'
  }
  

  console.log('current', body)

  const url = 'https://webappexpressnew.herokuapp.com/customer/bookorder'
  /* book order function starts */

  async function submitOrder(e) {
    e.preventDefault()
    console.log('inside function', body)
    if (!user.id) {
      alert('You need to have a user ID to register.')
      window.location.href = './login'
    }

    try {
      console.log(body,'hghghghgh');
      let result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      result = await result.json()
      console.log(result.data.avalaible_drivers)
      localStorage.setItem('user_orderDetails', JSON.stringify(result.data))
     return notifyuser('Processing Order', 'Please wait while we find an available driver', 'success','customer-drivers')
        // alert(`An available driver will be in touch with you soon`)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Header />
      <br />
      <br />
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={(e) => submitOrder(e)}>
              <div className='row'>
                <div className='col-sm-12 col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Item name
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      id='product_name'
                      value={data.product_name}
                      type='text'
                      name='product_name'
                      className='form-control'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Item Category
                    </label>
                    <select
                      name='product_category'
                      className='form-select form-select mb-3'
                      onChange={(e) => handle(e)}
                      value={data.product_category}
                      id='product_category'
                      aria-label='.form-select example'
                      required
                    >
                      <option selected id='product_category'>
                        Select Category
                      </option>
                      <option>Perishable food</option>
                      <option>Non-Perishable food</option>
                      <option>Household Upholstery</option>
                      <option>Chemicals/Drums</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className='col-sm-12 col-md-3'>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Items Weight(kg)
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      name='weight'
                      value={data.weight}
                      id='weight'
                      type='number'
                      className='form-control'
                      placeholder='weight in Kg'
                    />
                  </div>
                </div>

                <div className='col-sm-12 col-md-9'>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Pick up Address
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      id='pick_address'
                      value={data.pick_address}
                      type='text'
                      style={{ color: 'grey' }}
                      name='pick_address'
                      className='form-control'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>

              </div>
              <h5 className=''>Delivery Information</h5>
              <hr />
              <div className='row'>
                <div className='form-group col-4'>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    State
                  </label>
                  <select
                    onChange={handleStateChange}
                    value={state}
                    id='state'
                    ng-model='amount'
                    className='form-select form-select mb-3 required'
                    aria-label='form-select example'
                    required
                  >
                    <option selected value='State'>
                      State
                    </option>
                    {NaijaStates.states().map((state) => (<option value={state}>{state}</option>))}
                  </select>
                </div>

                <div className='form-group col-8'>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Local Govt
                  </label>
                  <div id='myDropdown' className='dropdown-content'>
                    <select
                      onChange={handleLga}
                      value={lga}
                      name='location'
                      className='form-select form-select mb-3'
                      aria-label='form-select example'
                      required
                    >
                      <option selected>LGA</option>
                      {allLgas.map((lga) => (
                        <option value={lga}>{lga}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1'>Delivery Address</label>
                <input
                  onChange={(e) => handle(e)}
                  type='text'
                  className='form-control'
                  id='delivery_address'
                  value={data.delivery_address}
                />
              </div>

              <div className='row'>
                <div className='col-sm-12 col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Receiver's Name
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      name='recipient_name'
                      value={data.recipient_name}
                      type='text'
                      className='form-control'
                      id='recipient_name'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Receiver's phone number
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      name='phone'
                      value={data.phone}
                      id='phone'
                      type='number'
                      className='form-control'
                    />
                  </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                  {/* <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Order Status
                    </label>
                    <input
                      name='order_status'
                      value={data.order_status}
                      id='order_status'
                      type='text'
                      className='form-control'
                      readOnly
                    />
                  </div> */}
                </div>
                <input name='uid' type='hidden' />

                <input name='name' type='hidden' />
                <input name='email' type='hidden' />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type='submit'
                  name='bookdelivery'
                  className='btn btn-primary submitbtncustom'
                  style={{ width: '100%', borderRadius: '2px' }}
                >
                  Book now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Bookorder
