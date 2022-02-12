/**
* Takes all selected tokens and adds them to the combat tracker. Then rolls initiative for all NPC tokens.
*/
async function main() {
await canvas.tokens.toggleCombat();
game.combat.rollNPC({ messageOptions: { rollMode: CONST.DICE_ROLL_MODES.PRIVATE }})//game.combat.rollAll to roll all initiative//
}
main();

const data = {
"user": "character",
"actors": [],
"abilities": [],
"saves": [],
"skills": [],
"advantage": 0,
"mode": "roll",
"title": "Roll initiative!",
"message": "",
"formula": "",
"deathsave": false,
"initiative": true,
"tables": []
};
game.socket.emit('module.lmrtfy', data);
