import React from "react";
import "./HomeRules.css";

export default function HomeRules() {
  return (
    <>
      <div className="HomeRulesContainer">
        <div className="HomeRulesHeadline">
          <h1>Rules & Guidelines</h1>
        </div>
        <div className="ParagraphText">
          <p className="HomeRulesText">
            By joining EndPixel, you agree to adhere to all server rules. This
            ensures we preserve a fair, fun, and safe environment for all
            players while maintaining the integrity of our community. Our
            dedicated staff team enforces these rules, using their guidelines to
            issue appropriate consequences. Admins may take action for behavior
            not explicitly listed if they feel it disrupts the server's
            integrity.
          </p>
          <p className="HomeRulesText">
            These rules apply to all of our platforms, including the Minecraft
            server and Discord. While the guidelines below are general, they do
            not cover every possible scenario in detail. Punishments are based
            on the severity of the offense and any prior infractions.
          </p>
          <p className="HomeRulesText">
            If you believe someone is violating the rules, or if you wish to
            appeal a punishment, please submit a support ticket through our
            Discord server.
          </p>
          <div className="ButtonContainer">
<a href="https://discordapp.com/channels/1222638701721555035/1268733801564082238" target="_blank" rel="noreferrer"><button type="button">Take me to discord</button></a>
          </div>
        </div>

      </div>
    </>
  );
}
