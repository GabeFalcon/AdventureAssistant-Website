import React from 'react';
import './CommandsGuide.css';

const CommandsGuide = () => {
    function smoothScroll(event) {
        event.preventDefault();
        const id = event.currentTarget.getAttribute("href");
        document.querySelector(`${id}`).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    
    return (
        <div className="bot-commands-page">
          <h1 className='sources'>Commands Guide</h1>
    
          <div className="table-of-contents">
        <div className="column-box">
          <div className="column">
            <ul>
              <li><a href="#dice-roll-command" onClick={(event) => smoothScroll(event)}>Dice Roll Command</a></li>
              <li><a href="#class-list-command" onClick={(event) => smoothScroll(event)}>Class List Command</a></li>
              <li><a href="#class-command" onClick={(event) => smoothScroll(event)}>Class Command</a></li>
              <li><a href="#monster-command" onClick={(event) => smoothScroll(event)}>Monster Command</a></li>
              <li><a href="#random-encounter-command" onClick={(event) => smoothScroll(event)}>Random Encounter Command</a></li>
              <li><a href="#spell-list-command" onClick={(event) => smoothScroll(event)}>Spell List Command</a></li>
              <li><a href="#spell-command" onClick={(event) => smoothScroll(event)}>Spell Command</a></li>
              <li><a href="#random-spell-command" onClick={(event) => smoothScroll(event)}>Random Spell Command</a></li>
            </ul>
          </div>
        </div>
        <div className="column-box">
          <div className="column">
            <ul>
              <li><a href="#equipment-command" onClick={(event) => smoothScroll(event)}>Equipment Command</a></li>
              <li><a href="#weapon-command" onClick={(event) => smoothScroll(event)}>Weapon Command</a></li>
              <li><a href="#armor-command" onClick={(event) => smoothScroll(event)}>Armor Command</a></li>
              <li><a href="#magic-items-list-command" onClick={(event) => smoothScroll(event)}>Magic Items List Command</a></li>
              <li><a href="#magic-item-command" onClick={(event) => smoothScroll(event)}>Magic Item Command</a></li>
              <li><a href="#shop-command" onClick={(event) => smoothScroll(event)}>Shop Command</a></li>
              <li><a href="#feat-list-command" onClick={(event) => smoothScroll(event)}>Feat List Command</a></li>
              <li><a href="#feat-command" onClick={(event) => smoothScroll(event)}>Feat Command</a></li>
            </ul>
          </div>
        </div>
        <div className="column-box">
          <div className="column">
            <ul>
              <li><a href="#gameinfo-list-command" onClick={(event) => smoothScroll(event)}>Game Info List Command</a></li>
              <li><a href="#game-info-command" onClick={(event) => smoothScroll(event)}>Game Info Command</a></li>
              <li><a href="#race-list-command" onClick={(event) => smoothScroll(event)}>Race List Command</a></li>
              <li><a href="#race-command" onClick={(event) => smoothScroll(event)}>Race Command</a></li>
              <li><a href="#background-list-command" onClick={(event) => smoothScroll(event)}>Background List Command</a></li>
              <li><a href="#background-command" onClick={(event) => smoothScroll(event)}>Background Command</a></li>
              <li><a href="#condition-list-command" onClick={(event) => smoothScroll(event)}>Condition List Command</a></li>
              <li><a href="#condition-command" onClick={(event) => smoothScroll(event)}>Condition Command</a></li>
            </ul>
          </div>
        </div>
      </div>

      <CommandSection
        id="dice-roll-command"
        title="DICE ROLL COMMAND"
        description="The dice roll command is here to make your dice rolling life easier! Simply type in /roll and input '[Amount of dice] d [Dice Type]'. Example: 4d4"
        additionalInfo="The dice roller can also add your modifiers to it! Just add a '+' with your modifier and roll away!"
        imageSrc="/images/Open5eLogo.png" 
      />

      <CommandSection
        id="class-list-command"
        title="CLASS LIST COMMAND"
        description="Need to see what the available classes are? No problem! Type in /class_list and you're all done!"
        additionalInfo="Need info on the class? Try /class [Class Name]!"
        imageSrc="/images/Open5eLogo.png" 
      />

      <CommandSection
        id="class-command"
        title="CLASS COMMAND"
        description="When you need information about a class type in /class [Class Name]. Example: /class Bard"
        additionalInfo="This command will provide the Spell Casting Ability, Proficiencies, Saving Throws, and a Leveling Table."
        imageSrc="/images/Open5eLogo.png" 
      />

      <CommandSection
        id="monster-command"
        title="MONSTER COMMAND"
        description="The perfect command when you encounter an enemy you know nothing about! Just try /monster [Name] and check it out! Example: /monster Goblin"
        additionalInfo="Challenge Rating, Size, Armor Class, HP, Speed, and much more is displayed!"
        imageSrc="/images/Open5eLogo.png" 
      />

      <CommandSection
        id="random-encounter-command"
        title="RANDOM ENCOUNTER COMMAND"
        description="Need a random encounter? Simply type /random_encounter with a specified challenge rating and get ready for battle!!"
        additionalInfo="Challenge rating varies from party to party so make sure you don't accidently KO your adventure!"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="spell-list-command"
        title="SPELL LIST COMMAND"
        description="/spell_list [Class Name] will give you all the spells available to a class. Example: /spell_list Bard"
        additionalInfo="This command is to help know which spells can be learnt by each class"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="spell-command"
        title="SPELL COMMAND"
        description="If you want information on a spell, /spell [Name] will display valuable information on any spell! Example: /spell Fireball"
        additionalInfo="This will provide Damage, Range, and What Is Required."
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="random-spell-command"
        title="RANDOM SPELL COMMAND"
        description="Need to spice up your adventure with a bit of randomness? Try out /random_spell!"
        additionalInfo="A randomly selected spell will be generated and you may do what you wish with it!"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="equipment-command"
        title="EQUIPMENT COMMAND"
        description="/equipment will provide a list of armor and weapons."
        additionalInfo="Try out /weapon and /armor for information!"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="weapon-command"
        title="WEAPON COMMAND"
        description="Need information on a weapon? No problem! /weapon will display all the information you need on a weapon! Example: Whipsaw"
        additionalInfo="The Category, Damage, Properties, and Cost will be provided"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="armor-command"
        title="ARMOR COMMAND"
        description="Need information on some armor? No problem! /armor will display all the information you need on the armor! Example: Kite Shield"
        additionalInfo="The Category, AC, Requirements, and Cost will be provided"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="magic-items-list-command"
        title="MAGIC ITEMS LIST COMMAND"
        description="This command will provide a link to Open5e's list of magic items. /magic_items_list "
        additionalInfo="AdventureAssistant did not want to clutter the chat with an endless list of items, so a link is provided."
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="magic-item-command"
        title="MAGIC ITEM COMMAND"
        description="If you need information on a magic item, this is the command for you! /magic_item [Name] and the information will be provided! "
        additionalInfo="A description, the rarity, and the attunement requirement is provided."
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="shop-command"
        title="SHOP COMMAND"
        description="AdventureAssistant's favorite command! Generate a shop of random magic items of differenet rarities!"
        additionalInfo="Magic items do not have a specified cost to them, so the cost of the items is up to the Dungeon Master!"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="feat-list-command"
        title="FEAT LIST COMMAND"
        description="/feat_list will provide a list of all available feats."
        additionalInfo="Try /feat [Name] for information on a feat!"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="feat-command"
        title="FEAT COMMAND"
        description="Feats can be very helpful and make a character stand out. /feat [Name] will display all information about a feat!"
        additionalInfo=" "
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="gameinfo-list-command"
        title="GAME INFO LIST COMMAND"
        description="There's lots of game mechanics and information that can be overwhelming for a new player. AdventureAssistant is here to help those new players! Just type /game_info_list"
        additionalInfo="A list of mechanics and general information will be displayed."
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="game-info-command"
        title="GAME INFO COMMAND"
        description="Now that you know about what kinds of mechanics there are, try out /game_info [Name] to delve deeper into the game!"
        additionalInfo=" "
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="race-list-command"
        title="RACE LIST COMMAND"
        description="/race_list to display a list of races!"
        additionalInfo=" "
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="race-command"
        title="RACE COMMAND"
        description="/race [Name] will give you important information on a race."
        additionalInfo="Races come with unique abilities and modifiers so check them out!"
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="background-list-command"
        title="BACKGROUND LIST COMMAND"
        description="A list of available background for the players."
        additionalInfo="Some backgrounds can be used simply for flavor or offer some helpful abilities."
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="background-command"
        title="BACKGROUND COMMAND"
        description="Want more information on a background try /background [Name]!"
        additionalInfo=" "
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="condition-list-command"
        title="CONDITION LIST COMMAND"
        description="Provides a list of conditions that can be inflicted on players or monsters"
        additionalInfo=" "
        imageSrc="/images/Open5eLogo.png" 
      />

    <CommandSection
        id="condition-command"
        title="CONDITION COMMAND"
        description="Conditions can greatly impact the game and are important to know! /condition [Name] to learn about a condition. Example: /condition Blinded"
        additionalInfo="A description of the condition will be provided to help the player."
        imageSrc="/images/Open5eLogo.png" 
      />
    </div>
  );
};

const CommandSection = ({ id, title, description, additionalInfo, imageSrc }) => {
    return (
      <div id={id} className="command-section">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={imageSrc} alt={`${title} Picture`} />
        <p>{additionalInfo}</p>
      </div>
    );
  };
  

export default CommandsGuide;
