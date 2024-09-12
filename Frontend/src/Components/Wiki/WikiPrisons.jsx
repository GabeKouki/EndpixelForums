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

document.addEventListener('click', (event) => {
  console.log(event.target.tagName, event.target.getAttribute('href'))
  if (event.target.tagName !== 'A' || !event.target.getAttribute('href').startsWith('#')) {
    return
  }
  event.preventDefault()
  const element = document.querySelector(event.target.getAttribute('href'))
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    })
  }
})

export default function WikiPrisons() {
  const [isActive, setIsActive] = useState(false)
  const [path, setPath] = useState('')

  const handleHamburgerClick = () => {
    setIsActive(!isActive)
    if (path !== '') {
      setPath('')
    }
  }

  const updatePath = (newPath) => {
    if (isActive === false) {
      setIsActive(true)
    }

    if (path === newPath && !isActive) {
      return
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
            <FaBars size="lg" onClick={() => handleHamburgerClick()} />
          </div>

          <div className="WikiSidebarContent">
            <div className="WikiSidebarItem" onClick={() => updatePath('Progression')}>
              <FaChartLine size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Progression</h1>
              {path !== 'Progression' && <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
              {path === 'Progression' && <FaAngleUp size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
            </div>
            {isActive && (
              <div className={`WikiSubItem ${path === 'Progression' ? 'Active' : ''}`}>
                <a href="#pickaxes" className="WikiSubItemText">Pickaxes</a>
                <a href="#backpacks"className="WikiSubItemText">Backpacks</a>
                <h1 className="WikiSubItemText">Leveling</h1>
                <h1 className="WikiSubItemText">Endpixel Energy</h1>
                <h1 className="WikiSubItemText">Enchants</h1>
                <h1 className="WikiSubItemText">Boosters</h1>
                <h1 className="WikiSubItemText">Pickaxe Prestiging</h1>
                <h1 className="WikiSubItemText">Prestiging</h1>
              </div>
            )}
            <div className="WikiSidebarItem" onClick={() => updatePath('Events')}>
              <FaBullhorn size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Events</h1>
              {path !== 'Events' && <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
              {path === 'Events' && <FaAngleUp size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
            </div>
            {isActive && (
              <div className={`WikiSubItem ${path === 'Events' ? 'Active' : ''}`}>
                <h1 className="WikiSubItemText">Koth</h1>
                <h1 className="WikiSubItemText">Outpost</h1>
                <h1 className="WikiSubItemText">Piñata party</h1>
                <h1 className="WikiSubItemText">Crown Event</h1>
                <h1 className="WikiSubItemText">Envoys</h1>
                <h1 className="WikiSubItemText">Bosses</h1>
                <h1 className="WikiSubItemText">Conquest</h1>
                <h1 className="WikiSubItemText">Queen Bee</h1>
                <h1 className="WikiSubItemText">Dark Auction</h1>
              </div>
            )}
            <div className="WikiSidebarItem" onClick={() => updatePath('PvP')}>
              <FaShieldAlt size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>PvP</h1>
              {path !== 'PvP' && <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
              {path === 'PvP' && <FaAngleUp size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
            </div>
            {isActive && (
              <div className={`WikiSubItem ${path === 'PvP' ? 'Active' : ''}`}>
                <h1 className="WikiSubItemText">Levels</h1>
                <h1 className="WikiSubItemText">Experience</h1>
                <h1 className="WikiSubItemText">Skills</h1>
                <h1 className="WikiSubItemText">Stats</h1>
              </div>
            )}
            <div className="WikiSidebarItem" onClick={() => updatePath('Cells')}>
              <FaWarehouse size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Cells</h1>
              {path !== 'Cells' && <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
              {path === 'Cells' && <FaAngleUp size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
            </div>
            {isActive && (
              <div className={`WikiSubItem ${path === 'Cells' ? 'Active' : ''}`}>
                <h1 className="WikiSubItemText">Levels</h1>
                <h1 className="WikiSubItemText">Experience</h1>
                <h1 className="WikiSubItemText">Skills</h1>
                <h1 className="WikiSubItemText">Stats</h1>
              </div>
            )}
            <div className="WikiSidebarItem" onClick={() => updatePath('Mechanics')}>
              <FaTools size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Mechanics</h1>
              {path !== 'Mechanics' && <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
              {path === 'Mechanics' && <FaAngleUp size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
            </div>
            {isActive && (
              <div className={`WikiSubItem ${path === 'Mechanics' ? 'Active' : ''}`}>
                <h1 className="WikiSubItemText">Levels</h1>
                <h1 className="WikiSubItemText">Experience</h1>
                <h1 className="WikiSubItemText">Skills</h1>
                <h1 className="WikiSubItemText">Stats</h1>
              </div>
            )}
            <div className="WikiSidebarItem" onClick={() => updatePath('Server')}>
              <FaServer size="lg" />
              <h1 className={`${isActive ? 'Active' : ''}`}>Server</h1>
              {path !== 'Server' && <FaAngleDown size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
              {path === 'Server' && <FaAngleUp size="lg" className={`WikiArrow ${isActive ? 'Active' : ''}`} />}
            </div>
            {isActive && (
              <div className={`WikiSubItem ${path === 'Server' ? 'Active' : ''}`}>
                <h1 className="WikiSubItemText">Levels</h1>
                <h1 className="WikiSubItemText">Experience</h1>
                <h1 className="WikiSubItemText">Skills</h1>
                <h1 className="WikiSubItemText">Stats</h1>
              </div>
            )}
          </div>
        </div>
        <div className="ContentContainer">
          <div className="PrisonsWikiIntro">
            <h1>Welcome to the Prisons Wiki</h1>
            <p>
              This page will serve as a guide to the prisons gamemode. Use the icons on the left to navigate to
              different sections of the wiki.
            </p>
            <p>If you have any questions or suggestions, feel free to join our discord server and ask away!</p>
          </div>

          <div className="PrisonsWikiContent">
            <h1>1. Progression</h1>
            <p>
              Progression in the Prisons server refers to the process of advancing through the game's ranks and levels
              by mining, collecting resources, and completing tasks. As players progress, they unlock new mines, gear,
              abilities, and other in-game rewards that improve their performance and make gameplay more engaging. The
              more a player mines and upgrades, the higher their rank becomes, giving them access to better tools and
              areas within the game. Progression is key to dominating the server and becoming one of the top players.
            </p>
            <h2 id="pickaxes">1.1 Pickaxes</h2>
            <p>Pickaxes are an essential part of prisons. They are used to mine ores and progress as a player</p>
            <br />
            <p>As a player you are able to do the following with your pickaxes:</p>
            <ul>
              <li>Level up your pickaxe by filling it with energy and throwing it into the wormhole</li>
              <li>Apply custom enchants to your pickaxe at the wormhole</li>
              <li>Apply Charge orb slots to allow more charge orbs to be applied</li>
              <li>Apply Charge Orbs to your pickaxe to increase Energy/Shard gain</li>
              <li>Prestige your pickaxe, which resets its level, allowing you to gain buffs</li>
            </ul>
            <h3>Wood</h3>
            <p>This is the lowest Tier pickaxe, given to every player upon joining the server.</p>
            <ul>
              <li>This pickaxe can be used at level 1, most effective at mining coal, copper.</li>
            </ul>
            <h3>Stone</h3>
            <p>This is the second tier pickaxe, unlocked at level 30.</p>
            <ul>
              <li>This pickaxe can be used at level 30, most effective at mining lapis.</li>
            </ul>
            <h3>Gold</h3>
            <p>This is the third tier pickaxe, unlocked at level 50.</p>
            <ul>
              <li>This pickaxe can be used at level 50, most effective at mining redstone.</li>
            </ul>
            <h3>Iron</h3>
            <p>This is the fourth tier pickaxe, unlocked at level 70.</p>
            <ul>
              <li>This pickaxe can be used at level 70, most effective at mining gold.</li>
            </ul>
            <h3>Diamond</h3>
            <p>This is the fifth tier pickaxe, unlocked at level 90.</p>
            <ul>
              <li>This pickaxe can be used at level 90, most effective at mining diamond.</li>
            </ul>
            <h3>Ruby</h3>
            <p>This is the sixth tier pickaxe, unlocked at level 100.</p>
            <ul>
              <li>This pickaxe can be used at level 100, most effective at mining blackstone.</li>
            </ul>
            <br />
            <h2>1.1.2 Erasers</h2>
            <p>
              Erasers are a one-time-use item that can be used to remove a failure from a pickaxe. These are obtainable
              through lootboxes and events in-game. Drag and drop this item onto a pickaxe with a failure to x amount of
              failures (specified on the eraser).
            </p>
            <h2 id="backpacks">1.2 Backpacks</h2>
            <p>
              Backpacks is a wearable item that goes into your backpack slot. Backpacks are used to store ores gathered
              from mining in the mines and mining generators. You can upgrade your backpack to hold more ores, hold
              higher tiered ores, and sell for more per ore.
            </p>
            <h2>1.3 Leveling</h2>
            <p>
              Levels are the primary way for a user to progress through the game. The information below will help you
              begin your mining journey. This will show you exactly what level you need to be to use a certain
              Tool/Weapon/Armor.
            </p>
            <br />
            <h3 id="levels">Levels for using Armor/Pickaxes</h3>
            <ul>
              <li>Level 1: Wooden Pickaxe</li>
              <li>Level 10: Leather Armor</li>
              <li>Level 10: Wooden Weapons</li>
              <li>Level 30: Stone Pickaxe</li>
              <li>Level 30: Golden Armor/Weapons</li>
              <li>Level 50: Golden Pickaxe</li>
              <li>Level 60: Iron Weapons/Armor</li>
              <li>Level 70: Iron Pickaxe</li>
              <li>Level 90: Diamond Pickaxe</li>
              <li>Level 100: Ruby Pickaxe </li>
              <li>Level 100: Diamond Armor</li>
            </ul>
            <h3>Levels for mining specific Ores</h3>
            <ul>
              <li>Level 1-9: Coal Ore</li>
              <li>Level 10-29: Copper Ore</li>
              <li>Level 30-49: Lapis Ore</li>
              <li>Level 50-69: Redstone Ore</li>
              <li>Level 70-89: Gold Ore</li>
              <li>Level 90-99: Diamond Ore</li>
              <li>Level 100+: Blackstone Ore</li>
              <li>Level 100+: Celestial Ore</li>
            </ul>
            <h2>1.4 Energy</h2>
            <p>
              Energy is a massive resource and currency used throughout the game. Energy enables you to upgrade your
              pickaxe, purchase armor/weapon enchantments, and much more.
            </p>
            <h2>1.4.1 Obtaining Energy</h2>
            <p>Ways to obtain energy:</p>
            <ul>
              <li>Mining ores in the mines</li>
              <li>Contrabands</li>
              <li>Lootboxes</li>
              <li>Server Events</li>
              <li>Bosses</li>
              <li>Gkits</li>
            </ul>
            <h2>1.4.2 Spending Energy</h2>
            <p>Ways to spend energy:</p>
            <ul>
              <li>
                Wormhole: The wormhole is used to used to upgrade your pickaxe. Upgrading your pickaxe will increase its
                mining speed, give special effects, and more.
              </li>
              <li>
                Enchanter: The enchanter is your one stop shop for everything related to armor/weapons. You can purchase
                custom enchantments.
              </li>
              <li>EnergyShop: The energy shop is where you can purchase scrolls, trackers, and more.</li>
              <li>
                Celestial World: Celestial world is an exclusive mine to players who are level 100+. To enter this world
                you must have energy in your inventory as it consumes energy.
              </li>
              <li>
                Energy Enchants: Energy enchants are a special tier of enchantments that when used cost energy to
                activate. The energy must be in your inventory in order to activate these enchantments.
              </li>
            </ul>
            <h2>1.5 Mining Enchants</h2>
            <p>Mining enchants are used to increase the speed, ores, energy gain and much more of your pickaxe.</p>
            <ul>
              <li>Effeciency 1-5: </li>
              <li>Feed 1: </li>
              <li>Statistician 1: </li>
              <li>AutoSell 1-3: </li>
              <li>Ore Collector 1-5: </li>
              <li>Reinforced 1-3: </li>
              <li>Expedite: </li>
              <li>Transfuse: </li>
              <li>Shard Finder: </li>
              <li>Energy Collector:</li>
              <li>Fragment: </li>
              <li>Momentum: </li>
              <li>Replenish: </li>
              <li>Charged: </li>
              <li>Explosive: </li>
              <li>Fireball: </li>
              <li>Lucky: </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
