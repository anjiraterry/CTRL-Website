import React, { useState, useEffect, useContext } from 'react';
import Orders from '../../components/Admin/Orders/Orders';
import Insights from '../../components/Admin/Insights/Insights';
import Stock from '../../components/Admin/Stock/Stock';
import Transactions from '../../components/Admin/Transactions/Transactions';
import Users from '../../components/Admin/Users/Users';
import "./Admin.scss"

const Admin = () => {

    const [selected, setSelected] = useState(0);
    const menuItems = [
        "Orders",
        "Stock",
        "Users",
        "Transactions",
        "Insights",
      ];

      const components = [
        <Orders/>,
      <Stock />,
       <Users />,
       <Transactions />,
      <Insights />,
     ];



  return (
    <div>
         <div className='adminMenu' >
        {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`selectmenu ${
            selected === index ? 'select' : ' '
          }`}
        >
          {item}
        </div>
      ))}
    </div>
    <div className='adminComp'>
      { components[selected]}
      </div>
    </div>
  )
}

export default Admin