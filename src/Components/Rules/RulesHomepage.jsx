import React, { useState } from "react";
import './RulesHomepage.css';
import RulesSidebar from "./RulesSidebar";




export default function RulesHomepage() {

    return (
        <>
        <div className="RulesHomepageContainer">
    <RulesSidebar />
    <div className="RulesHomepageContent">
<h1>Hi</h1>
<p>Welcome to the Rules Homepage. The sidebar is on the left, and the corresponding rules is on the right</p>
</div>
</div>
        </>
    );
}
