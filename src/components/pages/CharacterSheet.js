import React, { useState, useEffect } from 'react';
import '../../App.css';
import './CharacterSheet.css';

function CharacterSheetCreation() {
  const [character, setCharacter] = useState(() => {
    // Retrieve character data from localStorage on component mount
    const savedCharacter = localStorage.getItem('character');
    return savedCharacter ? JSON.parse(savedCharacter) : null;
  });

  useEffect(() => {
    // Save character data to localStorage whenever it changes
    localStorage.setItem('character', JSON.stringify(character));
  }, [character]);

  
  const handleAddCharacter = () => {
    const name = prompt('Enter character name:');
    if (name) {
      if (character) {
        const confirmDelete = window.confirm(
          'A character sheet already exists. Do you want to replace it?'
        );
        if (confirmDelete) {
          setCharacter(createCharacter(name));
        }
      } else {
        setCharacter(createCharacter(name));
      }
    }
  };

  const createCharacter = (name) => {
    return {
      name: name,
      class: '',
      level: '',
      background: '',
      playerName: '',
      race: '',
      alignment: '',
      abilityModifiers: {
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
      },
      inspiration: '',
      proficiencyBonus: '',
      savingThrows: {
        strength: false,
        dexterity: false,
        constitution: false,
        intelligence: false,
        wisdom: false,
        charisma: false,
      },
      skills: {
        acrobatics: false,
        animalHandling: false,
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        sleightOfHand: false,
        stealth: false,
        survival: false,
      },
      armorClass: '',
      speed: '',
      maxHitPoints: '',
      currentHitPoints: '',
      deathSaves: {
        successes: 0,
        failures: 0,
      },
      equipment: {
        cp: '',
        sp: '',
        ep: '',
        gp: '',
        pp: '',
        inventory: '',
      },
      notes: '',
      spellList: {
        cantrips: [],
        level1: [],
        level2: [],
        level3: [],
        level4: [],
        level5: [],
        level6: [],
        level7: [],
        level8: [],
        level9: [],
      },
    };
  };

  const handleDeleteCharacter = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete the character sheet?');
    if (confirmDelete) {
      setCharacter(null);
    }
  };

  return (
    <>
      <h1 className='sources'>Character Sheet</h1>
      <div className="App">
        <div className="left-section">
          <div className="center-button">
            <button onClick={handleAddCharacter}>Add Character</button>
          </div>
          {character && <button onClick={handleDeleteCharacter}>Delete Character</button>}
          {character && <CharacterSheet character={character} setCharacter={setCharacter} onDeleteCharacter={handleDeleteCharacter} />}
        </div>
      </div>
    </>
  );
}

function CharacterSheet({ character, setCharacter, onDeleteCharacter }) {

  useEffect(() => {
    if (character) {
      setSkillFilled(character.skills);
      setSavingThrowFilled(character.savingThrows);
    }
  }, [character]);

  // Update Death Saves
const handleDeathSave = (result) => {
  if (result === 'success') {
    setCharacter(prevCharacter => ({
      ...prevCharacter,
      deathSaves: {
        ...prevCharacter.deathSaves,
        successes: Math.min(prevCharacter.deathSaves.successes + 1, 3),
      },
    }));
  } else if (result === 'failure') {
    setCharacter(prevCharacter => ({
      ...prevCharacter,
      deathSaves: {
        ...prevCharacter.deathSaves,
        failures: Math.min(prevCharacter.deathSaves.failures + 1, 3),
      }
    }));
  }
};

  // Reset Death Saves
  const handleResetDeathSaves = () => {
    setCharacter(prevCharacter => ({
      ...prevCharacter,
      deathSaves: {
        successes: 0,
        failures: 0,
      }
    }));
  };

  // State variables to manage filled state of saving throws
  const [skillFilled, setSkillFilled] = useState({
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false,
  });

  const toggleSkill = (skill) => {
    setSkillFilled((prevState) => ({
      ...prevState,
      [skill]: !prevState[skill], // Toggle the filled state
    }));
  
    // Update the character object with the new filled state for the skill
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      skills: {
        ...prevCharacter.skills,
        [skill]: !prevCharacter.skills[skill], // Toggle the skill value
      },
    }));
  };


  // State variables to manage filled state of saving throws
  const [savingThrowFilled, setSavingThrowFilled] = useState({
    strength: false,
    dexterity: false,
    constitution: false,
    intelligence: false,
    wisdom: false,
    charisma: false,
  });

  const toggleSavingThrow = (savingThrow) => {
    setSavingThrowFilled((prevState) => ({
      ...prevState,
      [savingThrow]: !prevState[savingThrow], // Toggle the filled state
    }));
  
    // Update the character object with the new filled state for the saving throw
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      savingThrows: {
        ...prevCharacter.savingThrows,
        [savingThrow]: !prevCharacter.savingThrows[savingThrow], // Toggle the saving throw value
      },
    }));
  };

  // Function to calculate ability modifier
  const calculateModifier = (score, isProficient, proficiencyBonus) => {
    if (!score) {
      return ''; // Return empty string if score is not provided
    }
    let modifier = Math.floor((score - 10) / 2);
    
    // Add proficiency bonus if the skill or saving throw is proficient
    if (isProficient) {
      modifier += parseInt(proficiencyBonus) || 0;
    }
  
    return modifier > 0 ? `+${modifier}` : modifier.toString();
  };

  // User Inputs
  const handleInputChange = (event, field, nestedField = null, maxLength = null, min = null, max = null) => {
    let value = event.target.value;
    // Apply character limit if maxLength is specified and input type is text
    if (maxLength !== null && typeof value === 'string' && value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    // Ensure value is within the specified range if input type is number
    if (!isNaN(value)) {
      value = parseInt(value, 10); // Convert value to integer
      if (min !== null && value < min) {
        value = min;
      }
      if (max !== null && value > max) {
        value = max;
      }
    }

    if (nestedField) {
      setCharacter(prevCharacter => ({
        ...prevCharacter,
        [field]: {
          ...prevCharacter[field],
          [nestedField]: value
        }
      }));
    } else {
      setCharacter(prevCharacter => ({
        ...prevCharacter,
        [field]: value
      }));
    }
  };
  return (
    <div className='character-sheet-container'>
      <div className="character-sheet">
        <div className="top-section">
          <div className="basic-info">
            <div>
              <label>Character Name:</label>
              <input type="text" value={character.name} disabled />
            </div>
            <div>
              <label>Player Name:</label>
              <input
                type="text"
                value={character.playerName}
                onChange={(e) => handleInputChange(e, 'playerName', null, 20)}
              />
            </div>
            <div>
              <label>Class:</label>
              <input
                type="text"
                value={character.class}
                onChange={(e) => handleInputChange(e, 'class', null, 10)}
              />
            </div>
            <div>
              <label>Level:</label>
              <input
                type="text"
                value={character.level}
                onChange={(e) => handleInputChange(e, 'level', null, 3)}
              />
            </div>
          </div>
          <div className="background-info">
            <div>
              <label>Background:</label>
              <input
                type="text"
                value={character.background}
                onChange={(e) => handleInputChange(e, 'background', null, 25)}
              />
            </div>
            <div>
              <label>Race:</label>
              <input
                type="text"
                value={character.race}
                onChange={(e) => handleInputChange(e, 'race', null, 20)}
              />
            </div>
            <div>
              <label>Alignment:</label>
              <input
                type="text"
                value={character.alignment}
                onChange={(e) => handleInputChange(e, 'alignment', null, 20)}
              />
            </div>
          </div>
        </div>
        <div className="ability-info">
          <div>
            <label>Strength:</label>
            <input
              type="number"
              value={character.abilityModifiers.strength}
              onChange={(e) => handleInputChange(e, 'abilityModifiers', 'strength', null, 0, 30)}
            />
            <span>{calculateModifier(character.abilityModifiers.strength)}</span>
          </div>
          <div>
            <label>Dexterity:</label>
            <input
              type="number"
              value={character.abilityModifiers.dexterity}
              onChange={(e) => handleInputChange(e, 'abilityModifiers', 'dexterity', null, 0, 30)}
            />
            <span>{calculateModifier(character.abilityModifiers.dexterity)}</span>
          </div>
          <div>
            <label>Constitution:</label>
            <input
              type="number"
              value={character.abilityModifiers.constitution}
              onChange={(e) => handleInputChange(e, 'abilityModifiers', 'constitution', null, 0, 30)}
            />
            <span>{calculateModifier(character.abilityModifiers.constitution)}</span>
          </div>
          <div>
            <label>Intelligence:</label>
            <input
              type="number"
              value={character.abilityModifiers.intelligence}
              onChange={(e) => handleInputChange(e, 'abilityModifiers', 'intelligence', null, 0, 30)}
            />
            <span>{calculateModifier(character.abilityModifiers.intelligence)}</span>
          </div>
          <div>
            <label>Wisdom:</label>
            <input
              type="number"
              value={character.abilityModifiers.wisdom}
              onChange={(e) => handleInputChange(e, 'abilityModifiers', 'wisdom', null, 0, 30)}
            />
            <span>{calculateModifier(character.abilityModifiers.wisdom)}</span>
          </div>
          <div>
            <label>Charisma:</label>
            <input
              type="number"
              value={character.abilityModifiers.charisma}
              onChange={(e) => handleInputChange(e, 'abilityModifiers', 'charisma', null, 0, 30)}
            />
            <span>{calculateModifier(character.abilityModifiers.charisma)}</span>
          </div>
        </div>
        <div className="inspiration-proficiency">
          <div>
            <label>Inspiration:</label>
            <input
              type="text"
              value={character.inspiration}
              onChange={(e) => handleInputChange(e, 'inspiration', null, 5)}
            />
          </div>
          <div>
            <label>Proficiency Bonus:</label>
            <input
              type="text"
              value={character.proficiencyBonus}
              onChange={(e) => handleInputChange(e, 'proficiencyBonus', null, 2)}
            />
          </div>
        </div>
        <div className="saving-throws-skills">
          <div className='saving-throws'>
            <h3>Saving Throws:</h3>
            <div>
              <label>Strength:</label>
              <span onClick={() => toggleSavingThrow('strength')} className={`saving-throw-circle ${savingThrowFilled.strength ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.strength, savingThrowFilled.strength, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Dexterity:</label>
              <span onClick={() => toggleSavingThrow('dexterity')} className={`saving-throw-circle ${savingThrowFilled.dexterity ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.dexterity, savingThrowFilled.dexterity, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Constitution:</label>
              <span onClick={() => toggleSavingThrow('constitution')} className={`saving-throw-circle ${savingThrowFilled.constitution ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.constitution, savingThrowFilled.constitution, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Intelligence:</label>
              <span onClick={() => toggleSavingThrow('intelligence')} className={`saving-throw-circle ${savingThrowFilled.intelligence ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.intelligence, savingThrowFilled.intelligence, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Wisdom:</label>
              <span onClick={() => toggleSavingThrow('wisdom')} className={`saving-throw-circle ${savingThrowFilled.wisdom ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.wisdom, savingThrowFilled.wisdom, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Charisma:</label>
              <span onClick={() => toggleSavingThrow('charisma')} className={`saving-throw-circle ${savingThrowFilled.charisma ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.charisma, savingThrowFilled.charisma, character.proficiencyBonus)}</span>
            </div>
          </div>
          <div className='skills'>
            <h3>Skills:</h3>
            <div>
              <label>Acrobatics:</label>
              <span onClick={() => toggleSkill('acrobatics')} className={`saving-throw-circle ${skillFilled.acrobatics ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.dexterity, skillFilled.acrobatics, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Animal Handling:</label>
              <span onClick={() => toggleSkill('animalHandling')} className={`saving-throw-circle ${skillFilled.animalHandling ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.wisdom, skillFilled.animalHandling, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Arcana:</label>
              <span onClick={() => toggleSkill('arcana')} className={`saving-throw-circle ${skillFilled.arcana ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.intelligence, skillFilled.arcana, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Athletics:</label>
              <span onClick={() => toggleSkill('athletics')} className={`saving-throw-circle ${skillFilled.athletics ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.strength, skillFilled.athletics, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Deception:</label>
              <span onClick={() => toggleSkill('deception')} className={`saving-throw-circle ${skillFilled.deception ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.charisma, skillFilled.deception, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>History:</label>
              <span onClick={() => toggleSkill('history')} className={`saving-throw-circle ${skillFilled.history ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.intelligence, skillFilled.history, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Insight:</label>
              <span onClick={() => toggleSkill('insight')} className={`saving-throw-circle ${skillFilled.insight ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.wisdom, skillFilled.insight, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Intimidation:</label>
              <span onClick={() => toggleSkill('intimidation')} className={`saving-throw-circle ${skillFilled.intimidation ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.charisma, skillFilled.intimidation, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Investigation:</label>
              <span onClick={() => toggleSkill('investigation')} className={`saving-throw-circle ${skillFilled.investigation ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.intelligence, skillFilled.investigation, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Medicine:</label>
              <span onClick={() => toggleSkill('medicine')} className={`saving-throw-circle ${skillFilled.medicine ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.wisdom, skillFilled.medicine, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Nature:</label>
              <span onClick={() => toggleSkill('nature')} className={`saving-throw-circle ${skillFilled.nature ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.intelligence, skillFilled.nature, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Perception:</label>
              <span onClick={() => toggleSkill('perception')} className={`saving-throw-circle ${skillFilled.perception ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.wisdom, skillFilled.perception, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Performance:</label>
              <span onClick={() => toggleSkill('performance')} className={`saving-throw-circle ${skillFilled.performance ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.charisma, skillFilled.performance, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Persuasion:</label>
              <span onClick={() => toggleSkill('persuasion')} className={`saving-throw-circle ${skillFilled.persuasion ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.charisma, skillFilled.persuasion, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Religion:</label>
              <span onClick={() => toggleSkill('religion')} className={`saving-throw-circle ${skillFilled.religion ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.intelligence, skillFilled.religion, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Sleight of Hand:</label>
              <span onClick={() => toggleSkill('sleightOfHand')} className={`saving-throw-circle ${skillFilled.sleightOfHand ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.dexterity, skillFilled.sleightOfHand, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Stealth:</label>
              <span onClick={() => toggleSkill('stealth')} className={`saving-throw-circle ${skillFilled.stealth ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.dexterity, skillFilled.stealth, character.proficiencyBonus)}</span>
            </div>
            <div>
              <label>Survival:</label>
              <span onClick={() => toggleSkill('survival')} className={`saving-throw-circle ${skillFilled.survival ? 'true' : 'false'}`}></span>
              <span className='save-number'>{calculateModifier(character.abilityModifiers.wisdom, skillFilled.survival, character.proficiencyBonus)}</span>
            </div>
          </div>
        </div>
        <div className="death-saves">
          <label>Death Saves:</label>
          <div>
              <span>Successes: {character.deathSaves.successes}</span>
              <button onClick={() => handleDeathSave('success')}>Success</button>
            </div>
            <div>
              <span>Failures: {character.deathSaves.failures}</span>
              <button onClick={() => handleDeathSave('failure')}>Failure</button>
            </div>
            <button onClick={handleResetDeathSaves}>Reset</button>
        </div>
        <div className="hit-points">
          <h3>Hit Points:</h3>
          <div>
            <label>Armor Class:</label>
            <input
              type="number"
              value={character.armorClass}
              onChange={(e) => handleInputChange(e, 'armorClass', null, 3)}
            />
          </div>
          <div>
            <label>Speed:</label>
            <input
              type="number"
              value={character.speed}
              onChange={(e) => handleInputChange(e, 'speed', null, 3)}
            />
          </div>
          <div>
            <label>Max Hit Points:</label>
            <input
              type="number"
              value={character.maxHitPoints}
              onChange={(e) => handleInputChange(e, 'maxHitPoints', null, 3)}
            />
          </div>
          <div>
            <label>Current Hit Points:</label>
            <input
              type="number"
              value={character.currentHitPoints}
              onChange={(e) => handleInputChange(e, 'currentHitPoints', null, 3)}
            />
          </div>
        </div>
        <div className="equipment-notes">
          <div>
            <label>Equipment:</label>
            <textarea
              value={character.equipment.inventory}
              onChange={(e) => handleInputChange(e, 'equipment', 'inventory', 100)}
            ></textarea>
          </div>
          <div>
            <label>Spell List:</label>
            <textarea className='spelllist'
              value={character.notes}
              onChange={(e) => handleInputChange(e, 'notes', null, 300)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterSheetCreation;
