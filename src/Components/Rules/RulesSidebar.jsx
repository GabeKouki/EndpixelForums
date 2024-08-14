import React, { useState } from "react";
import './RulesSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShield } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons/faFortAwesome";
import { faX } from "@fortawesome/free-solid-svg-icons";




export default function RulesSidebar() {
    const [sidebarSize, setSidebarSize] = useState(false);

    const toggleSidebar = () => {
        setSidebarSize(prevState => !prevState);
    };

    return (
        <>
            <div className="RulesSidebarContainer">
                <div className={`SidebarContainer ${sidebarSize ? 'large' : ''}`}>
                    { !sidebarSize ?
                    <FontAwesomeIcon onClick={toggleSidebar} className="HamburgerIcon" icon={faBars} style={{ color: "#000000" }} size="2xl" /> :
<FontAwesomeIcon onClick={toggleSidebar} icon={faX} size="2xl" style={{color: "#000000",}} />
                    }
                    <div className="RulesIconContainer">
                    <div className="RulesIcon">
                    <FontAwesomeIcon icon={faShield} style={{ color: "#000000" }} size="2xl" />
                    {sidebarSize && <h2>Prisons Rules</h2>}
                    </div>
                    <div className="RulesIcon">
                    <FontAwesomeIcon icon={faFortAwesome} size="2xl" style={{color: "#000000",}} />
                    {sidebarSize && <h2>Factions Rules</h2>}
                    </div>
                    <div className="RulesIcon">
                    <FontAwesomeIcon icon={faDiscord} size="2xl" style={{color: "#000000",}} />
                    {sidebarSize && <h2>Discord Rules</h2>}
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
