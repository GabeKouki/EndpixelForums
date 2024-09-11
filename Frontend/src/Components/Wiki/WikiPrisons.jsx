import './WikiPrisons.css'
import React from 'react'
import Footer from '../Footer'
import { useState } from 'react'
import {
  FaChartLine,
  FaBullhorn,
  FaShieldAlt,
  FaWarehouse,
  FaTools,
  FaServer,
  FaBars,
  FaAngleDown,
  FaAngleUp,
} from 'react-icons/fa'

export default function WikiPrisons() {
  const [isActive, setIsActive] = useState(false)
  const [path, setPath] = useState('')

  const updatePath = (newPath) => {
    if (isActive === false) {
      setIsActive(true)
    }

    if (path === newPath) {
      setPath('')
    } else {
      setPath(newPath)
      console.log(newPath)
    }
  }
  return (
    <>
      <div className="PrisonsWikiContainer">
        <div className={`SidebarContainer ${isActive ? 'Active' : ''}`}>
          <div className="WikiHamburger">
            <FaBars size="lg" onClick={() => setIsActive(!isActive)} />
          </div>
          <div className="WikiSidebarContent">
            <div className="WikiSidebarItem" onClick={() => updatePath('Progression')}>
              <FaChartLine size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Progression</h1>
              {path !== 'Progression' && (
              <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />
              )}
              {path === "Progression" && (
                <FaAngleUp size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`}/>
              )}
            </div>
            {isActive && (
              <div className={`WikiSubItem ${path === 'Progression' ? 'Active' : ''}`}>
                <h1 className='WikiSubItemText'>Levels</h1>
                <h1 className='WikiSubItemText'>Experience</h1>
                <h1 className='WikiSubItemText'>Skills</h1>
                <h1 className='WikiSubItemText'>Stats</h1>
              </div>
            )}
            <div className="WikiSidebarItem" onClick={() => updatePath('Events')}>
              <FaBullhorn size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Events</h1>
              <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />
            </div>
            <div className="WikiSidebarItem" onClick={() => updatePath('PvP')}>
              <FaShieldAlt size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>PvP</h1>
              <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />
            </div>
            <div className="WikiSidebarItem" onClick={() => updatePath('Cells')}>
              <FaWarehouse size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Cells</h1>
              <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />
            </div>
            <div className="WikiSidebarItem" onClick={() => updatePath('Mechanics')}>
              <FaTools size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Mechanics</h1>
              <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />
            </div>
            <div className="WikiSidebarItem" onClick={() => updatePath('Server')}>
              <FaServer size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Server</h1>
              <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />
            </div>
          </div>
        </div>
        <div className="ContentContainer">
          <h1>Heyo</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}
