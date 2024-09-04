import React from "react";
import "./GameplayRules.css";

export default function GameplayRules() {
  return (
    <>
      <div className="GameplayRulesContainer">
        <div className="GameplayRulesHeadline">
          <h1>Gameplay Rules</h1>
        </div>
        <div className="ParagraphText">
          <h1 className="RulesText">1. Gameplay Rules</h1>
          <p>
            <strong>
              Violation of most gameplay rules will result in a ban without
              warning.
            </strong>
          </p>

          <h2>1.1 Unfair Advantages</h2>
          <p>
            a. Using modifications or cheats that provide an unfair advantage is
            prohibited.
          </p>
          <p>
            b. Abusing or exploiting any bugs, even if well-known, is prohibited
            (e.g., duplication exploits, glitching into bases, enderpearl
            glitching).
          </p>
          <p>
            c. Using any method to boost statistics, such as abusing a bug or
            using multiple accounts, is prohibited.
          </p>
          <p>d. Teaming with players using disallowed mods is prohibited.</p>
          <p>
            e. All vanilla mechanics or exploits used for cave finding are used
            at your own risk; using them to locate players is strictly
            prohibited.
          </p>
          <p>
            f. Reloading shaders or using F3+A to locate players is prohibited.
          </p>
          <p>
            g. Using a mod or resource pack that reduces the opacity of lava is
            prohibited.
          </p>
          <p>
            h. Resource packs that outline ores for cosmetic purposes are
            allowed.
          </p>
          <p>
            i. The use of fullbright or gamma-enhancing mods or resource packs
            is allowed.
          </p>

          <h2>1.2 Gameplay/Playstyle Abuse</h2>
          <p>
            a. Trapping is allowed (e.g., obsidian trapping, derping), provided
            the player's head is not suffocating.
          </p>
          <p>
            b. Block-glitching into areas that other players cannot normally
            access is prohibited.
          </p>
          <p>c. Sabotaging teammates or insiding factions is prohibited.</p>
          <p>
            d. Creating inappropriate buildings or signs, including lag
            machines, is prohibited.
          </p>
          <p>e. Having B-claims is prohibited (including corners).</p>
          <p>f. Cross-server trading is prohibited.</p>
          <p>g. TP trapping under any circumstances is prohibited.</p>
          <p>h. Glitching into bases is prohibited.</p>
          <p>
            i. Using endperpearls to glitch into a place players can't get to is
            prohibited.
          </p>
          <p>
            j. Glitching or freezing your game to gain an advantage is
            prohibited.
          </p>
          <p>
            k. Selling, buying, or trading items on the server for real-life
            money is prohibited, including the discussion of such activities.
          </p>

          <h2>1.3 Account Misconduct</h2>
          <p>
            a. All players are responsible for their account and personal
            information, including any actions performed on the account. DO NOT
            share your account information or password with anyone.
          </p>
          <p>b. Use of inappropriate skins or usernames is prohibited.</p>
          <p>
            c. Harmful use or exploitation of server commands is prohibited.
          </p>
          <p>
            d. Selling, buying, or trading accounts on the server is prohibited,
            including the discussion of such activities.
          </p>
          <p>e. Charging back any payment to EndPixel is prohibited.</p>

          <h2>1.4 Player Impersonation</h2>
          <p>a. Impersonating any player is prohibited.</p>
          <p>b. Making a ban appeal for another player is prohibited.</p>

          <h2>1.5 Scamming</h2>
          <p>a. Scamming under any circumstances is prohibited.</p>
          <p>
            b. Renaming items to something they are not in /ah or in chat is
            prohibited.
          </p>

          <h2>1.6 Screensharing</h2>
          <p>
            a. Admins have the discretion to request a player to screenshare if
            they suspect a violation of the rules.
          </p>
          <p>
            b. Refusing to screenshare or cooperate during a screenshare is
            prohibited.
          </p>
          <p>
            c. Logging out, deleting files, disabling PC processes, or altering
            files while frozen or being screenshared is prohibited.
          </p>
          <p>d. Recording while being screenshared is prohibited.</p>

          <h2>1.7 Player Reports</h2>
          <p>
            a. Any player submitting a player report must have a clip/screenshot
            as evidence when making a report.
          </p>
          <p>
            b. All clips must be a minimum of 30 seconds long to be considered
            as "valid".
          </p>
          <p>c. False/Misleading reports will result in a ban.</p>

          <h2>1.8 Allowed Mods</h2>
          <p>a. The following mods are permitted for player use:</p>
          <p className="AllowedMods">1. Cooldown HUD mod</p>
          <p className="AllowedMods">2. Ping mod (for visuals)</p>
          <p className="AllowedMods">3. Durability alerts mod</p>
          <p className="AllowedMods">
            4. Any Lunar client mod (not including lunar's built-in macros)
          </p>
          <p>
            * If you feel that a mod should be added to this list, please reach
            out to the staff team, and they will be happy to review the request
            and make a proper determination. However, the mod will not be
            allowed to be used until it is officially approved and added to the
            list.
          </p>
          <h2>1.8.2 Allowed macros</h2>
          <p>a. /sell all</p>
          <p>b. /extract all</p>
          <p>c. /g ping</p>
        </div>
      </div>
    </>
  );
}
