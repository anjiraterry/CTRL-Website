import React from 'react'
import "./Signup.scss"

const Signup = () => {
  return (
    <div>
        <div>
            <div className='signup'>
                <div>
                    <form >
                        <div>
                            <label>Name</label>
                            <input/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input/>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input/>
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup