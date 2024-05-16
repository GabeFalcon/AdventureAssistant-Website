import React from 'react';
import '../../App.css';
import './Commands.css';

export default function Commands() {
    const commands = [
        { command: '/roll', description: 'Roll some dice!' },
        { command: '/music', description: 'An excellent selection of music from Tabletop Audio!' },
        { command: '/class_list', description: 'List of all classes' },
        { command: '/class', description: 'Display information about a class' },
        { command: '/monster', description: 'Display information about a monster' },
        { command: '/random_encounter', description: 'Create a random encounter' },
        { command: '/spell_list', description: 'List of spells for a specific class' },
        { command: '/spell', description: 'Display information about a spell' },
        { command: '/random_spell', description: 'Generate a random spell' },
        { command: '/equipment', description: 'Display a list of equipment' },
        { command: '/weapon', description: 'Display information about a weapon' },
        { command: '/armor', description: 'Display information about armor' },
        { command: '/magic_items_list', description: 'List of magic items' },
        { command: '/magic_item', description: 'Display information about a magic item' },
        { command: '/shop', description: 'Generate a shop with random magic items' },
        { command: '/feat_list', description: 'List of feats' },
        { command: '/feat', description: 'Display information about a feat' },
        { command: '/gameinfo_list', description: 'List of game mechanics and more' },
        { command: '/game_info', description: 'Display information about a game mechanic and more' },
        { command: '/race_list', description: 'List of races' },
        { command: '/race', description: 'Display information about a race' },
        { command: '/background_list', description: 'List of backgrounds' },
        { command: '/background', description: 'Display information about a background' },
        { command: '/condition_list', description: 'List of conditions' },
        { command: '/condition', description: 'Display information about a condition' }
    ];

    return (
        <div className="commands-container">
            <h1 className='commands'>Commands</h1>
            <div className='guide-description-card'>
            <h1>The list of commands to aid you on your adventure!</h1>
            </div>
            <div className="commands-list">
                {commands.map((cmd, index) => (
                    <div key={index} className="command-item">
                        <div className="command">{cmd.command}</div>
                        <div className="description">{cmd.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
