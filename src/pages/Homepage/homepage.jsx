import React, { useContext } from 'react'
import Statistics from '../../components/statistics/statistics'
import StateContext from '../../context/useContext'
import './homepage.css'
export default function Homepage() {
    const {navStretch} = useContext(StateContext)
  return (
    <div className={navStretch?"ml-285":"ml-90"}>
        <div className="homepage">
            <Statistics/>
        </div>
    </div>
  )
}
