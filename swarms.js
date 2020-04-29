 function swarmResults (form)  {
  
 var pokemonChoices = [{
    name: 'Murkrow',
    code: 'Murkrow',
    gender: ["Male", "Female"],
    abilities: ["Insomnia", "Super Luck"],
    ha: ["<b>Prankster</b>"],
    type: ["Dark", "Flying"],
    tagged: ["Common", "Basic"],
    terrain: ["Woodland", "Urban"],
    egg: ["Flying"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/murkrow.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/murkrow.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/murkrow.png"],
    moveset: ["Peck", "Astonish", "Pursuit", "Haze", "Wing Attack", "Night Shade", "Assurance", "Taunt", "Feint Attack", "Mean Look", "Foul Play", "Tailwind"],
    eggMoves: ["<b>Whirlwind</b>", "<b>Drill Peck</b>", "<b>Mirror Move</b>", "<b>Wing Attack</b>", "<b>Sky Attack</b>", "<b>Confuse Ray</b>", "<b>Feather Dance</b>", "<b>Perish Song</b>", "<b>Psycho Shift</b>", "<b>Screech</b>", "<b>Brave Bird</b>", "<b>Roost</b>", "<b>Flatter</b>", "<b>Punishment</b>"]
  }, {
    name: 'Yamask',
    gender: ["Male","Female"],
    abilities: ["Mummy"],
    ha: ["<b>Mummy</b>"],
    code: 'Yamask',
    type: ["Ghost", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Cave"],
    egg: ["Mineral", "Amorphous"],
    evolution: 'Cofagrigus',
    level: 34,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/yamask.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/yamask.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/yamask.png"],
    moveset: ["Astonish", "Protect", "Disable", "Haze", "Night Shade", "Hex", "Will-o-wisp", "Ominous Wind", "Curse", "Power Split", "Guard Split", "Shadow Ball", "Grudge", "Mean Look", "Destiny Bond"],
    eggMoves: ["<b>Memento</b>", "<b>Fake Tears</b>", "<b>Nasty Plot</b>", "<b>Endure</b>", "<b>Heal Block</b>", "<b>Imprison</b>", "<b>Nightmare</b>", "<b>Disable</b>", "<b>Ally Switch</b>", "<b>Toxic Spikes</b>", "<b>Crafty Shield</b>"]
  }, {
    name: 'Litwick',
    gender: ["Male", "Female"],
    abilities: ["Flash Fire", "Flame Body"],
    ha: ["<b>Infiltrator</b>"],
    code: 'Litwick',
    type: ["Ghost", "Fire"],
    tagged: ["Common", "Basic"],
    terrain: ["Urban"],
    egg: ["Amorphous"],
    evolution: 'Lampent',
    level: 41,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/litwick.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/litwick.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/litwick.png"],
    moveset: ["Ember", "Astonish", "Minimize", "Smog", "Fire Spin", "Confuse Ray", "Night Shade", "Will-o-wisp", "Flame Burst", "Imprison", "Hex", "Memento", "Inferno", "Curse", "Shadow Ball"],
    eggMoves: ["<b>Acid Armor</b>", "<b>Heat Wave</b>", "<b>Haze</b>", "<b>Endure</b>", "<b>Captivate</b>", "<b>Acid</b>", "<b>Clear Smog</b>", "<b>Power Split</b>"]
  }, {
    name: 'Vulpix',
    gender: ["Male", "Female"],
    abilities: ["Flash Fire"],
    ha: ["<b>Drought</b>"],
    code: 'Vulpix',
    type: ["Fire", ""],
    tagged: ["Rare", "Basic"],
    terrain: ["Grasslands", "Woodland"],
    egg: ["Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/vulpix.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/vulpix.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/vulpix.png"],
    moveset: ["Ember", "Roar", "Baby-Doll Eyes", "Quick Attack", "Confuse Ray", "Fire Spin", "Payback", "Will-o-wisp", "Feint Attack", "Hex", "Flame Burst", "Extrasensory", "Safeguard", "Flamethrower", "Imprison", "Fire Blast", "Captivate", "Inferno"],
    eggMoves: ["<b>Feint Attack</b>", "<b>Hypnosis</b>", "<b>Flail</b>", "<b>Disable</b>", "<b>Howl</b>", "<b>Heat Wave</b>", "<b>Flare Blitz</b>", "<b>Power Swap</b>", "<b>Secret Power</b>", "<b>Hex</b>", "<b>Tail Slap</b>"]
  }, {
    name: 'Vulpix',
    gender: ["Male", "Female"],
    abilities: ["Snow Cloak"],
    ha: ["<b>Snow Warning</b>"],
    code: 'Vulpix-A',
    type: ["Ice", ""],
    tagged: ["Rare", "Basic"],
    terrain: ["Tundra", "Mountain"],
    egg: ["Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/vulpix_alola.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/vulpix_alola.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/vulpix_alola.png"],
    moveset: ["Powder Snow", "Roar", "Baby-Doll Eyes", "Ice Shard", "Confuse Ray", "Icy Wind", "Payback", "Mist", "Feint Attack", "Hex", "Aurora Beam", "Extrasensory", "Safeguard", "Ice Beam", "Imprison", "Blizzard", "Grudge", "Captivate", "Sheer Cold"],
    eggMoves: ["<b>Agility</b>", "<b>Charm</b>", "<b>Disable</b>", "<b>Encore</b>", "<b>Extrasensory</b>", "<b>Flail</b>", "<b></b>", "<b>Freeze-Dry</b>", "<b>Howl</b>", "<b>Hypnosis</b>", "<b>Moonblast</b>", "<b>Pwer Swap</b>", "<b>Spite</b>", "<b>Secret Power</b>", "<b>Tail Slap</b>"]
  }, {
    name: 'Pidgey',
    code: 'Pidgey',
    gender: ["Male","Female"],
    abilities: ["Keen Eye", "Tangled Feet"],
    ha: ["<b>Big Pecks</b>"],
    type: ["Normal", "Flying"],
    tagged: ["Common", "Basic"],
    terrain: ["Grasslands", "Woodland"],
    egg: ["Flying"],
    evolution: 'Pidgeotto',
    level: 18,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/pidgey.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/pidgey.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/pidgey.png"],
    moveset: ["Sand Attack", "Gust", "Quick Attack", "Whirlwind", "Twister", "Feather Dance","Agility","Wing Attack","Roost","Tailwind", "Mirror Move", "Air Slash"],
    eggMoves: ["<b>Pursuit</b>", "<b>Feint Attack</b>", "<b>Foresight</b>", "<b>Steel Wing</b>", "<b>Air Cutter</b>", "<b>Brave Bird</b>", "<b>Uproar</b>", "<b>Defog</b>"]
  }, {
    name: 'Skiddo',
    code: 'Skiddo',
    gender: ["Male","Female"],
    abilities: ["Sap Sipper"],
    ha: ["<b>Grass Pelt</b>"],
    type: ["Grass", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Grasslands"],
    egg: ["Field"],
    evolution: 'Gogoat',
    level: 32,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/skiddo.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/skiddo.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/skiddo.png"],
    moveset: ["Vine Whip", "Leech Seed", "Razor Leaf", "Worry Seed", "Synthesis", "Take Down", "Bulldoze", "Seed Bomb", "Bulk Up", "Double Edge", "Horn Leech", "Leaf Blade", "Milk Drink"],
    eggMoves: ["<b>Defense Curl</b>", "<b>Rollout</b>", "<b>Grassy Terrain</b>"]
  }, {
    name: 'Feebas',
    gender: ["Male", "Female"],
    abilities: ["Swift Swim", "Swift Swim", "Swift Swim", "Oblivious"],
    ha: ["<b>Adaptability</b>"],
    code: 'Feebas',
    type: ["Water", ""],
    tagged: ["Rare", "Basic"],
    terrain: ["Freshwater"],
    egg: ["Water 1", "Dragon"],
    evolution: 'Milotic',
    level: 35,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/feebas.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/feebas.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/feebas.png"],
    moveset: ["Splash", "Tackle", "Flail"],
    eggMoves: ["<b>Brine</b>", "<b>Captivate</b>", "<b>Confuse Ray</b>", "<b>Dragon Breath</b>", "<b>Dragon Pulse</b>", "<b>Haze</b>", "<b>Hypnosis</b>", "<b>Iron Tail</b>", "<b>Mirror Coat</b>", "<b>Mist</b>", "<b>Mud Sport</b>", "<b>Tickle</b>"]
  }, {
    name: 'Snom',
    gender: ["Male", "Female"],
    abilities: ["Shield Dust"],
    ha: ["<b>Ice Scales</b>"],
    code: 'Snom',
    type: ["Ice", "Bug"],
    tagged: ["Common", "Basic"],
    terrain: ["Tundra"],
    egg: ["Bug"],
    evolution: 'Frosmoth',
    level: 45,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/snom.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/snom.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/snom.png"],
    moveset: [""],
    eggMoves: ["<b>Fairy Wind</b>", "<b>Mirror Coat</b>", "<b>Bug Bite</b>"]
  }, {
    name: 'Toxel',
    gender: ["Male", "Female"],
    abilities: ["Rattled", "Static"],
    ha: ["<b>Klutz</b>"],
    code: 'Toxel',
    type: ["Electric", "Poison"],
    tagged: ["Common", "Basic"],
    terrain: ["Rough"],
    egg: ["Cannot Breed"],
    evolution: 'Toxtricity',
    level: 30,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/toxel.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/toxel.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/toxel.png"],
    moveset: [""],
    eggMoves: ["<b>Endeavor</b>", "<b>Metal Sound</b>", "<b>Power-Up Punch</b>"]
  }, {
    name: 'Snubbull',
    gender: ["Male","Female"],
    abilities: ["Intimidate", "Run Away"],
    ha: ["<b>Rattled</b>"],
    code: 'Snubbull',
    type: ["Fairy", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Urban"],
    egg: ["Field"],
    evolution: 'Granbull',
    level: 23,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/snubbull.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/snubbull.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/snubbull.png"],
    moveset: ["Later"],
    eggMoves: ["<b>Metronome</b>", "<b>Feint Attack</b>", "<b>Present</b>", "<b>Crunch</b>", "<b>Heal Bell</b>", "<b>Snore</b>", "<b>Smelling Salts</b>", "<b>Close Combat</b>", "<b>Ice Fang</b>", "<b>Fire Fang</b>", "<b>Thunder Fang</b>", "<b>Focus Punch</b>", "<b>Double Edge</b>", "<b>Mimic</b>", "<b>Fake Tears</b>"]
  }, {
    name: 'Stufful',
    gender: ["Male", "Female"],
    abilities: ["Fluffy", "Klutz"],
    ha: ["<b>Cute Charm</b>"],
    code: 'Stufful',
    type: ["Fighting", "Normal"],
    tagged: ["Common", "Basic"],
    terrain: ["Woodland"],
    egg: ["Field"],
    evolution: 'Bewear',
    level: 27,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/stufful.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/stufful.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/stufful.png"],
    moveset: ["Bide", "Baby-Doll Eyes", "Brutal Swing", "Flail", "Payback", "Take Down", "Hammer Arm", "Thrash", "Pain Split", "Double-Edge", "Superpower"],
    eggMoves: ["<b>Endure</b>", "<b>Force Palm</b>", "<b>Ice Punch</b>", "<b>Mega Kick</b>", "<b>Stomping Tantrum</b>", "<b>Thunder Punch</b>", "<b>Wide Guard</b>"]
  }, {
    name: 'Bulbasaur',
    code: 'Bulbasaur',
    gender: ["Male", "Female"],
    abilities: ["Overgrow"],
    ha: ["<b>Chlorophyll</b>"],
    type: ["Grass","Poison"],
    tagged: ["Rare", "Basic"],
    terrain: ["Meadow", "Forest"],
    egg: ["Monster", "Grass"],
    evolution: 'Ivysaur',
    level: 16,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/bulbasaur.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/bulbasaur.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/bulbasaur.png"],
    moveset: ["Vine Whip", "Poison Powder", "Sleep Powder", "Take Down", "Razor Leaf", "Sweet Scent", "Growth", "Double Edge", "Worry Seed", "Synthesis", "Seed Bomb"],
    eggMoves: ["<b>Skull Bash</b>", "<b>Charm</b>", "<b>Petal Dance</b>", "<b>Magical Leaf</b>", "<b>Grasswhistle</b>", "<b>Curse</b>", "<b>Ingrain</b>", "<b>Nature Power</b>", "<b>Amnesia</b>", "<b>Leaf Storm</b>", "<b>Power Whip</b>", "<b>Sludge</b>", "<b>Endure</b>", "<b>Giga Drain</b>", "<b>Grassy Terrain</b>"]
  }, {
    name: 'Cleffa',
    gender: ["Male","Female"],
    abilities: ["Cute Charm", "Magic Guard", "Magic Guard", "Magic Guard"],
    ha: ["<b>Friend Guard</b>"],
    code: 'Cleffa',
    type: ["Fairy", ""],
    tagged: ["Very Rare", "Basic"],
    terrain: ["Cave", "Mountain"],
    egg: ["Cannot Breed"], 
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/cleffa.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/cleffa.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/cleffa.png"],
    moveset: ["Pound", "Charm", "Encore", "Sing", "Sweet Kiss", "Copycat", "Magical leaf"],
    eggMoves: ["<b>Amnesia</b>", "<b>Aromatherapy</b>", "<b>Belly Drum</b>", "<b>Covet</b>", "<b>Fake Tears</b>", "<b>Heal Pulse</b>", "<b>Metronome</b>", "<b>Mimic</b>", "<b>Misty Terrain</b>", "<b>Present</b>", "<b>Splash</b>", "<b>Stored Power</b>", "<b>Tickle</b>", "<b>Wish</b>"]
  }, {
    name: 'Mime Jr.',
    code: 'MimeJr',
    gender: ["Male","Female"],
    abilities: ["Soundproof","Filter"],
    ha: ["<b>Technician</b>"],
    type: ["Psychic", "Fairy"],
    tagged: ["Common", "Basic"],
    terrain: ["Tundra"],
    egg: ["Cannot Breed"],
    evolution: 'MrMime-G',
    level: 16,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/mimejr.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/mimejr.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/mimejr.png"],
    moveset: ["Tickle", "Barrier", "Confusion", "Meditate", "Copycat", "Double Slap", "Mimic", "Encore", "Light Screen", "Reflect", "Psybeam", "Substitute", "Psychic", "Role Play", "Baton Pass", "Safeguard"],
    eggMoves: ["<b>Future Sight</b>", "<b>Hypnosis</b>", "<b>Fake Out</b>", "<b>Confuse Ray</b>", "<b>Wake-Up Slap</b>", "<b>Teeter Dance</b>", "<b>Healing Wish</b>", "<b>Charm</b>", "<b>Nasty Plot</b>", "<b>Power Split</b>", "<b>Magic Room</b>", "<b>Icy Wind</b>", "<b>Psychic Terrain</b>"]
  }, {
    name: 'Mime Jr.',
    code: 'MimeJr',
    gender: ["Male","Female"],
    abilities: ["Soundproof","Filter"],
    ha: ["<b>Technician</b>"],
    type: ["Psychic", "Fairy"],
    tagged: ["Common", "Basic"],
    terrain: ["Tundra"],
    egg: ["Cannot Breed"],
    evolution: 'MrMime',
    level: 16,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/mimejr.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/mimejr.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/mimejr.png"],
    moveset: ["Tickle", "Barrier", "Confusion", "Meditate", "Copycat", "Double Slap", "Mimic", "Encore", "Light Screen", "Reflect", "Psybeam", "Substitute", "Psychic", "Role Play", "Baton Pass", "Safeguard"],
    eggMoves: ["<b>Future Sight</b>", "<b>Hypnosis</b>", "<b>Fake Out</b>", "<b>Confuse Ray</b>", "<b>Wake-Up Slap</b>", "<b>Teeter Dance</b>", "<b>Healing Wish</b>", "<b>Charm</b>", "<b>Nasty Plot</b>", "<b>Power Split</b>", "<b>Magic Room</b>", "<b>Icy Wind</b>", "<b>Psychic Terrain</b>"]
  }, {
    name: 'Yamper',
    gender: ["Male", "Female"],
    abilities: ["Ball Fetch"],
    ha: ["<b>Rattled</b>"],
    code: 'Yamper',
    type: ["Electric", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Urban"],
    egg: ["Field"],
    evolution: 'Boltund',
    level: 25,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/yamper.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/yamper.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/yamper.png"],
    moveset: [""],
    eggMoves: ["<b>Double-Edge</b>", "<b>Sand Attack</b>", "<b>Flame Charge</b>", "<b>Discharge</b>", "<b>Howl</b>"]
  }, {
    name: 'Alomomola',
    gender: ["Male", "Female"],
    abilities: ["Healer", "Hydration"],
    ha: ["<b>Regenerator</b>"],
    code: 'Alomomola',
    type: ["Water", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Ocean"],
    egg: ["Water 1", "Water 2"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/alomomola.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/alomomola.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/alomomola.png"],
    moveset: ["Play Nice", "Hydro Pump", "Wide Guard", "Healing Wish", "Helping Hand", "Water Sport", "Aqua Ring", "Aqua Jet", "Double Slap", "Heal Pulse", "Protect", "Wish", "Soak", "Wake-Up Slap", "Water Pulse", "Brine", "Whirlpool", "Safeguard"],
    eggMoves: ["<b>Endure</b>", "<b>Mirror Coat</b>", "<b>Mist</b>", "<b>Pain Split</b>", "<b>Refresh</b>", "<b>Tickle</b>"]
  }, {
    name: 'Heracross',
    code: 'Heracross',
    gender: ["Male", "Female"],
    abilities: ["Swarm", "Guts"],
    ha: ["<b>Moxie</b>"],
    type: ["Bug", "Fighting"],
    tagged: ["Basic", "Rare"],
    terrain: ["Jungle"],
    egg: ["Bug"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/heracross.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/heracross.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/heracross.png"],
    moveset: ["Nah"],
    eggMoves: ["<b>Harden</b>", "<b>Flail</b>", "<b>Bide</b>", "<b>Revenge</b>", "<b>Pursuit</b>", "<b>Double Edge</b>", "<b>Seismic Toss</b>", "<b>Focus Punch</b>", "<b>Rock Blast</b>"]
  }, {
    name: 'Eiscue',
    gender: ["Male", "Female"],
    abilities: ["Ice Face"],
    ha: ["Ice Face"],
    code: 'Eiscue',
    type: ["Ice", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Tundra"],
    egg: ["Water 1", "Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/eiscue.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/eiscue.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/eiscue.png"],
    moveset: [""],
    eggMoves: ["<b>Soak</b>", "<b>Aqua Ring</b>", "<b>Belly Drum</b>", "<b>Icicle Crash</b>", "<b>Double-Edge</b>", "<b>Head Smash</b>"]
  }, {
    name: 'Drilbur',
    gender: ["Male","Female"],
    abilities: ["Sand Rush", "Sand Force"],
    ha: ["<b>Mold Breaker</b>"],
    code: 'Drilbur',
    type: ["Ground", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Cave", "Rough"],
    egg: ["Field"],
    evolution: 'Excadrill',
    level: 31,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/drilbur.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/drilbur.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/drilbur.png"],
    moveset: ["Mud Sport", "Rapid Spin", "Mud-Slap", "Metal Claw", "Dig", "Hone Claws", "Slash", "Rock Slide", "Earthquake", "Swords Dance", "Sandstorm", "Drill Run", "Fissure"],
    eggMoves: ["<b>Crush Claw</b>", "<b>Earth Power</b>", "<b>Iron Defense</b>", "<b>Metal Sound</b>", "<b>Rapid Spin</b>", "<b>Rock Climb</b>", "<b>Skull Bash</b>", "<b>Submission</b>"]
  }, {
    name: 'Buneary',
    gender: ["Male","Female"],
    abilities: ["Run Away", "Klutz", "Run Away", "Klutz", "<b>Limber</b>"],
    ha: ["<b>Limber</b>"],
    code: 'Buneary',
    type: ["Normal", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Meadow"],
    egg: ["Field", "Human-Like"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/buneary.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/buneary.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/buneary.png"],
    moveset: ["Frustration", "Defense Curl", "Foresight", "Endure", "Baby-Doll Eyes", "Quick Attack", "Jump Kick", "Baton Pass", "Agility", "Dizzy Punch", "Entrainment", "Charm"],
    eggMoves: ["<b>Fake Tears</b>", "<b>Fake Out</b>", "<b>Sweet Kiss</b>", "<b>Double Hit</b>", "<b>Low Kick</b>", "<b>Encore</b>", "<b>Sky Uppercut</b>", "<b>Ice Punch</b>", "<b>Thunder Punch</b>", "<b>Fire Punch</b>", "<b>Flail</b>", "<b>Focus Punch</b>", "<b>Circle Throw</b>", "<b>Copycat</b>", "<b>Teeter Dance</b>", "<b>Cosmic Power</b>", "<b>Mud Sport</b>", "<b>Power-Up Punch</b>"]
  }, {
    name: 'Lotad',
    gender: ["Male", "Female"],
    abilities: ["Swift Swim", "Rain Dish"],
    ha: ["<b>Own Tempo</b>"],
    code: 'Lotad',
    type: ["Water", "Grass"],
    tagged: ["Common", "Basic"],
    terrain: ["Marsh", "Freshwater"],
    egg: ["Water 1", "Grass"],
    evolution: 'Lombre',
    level: 14,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/lotad.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/lotad.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/lotad.png"],
    moveset: ["Astonish", "Absorb", "Bubble", "Natural Gift", "Mist", "Mega Drain", "Bubble Beam", "Nature Power", "Rain Dance", "Giga Drain", "Zen Headbutt", "Energy Ball"],
    eggMoves: ["<b>Counter</b>", "<b>Flail</b>", "<b>Leech Seed</b>", "<b>Razor Leaf</b>", "<b>Sweet Scent</b>", "<b>Synthesis</b>", "<b>Teeter Dance</b>", "<b>Tickle</b>", "<b>Water Gun</b>"]
  }, {
    name: 'Skitty',
    code: 'Skitty',
    gender: ["Male", "Female"],
    abilities: ["Cute Charm", "Normalize", "Normalize", "Normalize"],
    ha: ["<b>Wonder Skin</b>"],
    type: ["Normal", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Urban"],
    egg: ["Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/skitty.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/skitty.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/skitty.png"],
    moveset: ["Fake Out", "Foresight", "Sing", "Attract", "Disarming Voice", "Double Slap", "Copycat", "Feint Attack", "Charm", "Wake-Up Slap", "Assist", "Covet", "Heal Bell", "Double Edge", "Captivate", "Play Rough"],
    eggMoves: ["<b>Helping Hand</b>", "<b>Uproar</b>", "<b>Fake Tears</b>", "<b>Wish</b>", "<b>Baton Pass</b>", "<b>Tickle</b>", "<b>Last Resort</b>", "<b>Fake Out</b>", "<b>Zen Headbutt</b>", "<b>Sucker Punch</b>", "<b>Mud Bomb</b>", "<b>Simple Beam</b>", "<b>Captivate</b>", "<b>Cosmic Power</b>"]
  }, {
    name: 'Nosepass',
    gender: ["Male","Female"],
    abilities: ["Sturdy", "Magnet Pull"],
    ha: ["<b>Sand Force</b>"],
    code: 'Nosepass',
    type: ["Rock", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Cave", "Mountain"],
    egg: ["Mineral"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/nosepass.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/nosepass.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/nosepass.png"],
    moveset: ["Harden", "Block", "Rock Throw", "Thunder Wave", "Rest", "Spark", "Rock Slide", "Power Gem", "Rock Blast", "Discharge", "Sandstorm", "Earth Power", "Stone Edge", "Lock-On", "Zap Cannon"],
    eggMoves: ["<b>Block</b>", "<b>Double-Edge</b>", "<b>Endure</b>", "<b>Magnitude</b>", "<b>Rollout</b>", "<b>Stealth Rock</b>", "<b>Wide Guard</b>"]
  }, {
    name: 'Exeggcute',
    gender: ["Male", "Female"],
    abilities: ["Chlorophyll"],
    ha: ["<b>Harvest</b>"],
    code: 'Exeggcute',
    type: ["Grass", "Psychic"],
    tagged: ["Common", "Basic"],
    terrain: ["Forest", "Dragon Den"],
    egg: ["Grass"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/exeggcute.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/exeggcute.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/exeggcute.png"],
    moveset: ["Barrage", "Uproar", "Hypnosis", "Reflect", "Leech Seed", "Bullet Seed", "Stun Spore", "Poison Powder", "Sleep Powder", "Confusion", "Worry Seed", "Natural Gift", "Solar Beam", "Extrasensory"],
    eggMoves: ["<b>Ancient Power</b>", "<b>Block</b>", "<b>Curse</b>", "<b>Giga Drain</b>", "<b>Grassy Terrain</b>", "<b>Ingrain</b>", "<b>Leaf Storm</b>", "<b>Lucky Chant</b>", "<b>Natural Gift</b>", "<b>Moonlight</b>", "<b>Nature Power</b>", "<b>Power Swap</b>", "<b>Skill Swap</b>", "<b>Synthesis</b>"]
  }, {
    name: 'Gossifleur',
    gender: ["Male", "Female"],
    abilities: ["Cotton Down", "Regenerator"],
    ha: ["<b>Effect Spore</b>"],
    code: 'Gossifleur',
    type: ["Grass", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Meadow"],
    egg: ["Grass"],
    evolution: 'Eldegoss',
    level: 20,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/gossifleur.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/gossifleur.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/gossifleur.png"],
    moveset: [""],
    eggMoves: ["<b>Growth</b>", "<b>Leech Seed</b>", "<b>Worry Seed</b>", "<b>Poison Powder</b>", "<b>Stun Spore</b>", "<b>Sleep Powder</b>"]
  }, {
    name: 'Skarmory',
    gender: ["Male","Female"],
    abilities: ["Keen eye", "Sturdy"],
    ha: ["<b>Weak Armor</b>"],
    code: 'Skarmory',
    type: ["Steel", "Flying"],
    tagged: ["Rare", "Basic"],
    terrain: ["Mountain"],
    egg: ["Flying"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/skarmory.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/skarmory.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/skarmory.png"],
    moveset: ["Peck", "Sand Attack", "Air Cutter", "Metal Claw", "Fury Attack", "Feint", "Swift", "Spikes", "Agility", "Steel Wing", "Slash", "Metal Sound", "Air Slash", "Autotomize"],
    eggMoves: ["<b>Assurance</b>", "<b>Brave Bird</b>", "<b>Curse</b>", "<b>Drill Peck</b>", "<b>Endure</b>", "<b>Guard Swap</b>", "<b>Pursuit</b>", "<b>Sky Attack</b>", "<b>Stealth Rock</b>", "<b>Whirlwind</b>"]
  }, {
    name: 'Torchic',
    code: 'Torchic',
    gender: ["Male", "Female"],
    abilities: ["Blaze"],
    ha: ["<b>Speed Boost</b>"],
    type: ["", "Fire"],
    tagged: ["Basic", "Rare"],
    terrain: ["Volcano", "Arid"],
    egg: ["Field"],
    evolution: 'Combusken',
    level: 16,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/torchic.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/torchic.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/torchic.png"],
    moveset: ["Ember", "Sand Attack", "Peck", "Fire Spin", "Quick Attack", "Flame Burst", "Focus Energy", "Slash", "Mirror Move", "Flamethrower"],
    eggMoves: ["<b>Counter</b>", "<b>Reversal</b>", "<b>Endure</b>", "<b>Smelling Salts</b>", "<b>Crush Claw</b>", "<b>Baton Pass</b>", "<b>Agility</b>", "<b>Night Slash</b>", "<b>Last Resort</b>", "<b>Feint</b>", "<b>Feather Dance</b>", "<b>Curse</b>", "<b>Low Kick</b>"]
  }
];


var Evolutions = [{
    name: 'Cofagrigus',
    gender: ["Male","Female"],
    abilities: ["Mummy"],
    ha: ["<b>Mummy</b>"],
    code: 'Cofagrigus',
    type: ["Ghost"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Ruins"],
    egg: ["Mineral", "Amorphous"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/cofagrigus.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/cofagrigus.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/cofagrigus.png"],
    moveset: ["Astonish", "Protect", "Disable", "Haze", "Night Shade", "Hex", "Will-o-wisp", "Ominous Wind", "Curse", "Power Split", "Guard Split", "Shadow Ball", "Grudge", "Scary Face"],
    eggMoves: ["<b>Memento</b>", "<b>Fake Tears</b>", "<b>Nasty Plot</b>", "<b>Endure</b>", "<b>Heal Block</b>", "<b>Imprison</b>", "<b>Nightmare</b>", "<b>Disable</b>", "<b>Ally Switch</b>", "<b>Toxic Spikes</b>", "<b>Crafty Shield</b>"]
  }, {
    name: 'Lampent',
    gender: ["Male", "Female"],
    abilities: ["Flash Fire", "Flame Body"],
    ha: ["<b>Infiltrator</b>"],
    code: 'Lampent',
    type: ["Ghost", "Fire"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Ruins"],
    egg: ["Amorphous"],
    evolution: 'Chandelure',
    level: 50,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/lampent.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/lampent.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/lampent.png"],
    moveset: ["Ember", "Astonish", "Minimize", "Smog", "Fire Spin", "Confuse Ray", "Night Shade", "Will-o-wisp", "Flame Burst", "Imprison", "Hex", "Memento", "Inferno", "Curse"],
    eggMoves: ["<b>Acid Armor</b>", "<b>Heat Wave</b>", "<b>Haze</b>", "<b>Endure</b>", "<b>Captivate</b>", "<b>Acid</b>", "<b>Clear Smog</b>", "<b>Power Split</b>"]
  }, {
    name: 'Chandelure',
    gender: ["Male", "Female"],
    abilities: ["Flash Fire", "Flame Body"],
    ha: ["<b>Infiltrator</b>"],
    code: 'Chandelure',
    type: ["Ghost", "Fire"],
    tagged: ["Evo", "Evo2"],
    terrain: ["Ruins"],
    egg: ["Amorphous"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/chandelure.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/chandelure.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special.png"],
    moveset: ["Pain Split", "Fire Spin", "Confuse Ray", "Night Shade", "Will-o-wisp", "Flame Burst", "Smog", "Hex", "Inferno", "Curse"],
    eggMoves: ["<b>Acid Armor</b>", "<b>Heat Wave</b>", "<b>Haze</b>", "<b>Endure</b>", "<b>Captivate</b>", "<b>Acid</b>", "<b>Clear Smog</b>", "<b>Power Split</b>"]
  }, {
    name: 'Gogoat',
    code: 'Gogoat',
    gender: ["Male","Female"],
    abilities: ["Sap Sipper"],
    ha: ["<b>Grass Pelt</b>"],
    type: ["Grass", ""],
    tagged: ["Evo", "Evo1"],
    terrain: ["Farmland"],
    egg: ["Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/gogoat.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/gogoat.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/gogoat.png"],
    moveset: ["Vine Whip", "Leech Seed", "Razor Leaf", "Worry Seed", "Synthesis", "Take Down", "Bulldoze", "Seed Bomb", "Bulk Up", "Double Edge", "Horn Leech", "Aerial Ace", "Earthquake"],
    eggMoves: ["<b>Defense Curl</b>", "<b>Rollout</b>", "<b>Grassy Terrain</b>"]
  }, {
    name: 'Pidgeotto',
    code: 'Pidgeotto',
    gender: ["Male","Female"],
    abilities: ["Keen Eye", "Tangled Feet"],
    ha: ["<b>Big Pecks</b>"],
    type: ["Normal", "Flying"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Foothills"],
    egg: ["Flying"],
    evolution: 'Pidgeot',
    level: 36,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/pidgeotto.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/pidgeotto.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/pidgeotto.png"],
    moveset: ["Sand Attack", "Gust", "Quick Attack", "Whirlwind", "Twister", "Feather Dance","Agility","Wing Attack","Roost","Tailwind", "Mirror Move"],
    eggMoves: ["<b>Pursuit</b>", "<b>Feint Attack</b>", "<b>Foresight</b>", "<b>Steel Wing</b>", "<b>Air Cutter</b>", "<b>Brave Bird</b>", "<b>Uproar</b>", "<b>Defog</b>"]
  }, {
    name: 'Pidgeot',
    code: 'Pidgeot',
    gender: ["Male","Female"],
    abilities: ["Keen Eye", "Tangled Feet"],
    ha: ["<b>Big Pecks</b>"],
    type: ["Normal", "Flying"],
    tagged: ["Evo", "Evo2"],
    terrain: ["Foothills"],
    egg: ["Flying"],
    evolution: 'None',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/pidgeot.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/pidgeot.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/pidgeot.png"],
    moveset: ["Sand Attack", "Gust", "Quick Attack", "Whirlwind", "Twister", "Feather Dance","Agility","Wing Attack","Roost","Tailwind", "Mirror Move", "Hurricane", "Air Slash"],
    eggMoves: ["<b>Pursuit</b>", "<b>Feint Attack</b>", "<b>Foresight</b>", "<b>Steel Wing</b>", "<b>Air Cutter</b>", "<b>Brave Bird</b>", "<b>Uproar</b>", "<b>Defog</b>"]
  }, {
    name: 'Granbull',
    gender: ["Male","Female"],
    abilities: ["Intimidate", "Quick Feet"],
    ha: ["<b>Rattled</b>"],
    code: 'Granbull',
    type: ["Fairy", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Urban"],
    egg: ["Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/granbull.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/granbull.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/granbull.png"],
    moveset: ["Later"],
    eggMoves: ["<b>Metronome</b>", "<b>Feint Attack</b>", "<b>Present</b>", "<b>Crunch</b>", "<b>Heal Bell</b>", "<b>Snore</b>", "<b>Smelling Salts</b>", "<b>Close Combat</b>", "<b>Ice Fang</b>", "<b>Fire Fang</b>", "<b>Thunder Fang</b>", "<b>Focus Punch</b>", "<b>Double Edge</b>", "<b>Mimic</b>", "<b>Fake Tears</b>"]
  }, {
    name: 'Bewear',
    gender: ["Male", "Female"],
    abilities: ["Fluffy", "Klutz"],
    ha: ["<b>Unnerve</b>"],
    code: 'Bewear',
    type: ["Fighting", "Normal"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Undergrowth"],
    egg: ["Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/bewear.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/bewear.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/bewear.png"],
    moveset: ["Bind", "Bide", "Baby-Doll Eyes", "Brutal Swing", "Flail", "Payback", "Take Down", "Hammer Arm", "Thrash", "Pain Split"],
    eggMoves: ["<b>Endure</b>", "<b>Force Palm</b>", "<b>Ice Punch</b>", "<b>Mega Kick</b>", "<b>Stomping Tantrum</b>", "<b>Thunder Punch</b>", "<b>Wide Guard</b>"]
  }, {
    name: 'Toxtricity',
    gender: ["Male", "Female"],
    abilities: ["Punk Rock", "Plus"],
    ha: ["<b>Technician</b>"],
    code: 'Toxtricity',
    type: ["Electric", "Poison"],
    tagged: ["Common", "Basic"],
    terrain: ["Rough"],
    egg: ["Human-Like"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/toxtricity.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/toxtricity.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/toxtricity.png"],
    moveset: [""],
    eggMoves: ["<b>Endeavor</b>", "<b>Metal Sound</b>", "<b>Power-Up Punch</b>"]
  }, {
    name: 'Frosmoth',
    gender: ["Male", "Female"],
    abilities: ["Shield Dust"],
    ha: ["<b>Ice Scales</b>"],
    code: 'Frosmoth',
    type: ["Ice", "Bug"],
    tagged: ["Rare", "Basic"],
    terrain: ["Tundra"],
    egg: ["Bug"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/frosmoth.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/frosmoth.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/frosmoth.png"],
    moveset: [""],
    eggMoves: ["<b>Fairy Wind</b>", "<b>Mirror Coat</b>", "<b>Bug Bite</b>"]
  }, {
    name: 'Ivysaur',
    code: 'Ivysaur',
    gender: ["Male", "Female"],
    abilities: ["Overgrow"],
    ha: ["<b>Chlorophyll</b>"],
    type: ["Grass","Poison"],
    tagged: ["Rare", "Evo"],
    terrain: ["Not Wild"],
    egg: ["Monster", "Grass"],
    evolution: 'Venusaur',
    level: 36,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/ivysaur.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/ivysaur.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/ivysaur.png"],
    moveset: ["Vine Whip", "Poison Powder", "Sleep Powder", "Take Down", "Razor Leaf", "Sweet Scent", "Growth", "Double Edge", "Worry Seed", "Synthesis", "Seed Bomb"],
    eggMoves: ["<b>Skull Bash</b>", "<b>Charm</b>", "<b>Petal Dance</b>", "<b>Magical Leaf</b>", "<b>Grasswhistle</b>", "<b>Curse</b>", "<b>Ingrain</b>", "<b>Nature Power</b>", "<b>Amnesia</b>", "<b>Leaf Storm</b>", "<b>Power Whip</b>", "<b>Sludge</b>", "<b>Endure</b>", "<b>Giga Drain</b>", "<b>Grassy Terrain</b>"]
  }, {
    name: 'Venusaur',
    code: 'Venusaur',
    gender: ["Male", "Female"],
    abilities: ["Overgrow"],
    ha: ["<b>Chlorophyll</b>"],
    type: ["Grass","Poison"],
    tagged: ["Rare", "Evo"],
    terrain: ["Not Wild"],
    egg: ["Monster", "Grass"],
    evolution: 'None',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/venusaur.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/venusaur.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/venusaur.png"],
    moveset: ["Frenzy Plant", "Sleep Powder", "Toxic", "Growth", "Double Edge", "Worry Seed", "Synthesis", "Seed Bomb", "Solarbeam", "Petal Blizzard", "Sunny Day", "Grass Knot", "Giga Drain", "Petal Dance", "Venoshock", "Sludge Bomb"],
    eggMoves: ["<b>Skull Bash</b>", "<b>Charm</b>", "<b>Petal Dance</b>", "<b>Magical Leaf</b>", "<b>Grasswhistle</b>", "<b>Curse</b>", "<b>Ingrain</b>", "<b>Nature Power</b>", "<b>Amnesia</b>", "<b>Leaf Storm</b>", "<b>Power Whip</b>", "<b>Sludge</b>", "<b>Endure</b>", "<b>Grassy Terrain</b>"]
  }, {
    name: 'Boltund',
    gender: ["Male", "Female"],
    abilities: ["Strong Jaw"],
    ha: ["<b>Rattled</b>"],
    code: 'Boltund',
    type: ["Electric", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Urban"],
    egg: ["Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/boltund.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/boltund.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/boltund.png"],
    moveset: [""],
    eggMoves: ["<b>Double-Edge</b>", "<b>Sand Attack</b>", "<b>Flame Charge</b>", "<b>Discharge</b>", "<b>Howl</b>"]
  }, {
    name: 'Mr. Mime',
    code: 'MrMime-G',
    gender: ["Male","Female"],
    abilities: ["Soundproof","Filter"],
    ha: ["<b>Technician</b>"],
    type: ["Psychic", "Ice"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Tundra"],
    egg: ["Human-Like"],
    evolution: 'MrRime',
    level: 42,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/mrmime_galar.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/mrmime_galar.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/mrmime_galar.png"],
    moveset: [""],
    eggMoves: ["<b>Future Sight</b>", "<b>Tickle</b>", "<b>Fake Out</b>", "<b>Confuse Ray</b>", "<b>Wake-Up Slap</b>", "<b>Teeter Dance</b>", "<b>Nasty Plot</b>", "<b>Power Split</b>", "<b>Magic Room</b>", "<b>Icy Wind</b>", "<b>Psychic Terrain</b>"]
  }, {
    name: 'Mr. Rime',
    code: 'MrRime',
    gender: ["Male","Female"],
    abilities: ["Tangled Feet","Screen Cleaner"],
    ha: ["<b>Ice Body</b>"],
    type: ["Psychic", "Ice"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Tundra"],
    egg: ["Human-Like"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/mrrime.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/mrrime.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/mrrime.png"],
    moveset: [""],
    eggMoves: ["<b>Future Sight</b>", "<b>Tickle</b>", "<b>Fake Out</b>", "<b>Confuse Ray</b>", "<b>Wake-Up Slap</b>", "<b>Teeter Dance</b>", "<b>Nasty Plot</b>", "<b>Power Split</b>", "<b>Magic Room</b>", "<b>Icy Wind</b>", "<b>Psychic Terrain</b>"]
  }, {
    name: 'Mr. Mime',
    code: 'MrMime',
    gender: ["Male","Female"],
    abilities: ["Soundproof","Filter"],
    ha: ["<b>Technician</b>"],
    type: ["Psychic", "Fairy"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Garden"],
    egg: ["Human-Like"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/mrmime.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/mrmime.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/mrmime.png"],
    moveset: ["Misty Terrain", "Magical Leaf", "Quick Guard", "Wide Guard", "Power Swap", "Guard Swap", "Barrier", "Confusion", "Meditate", "Copycat", "Double Slap", "Mimic", "Encore", "Psywave", "Light Screen", "Reflect", "Psybeam", "Substitute", "Psychic", "Role Play", "Baton Pass", "Safeguard"],
    eggMoves: ["<b>Future Sight</b>", "<b>Hypnosis</b>", "<b>Fake Out</b>", "<b>Confuse Ray</b>", "<b>Wake-Up Slap</b>", "<b>Teeter Dance</b>", "<b>Nasty Plot</b>", "<b>Power Split</b>", "<b>Magic Room</b>", "<b>Icy Wind</b>", "<b>Psychic Terrain</b>"]
  }, {
    name: 'Excadrill',
    gender: ["Male","Female"],
    abilities: ["Sand Rush", "Sand Force"],
    ha: ["<b>Mold Breaker</b>"],
    code: 'Excadrill',
    type: ["Steel", "Ground"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Caverns"],
    egg: ["Field"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/excadrill.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/excadrill.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/excadrill.png"],
    moveset: ["Mud Sport", "Rapid Spin", "Mud-Slap", "Metal Claw", "Dig", "Hone Claws", "Slash", "Rock Slide", "Earthquake", "Swords Dance", "Sandstorm", "Horn Drill", "Fury Swipes", "Rototiller"],
    eggMoves: ["<b>Crush Claw</b>", "<b>Earth Power</b>", "<b>Iron Defense</b>", "<b>Metal Sound</b>", "<b>Rapid Spin</b>", "<b>Rock Climb</b>", "<b>Skull Bash</b>", "<b>Submission</b>"]
  }, {
    name: 'Lombre',
    gender: ["Male", "Female"],
    abilities: ["Swift Swim", "Rain Dish"],
    ha: ["<b>Own Tempo</b>"],
    code: 'Lombre',
    type: ["Water", "Grass"],
    tagged: ["Evo", "Evo1"],
    terrain: ["Lakeside"],
    egg: ["Water 1", "Grass"],
    evolution: 'Ludicolo',
    level: 45,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/lombre.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/lombre.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/lombre.png"],
    moveset: ["Astonish", "Absorb", "Bubble", "Fury Swipes", "Fake Out", "Water Sport", "Bubble Beam", "Nature Power", "Uproar", "Knock Off", "Zen Headbutt", "Hydro Pump"],
    eggMoves: ["<b>Counter</b>", "<b>Flail</b>", "<b>Giga Drain</b>", "<b>Leech Seed</b>", "<b>Razor Leaf</b>", "<b>Sweet Scent</b>", "<b>Synthesis</b>", "<b>Teeter Dance</b>", "<b>Tickle</b>", "<b>Water Gun</b>"]
  }, {
    name: 'Eldegoss',
    gender: ["Male", "Female"],
    abilities: ["Cotton Down", "Regenerator"],
    ha: ["<b>Effect Spore</b>"],
    code: 'Eldegoss',
    type: ["Grass", ""],
    tagged: ["Common", "Basic"],
    terrain: ["Meadow"],
    egg: ["Grass"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/eldegoss.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/eldegoss.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/eldegoss.png"],
    moveset: [""],
    eggMoves: ["<b>Growth</b>", "<b>Leech Seed</b>", "<b>Worry Seed</b>", "<b>Poison Powder</b>", "<b>Stun Spore</b>", "<b>Sleep Powder</b>"]
  }, {
    name: 'Combusken',
    code: 'Combusken',
    gender: ["Male", "Female"],
    abilities: ["Blaze"],
    ha: ["<b>Speed Boost</b>"],
    type: ["Fire" ,"Fighting"],
    tagged: ["Rare", "Evo"],
    terrain: ["Not Wild"],
    egg: ["Field"],
    evolution: 'Blaziken',
    level: 36,
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/combusken.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/combusken.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/combusken.png"],
    moveset: ["Ember", "Sand Attack", "Peck", "Fire Spin", "Quick Attack", "Flame Burst", "Focus Energy", "Slash", "Mirror Move", "Flamethrower"],
    eggMoves: ["<b>Counter</b>", "<b>Reversal</b>", "<b>Endure</b>", "<b>Smelling Salts</b>", "<b>Crush Claw</b>", "<b>Baton Pass</b>", "<b>Agility</b>", "<b>Night Slash</b>", "<b>Last Resort</b>", "<b>Feint</b>", "<b>Feather Dance</b>", "<b>Curse</b>", "<b>Low Kick</b>"]
  }, {
    name: 'Blaziken',
    code: 'Blaziken',
    gender: ["Male", "Female"],
    abilities: ["Blaze"],
    ha: ["<b>Speed Boost</b>"],
    type: ["Fire", "Fighting"],
    tagged: ["Rare", "Evo"],
    terrain: ["Not Wild"],
    egg: ["Field"],
    evolution: 'None',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/blaziken.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/blaziken.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/blaziken.png"],
    moveset: ["Blaze Kick", "Double Kick", "High Jump Kick", "Fire Punch", "Flare Blitz", "Blast Burn", "Brick Break", "Fire Spin", "Quick Attack", "Flame Burst", "Focus Energy", "Slash", "Mirror Move", "Flamethrower", "Dual Chop", "Thunder Punch", "Bounce", "Focus Punch", "Laser Focus"],
    eggMoves: ["<b>Counter</b>", "<b>Reversal</b>", "<b>Endure</b>", "<b>Smelling Salts</b>", "<b>Crush Claw</b>", "<b>Baton Pass</b>", "<b>Agility</b>", "<b>Night Slash</b>", "<b>Last Resort</b>", "<b>Feint</b>", "<b>Feather Dance</b>", "<b>Curse</b>", "<b>Low Kick</b>"]
  }
  ];
  
  var StoneEvos = [{
    name: 'Honchkrow',
    code: 'Honchkrow',
    gender: ["Male", "Female"],
    abilities: ["Insomnia", "Super Luck"],
    ha: ["<b>Prankster</b>"],
    type: ["Flying", "Dark"],
    tagged: ["Rare", "Evo", "Evo1"],
    terrain: ["Woodland", "Urban"],
    egg: ["Flying"],
    prevo: 'Murkrow',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/honchkrow.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/honchkrow.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/honchkrow.png"],
    moveset: ["Night Slash", "Sucker Punch", "Assurance", "Astonish", "Pursuit", "Haze", "Wing Attack", "Taunt", "Feint Attack", "Mean Look", "Foul Play", "Swagger"],
    eggMoves: ["<b>Whirlwind</b>", "<b>Drill Peck</b>", "<b>Mirror Move</b>", "<b>Wing Attack</b>", "<b>Sky Attack</b>", "<b>Confuse Ray</b>", "<b>Feather Dance</b>", "<b>Perish Song</b>", "<b>Psycho Shift</b>", "<b>Screech</b>", "<b>Brave Bird</b>", "<b>Roost</b>", "<b>Flatter</b>", "<b>Punishment</b>"]
  }, {
    name: 'Milotic',
    gender: ["Male", "Female"],
    abilities: ["Marvel Scale", "Competitive"],
    ha: ["<b>Cute Charm</b>"],
    code: 'Milotic',
    type: ["Water"],
    tagged: ["Evo", "Evo1", "Very Rare"],
    terrain: ["Freshwater"],
    egg: ["Water 1", "Dragon"],
    prevo: 'Feebas',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/milotic.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/milotic.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/milotic.png"],
    moveset: ["Water Pulse", "Wrap", "Water Gun", "Water Sport", "Refresh", "Disarming Voice", "Twister", "Aqua Ring", "Captivate", "Dragon Tail", "Recover", "Aqua Tail", "Attract", "Safeguard", "Coil", "Hydro Pump", "Rain Dance"],
    eggMoves: ["<b>Brine</b>", "<b>Confuse Ray</b>", "<b>Dragon Breath</b>", "<b>Dragon Pulse</b>", "<b>Haze</b>", "<b>Hypnosis</b>", "<b>Iron Tail</b>", "<b>Mirror Coat</b>", "<b>Mist</b>", "<b>Mud Sport</b>", "<b>Tickle</b>"]
  }, {
    name: 'Ninetales',
    gender: ["Male", "Female"],
    abilities: ["Flash Fire"],
    ha: ["<b>Drought</b>"],
    code: 'Ninetales',
    type: ["Fire"],
    tagged: ["Evo", "Evo1", "Rare"],
    terrain: ["Woodland", "Grasslands"],
    egg: ["Field"],
    prevo: 'Vulpix',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/ninetales.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/ninetales.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/ninetales.png"],
    moveset: ["Nasty Plot", "Quick Attack", "Confuse Ray", "Fire Spin", "Will-o-wisp", "Hex", "Flame Burst", "Extrasensory", "Safeguard", "Flamethrower", "Imprison", "Captivate"],
    eggMoves: ["<b>Feint Attack</b>", "<b>Hypnosis</b>", "<b>Flail</b>", "<b>Disable</b>", "<b>Howl</b>", "<b>Heat Wave</b>", "<b>Flare Blitz</b>", "<b>Power Swap</b>", "<b>Secret Power</b>", "<b>Hex</b>", "<b>Tail Slap</b>"]
  }, {
    name: 'Ninetales',
    gender: ["Male", "Female"],
    abilities: ["Snow Cloak"],
    ha: ["<b>Snow Warning</b>"],
    code: 'Ninetales-A',
    type: ["Ice", "Fairy"],
    tagged: ["Evo", "Evo1", "Rare"],
    terrain: ["Tundra"],
    egg: ["Field"],
    prevo: 'Vulpix-A',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/ninetales_alola.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/ninetales_alola.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/ninetales_alola.png"],
    moveset: ["Dazzling Gleam", "Imprison", "Nasty Plot", "Ice Beam", "Ice Shard", "Confuse Ray", "Safeguard"],
    eggMoves: ["<b>Agility</b>", "<b>Charm</b>", "<b>Disable</b>", "<b>Encore</b>", "<b>Extrasensory</b>", "<b>Flail</b>", "<b></b>", "<b>Freeze-Dry</b>", "<b>Howl</b>", "<b>Hypnosis</b>", "<b>Moonblast</b>", "<b>Power Swap</b>", "<b>Spite</b>", "<b>Secret Power</b>", "<b>Tail Slap</b>"]
  }, {
    name: 'Frosmoth',
    gender: ["Male", "Female"],
    abilities: ["Shield Dust"],
    ha: ["<b>Ice Scales</b>"],
    code: 'Frosmoth',
    type: ["Ice", "Bug"],
    tagged: ["Rare", "Basic"],
    terrain: ["Tundra"],
    egg: ["Bug"],
    prevo: 'Snom',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/frosmoth.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/frosmoth.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/frosmoth.png"],
    moveset: [""],
    eggMoves: ["<b>Fairy Wind</b>", "<b>Mirror Coat</b>", "<b>Bug Bite</b>"]
  }, {
    name: 'Clefairy',
    gender: ["Male", "Female"],
    abilities: ["Cute Charm", "Magic Guard", "Magic Guard", "Magic Guard"],
    ha: ["<b>Friend Guard</b>"],
    code: 'Clefairy',
    type: ["Fairy"],
    tagged: ["Basic", "Very Rare"],
    terrain: ["Cave", "Mountain"],
    prevo: 'Cleffa',
    egg: ["Fairy"],
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/clefairy.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/clefairy.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/clefairy.png"],
    moveset: ["Spotlight", "Disarming Voice", "Encore", "Sing", "Double Slap", "Defense Curl", "Follow Me", "Bestow", "Wake-Up Slap", "Minimize", "Stored Power", "Metronome", "Cosmic Power", "Lucky Chant", "Body Slam", "Moonlight", "Moonblast", "Gravity", "Meteor Mash"],
    eggMoves: ["<b>Amnesia</b>", "<b>Aromatherapy</b>", "<b>Belly Drum</b>", "<b>Covet</b>", "<b>Fake Tears</b>", "<b>Heal Pulse</b>", "<b>Metronome</b>", "<b>Mimic</b>", "<b>Misty Terrain</b>", "<b>Present</b>", "<b>Splash</b>", "<b>Stored Power</b>", "<b>Tickle</b>", "<b>Wish</b>"]
  }, {
    name: 'Clefable',
    gender: ["Male", "Female"],
    abilities: ["Cute Charm", "Magic Guard", "Magic Guard", "Magic Guard"],
    ha: ["<b>Unaware</b>"],
    code: 'Clefable',
    type: ["Fairy"],
    tagged: ["Evo", "Evo1", "Very Rare"],
    terrain: ["Cave", "Mountain"],
    egg: ["Fairy"],
    prevo: 'Cleffa',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/clefable.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/clefable.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/clefable.png"],
    moveset: ["Spotlight", "Disarming Voice", "Sing", "Double Slap", "Minimize", "Metronome"],
    eggMoves: ["<b>Amnesia</b>", "<b>Aromatherapy</b>", "<b>Belly Drum</b>", "<b>Covet</b>", "<b>Fake Tears</b>", "<b>Heal Pulse</b>", "<b>Metronome</b>", "<b>Mimic</b>", "<b>Misty Terrain</b>", "<b>Present</b>", "<b>Splash</b>", "<b>Stored Power</b>", "<b>Tickle</b>", "<b>Wish</b>"]
  }, {
    name: 'Lopunny',
    gender: ["Male","Female"],
    abilities: ["Cute Charm", "Cute Charm", "Klutz", "<b>Limber</b>"],
    ha: ["<b>Limber</b>"],
    code: 'Lopunny',
    type: ["Normal"],
    tagged: ["Evo", "Evo1", "Rare"],
    terrain: ["Meadow"],
    egg: ["Human-Like", "Field"],
    prevo: 'Buneary',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/lopunny.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/lopunny.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/lopunny.png"],
    moveset: ["Return", "Defense Curl", "Foresight", "Endure", "Baby-Doll Eyes", "Quick Attack", "Jump Kick", "Baton Pass", "Agility", "Dizzy Punch", "Healing Wish", "Magic Coat", "Mirror Coat", "Rototiller", "Bounce", "Charm"],
    eggMoves: ["<b>Fake Tears</b>", "<b>Fake Out</b>", "<b>Sweet Kiss</b>", "<b>Double Hit</b>", "<b>Low Kick</b>", "<b>Encore</b>", "<b>Sky Uppercut</b>", "<b>Ice Punch</b>", "<b>Thunder Punch</b>", "<b>Fire Punch</b>", "<b>Flail</b>", "<b>Focus Punch</b>", "<b>Circle Throw</b>", "<b>Copycat</b>", "<b>Teeter Dance</b>", "<b>Cosmic Power</b>", "<b>Mud Sport</b>", "<b>Power-Up Punch</b>"]
  }, {
    name: 'Ludicolo',
    gender: ["Male", "Female"],
    abilities: ["Swift Swim", "Rain Dish"],
    ha: ["<b>Own Tempo</b>"],
    code: 'Ludicolo',
    type: ["Water", "Grass"],
    tagged: ["Evo", "Evo2"],
    terrain: ["Lakeside"],
    egg: ["Water 1", "Grass"],
    prevo: 'Lotad',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/ludicolo.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/ludicolo.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/ludicolo.png"],
    moveset: ["Astonish", "Growl", "Mega Drain", "Nature Power", "Fury Swipes", "Fake Out", "Hydro Pump", "Giga Drain"],
    eggMoves: ["<b>Counter</b>", "<b>Flail</b>", "<b>Leech Seed</b>", "<b>Razor Leaf</b>", "<b>Sweet Scent</b>", "<b>Synthesis</b>", "<b>Teeter Dance</b>", "<b>Tickle</b>", "<b>Water Gun</b>"]
  }, {
    name: 'Delcatty',
    code: 'Delcatty',
    gender: ["Male", "Female"],
    abilities: ["Cute Charm", "Normalize", "Normalize", "Normalize"],
    ha: ["<b>Wonder Skin</b>"],
    type: ["Normal"],
    tagged: ["Rare", "Evo", "Evo1"],
    terrain: ["Urban"],
    egg: ["Field"],
    prevo: 'Skitty',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/delcatty.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/delcatty.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/delcatty.png"],
    moveset: ["Fake Out", "Foresight", "Sing", "Attract", "Double Slap", "Copycat", "Assist", "Wake-Up Slap"],
    eggMoves: ["<b>Helping Hand</b>", "<b>Uproar</b>", "<b>Fake Tears</b>", "<b>Wish</b>", "<b>Baton Pass</b>", "<b>Tickle</b>", "<b>Last Resort</b>", "<b>Fake Out</b>", "<b>Zen Headbutt</b>", "<b>Sucker Punch</b>", "<b>Mud Bomb</b>", "<b>Simple Beam</b>", "<b>Captivate</b>", "<b>Cosmic Power</b>"]
  }, {
    name: 'Probopass',
    gender: ["Male","Female"],
    abilities: ["Sturdy", "Magnet Pull"],
    ha: ["<b>Sand Force</b>"],
    code: 'Probopass',
    type: ["Steel", "Rock"],
    tagged: ["Evo", "Evo1", "Rare"],
    terrain: ["Cave", "Mountain"],
    egg: ["Mineral"],
    prevo: 'Nosepass',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/probopass.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/probopass.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/probopass.png"],
    moveset: ["Harden", "Block", "Rock Throw", "Thunder Wave", "Rest", "Spark", "Rock Slide", "Power Gem", "Rock Blast", "Discharge", "Sandstorm", "Earth Power", "Stone Edge", "Lock-On", "Zap Cannon", "Tri Attack", "Gravity", "Magnet Rise", "Magnetic Flux", "Wide Guard", "Iron Defense", "Magnet Bomb"],
    eggMoves: ["<b>Block</b>", "<b>Double-Edge</b>", "<b>Endure</b>", "<b>Magnitude</b>", "<b>Rollout</b>", "<b>Stealth Rock</b>", "<b>Wide Guard</b>"]
  }, {
    name: 'Exeggutor',
    gender: ["Male", "Female"],
    abilities: ["Chlorophyll"],
    ha: ["<b>Harvest</b>"],
    code: 'Exeggutor',
    type: ["Grass", "Psychic"],
    tagged: ["Evo", "Evo1", "Rare"],
    terrain: ["Forest"],
    egg: ["Grass"],
    prevo: 'Exeggcute',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/exeggutor.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/exeggutor.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/exeggutor.png"],
    moveset: ["Stomp", "Seed Bomb", "Barrage", "Hypnosis", "Confusion", "Psyshock", "Egg Bomb", "Wood Hammer", "Leaf Storm"],
    eggMoves: ["<b>Ancient Power</b>", "<b>Block</b>", "<b>Curse</b>", "<b>Giga Drain</b>", "<b>Grassy Terrain</b>", "<b>Ingrain</b>", "<b>Leaf Storm</b>", "<b>Lucky Chant</b>", "<b>Natural Gift</b>", "<b>Moonlight</b>", "<b>Nature Power</b>", "<b>Power Swap</b>", "<b>Skill Swap</b>", "<b>Synthesis</b>"]
  }, {
    name: 'Exeggutor',
    gender: ["Male", "Female"],
    abilities: ["Frisk"],
    ha: ["<b>Harvest</b>"],
    code: 'Exeggutor-A',
    type: ["Grass", "Dragon"],
    tagged: ["Evo", "Evo1", "Very Rare"],
    terrain: ["Dragon Den"],
    egg: ["Grass"],
    prevo: 'Exeggcute',
    image: ["http://files.jcink.net/uploads/risingandfalling/BW/exeggutor_alola.png"],
    shiny: ["http://files.jcink.net/uploads/risingandfalling/BW/shiny/exeggutor_alola.png"],
    special: ["http://files.jcink.net/uploads/risingandfalling/BW/special/exeggutor_alola.png"],
    moveset: ["Dragon Hammer", "Seed Bomb", "Barrage", "Hypnosis", "Confusion", "Psyshock", "Egg Bomb", "Wood Hammer", "Leaf Storm"],
    eggMoves: ["<b>Ancient Power</b>", "<b>Block</b>", "<b>Curse</b>", "<b>Giga Drain</b>", "<b>Grassy Terrain</b>", "<b>Ingrain</b>", "<b>Leaf Storm</b>", "<b>Lucky Chant</b>", "<b>Natural Gift</b>", "<b>Moonlight</b>", "<b>Nature Power</b>", "<b>Power Swap</b>", "<b>Skill Swap</b>", "<b>Synthesis</b>"]
  }
  ];

  
  var pokemon;
  var speci = document.getElementById('speciswarm').value;
  var Level; var Color = 'wild';
  
    var min = document.getElementById('minlevs').value;
  var max = document.getElementById('maxlevs').value;
  var LvRange = (max - min) + 1;
  var LvRanger = Math.floor(Math.random() * LvRange);
  var Level = (min - -LvRanger);
  
 
  var pokemonChoices = pokemonChoices.filter(function( obj ) {
        return obj.code.includes(speci); });
  var pokemon = pokemonChoices[Math.floor(Math.random() * pokemonChoices.length)];
 
 
 var VariantRoll = Math.floor(Math.random() * 100) + 1;
 
 if (pokemon.name == "Vulpix") { if (VariantRoll < 6) {
      pokemonChoices = pokemonChoices.filter(function( obj ) {
        return obj.code.includes("Vulpix-A"); });
      pokemon = pokemonChoices[Math.floor(Math.random() * pokemonChoices.length)]; }
      speci = pokemon.code; }
 
 
 var StoneRoll = Math.floor(Math.random() * 100) + 1;
 
  if (pokemon.evolution != 'None') {
     if (Level >= pokemon.level) {
        pokemonChoices = Evolutions.filter(function( obj ) {
        return obj.code.includes(pokemon.evolution); });
        pokemon = pokemonChoices[Math.floor(Math.random() * pokemonChoices.length)];
     }  
  }
  
  
  if (pokemon.evolution != 'None') {
     if (Level >= pokemon.level) {
        pokemonChoices = Evolutions.filter(function( obj ) {
        return obj.code.includes(pokemon.evolution); });
        pokemon = pokemonChoices[Math.floor(Math.random() * pokemonChoices.length)];
     }  
  }
  
 if (pokemon.name == "Vulpix" || pokemon.name == "Feebas" || pokemon.name == "Murkrow" || pokemon.name == "Snom" || pokemon.name == "Cleffa" || pokemon.name == "Buneary" || pokemon.name == "Exeggcute" || pokemon.name == "Lombre" || pokemon.name == "Skitty" || pokemon.name == "Nosepass") { if (StoneRoll < 10) {
      pokemonChoices = StoneEvos.filter(function( obj ) {
        return obj.prevo.includes(speci); });
      pokemon = pokemonChoices[Math.floor(Math.random() * pokemonChoices.length)]; }
      }  
 
  var Image = pokemon.image[Math.floor(Math.random() * pokemon.image.length)];
  var Gender = pokemon.gender[Math.floor(Math.random() * pokemon.gender.length)];
 
  var GenderIcon;
  var GenderIconBBC;
  
  if (Gender == 'Female') { GenderIcon = '<img src="http://files.jcink.net/uploads/risingandfalling/f.png">'; GenderIconBBC = '[img src="http://files.jcink.net/uploads/risingandfalling/f.png"]'; } else if (Gender == 'Male') { GenderIcon = '<img src="http://files.jcink.net/uploads/risingandfalling/m.png">'; GenderIconBBC = '[img src="http://files.jcink.net/uploads/risingandfalling/m.png"]'; } else { GenderIcon = '<img src="http://files.jcink.net/uploads/risingandfalling/a.png">'; GenderIconBBC = '[img src="http://files.jcink.net/uploads/risingandfalling/a.png"]'; }
  
  
  var NatureChoices = ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"];
  
  var Nature = NatureChoices[Math.floor(Math.random() * NatureChoices.length)];
  
  var HAcheck = Math.floor(Math.random() * 100) + 1;      
        
  var Ability;
        if (HAcheck < 90) { 
            Ability = pokemon.abilities[Math.floor(Math.random() * pokemon.abilities.length)]; 
        } else {Ability = pokemon.ha[Math.floor(Math.random() * pokemon.ha.length)] }
        
 
        
  var ShinyRoll = Math.floor(Math.random() * 100);
  var ShinyMarker1 = '';
  
 if (ShinyRoll < 2) { 
    Image = pokemon.shiny[Math.floor(Math.random() * pokemon.shiny.length)];
    ShinyMarker1 = '✦'; 
    } else if (ShinyRoll < 23) { 
    Image = pokemon.special[Math.floor(Math.random() * pokemon.special.length)];
    Color = 'strangely colored'; } 
    
 


  var EMcheck = Math.floor(Math.random() * 100) + 1;
  var EMchance = '';
  
  if (EMcheck < 7) { EMchance = pokemon.eggMoves[Math.floor(Math.random() * pokemon.eggMoves.length)] + ', '; }
  
  if (EMchance == null) { EMchance = ''; }
  
  var EM1x = EMchance.replace("<b>", "[b]");
  var EM1 = EM1x.replace("</b>", "[/b]");
  
  var Abx = Ability.replace("<b>", "");
  var AbilityBBC = Abx.replace("</b>", "");
  
  
  if (pokemon.name == 'Toxtricity') {
    if (Nature == 'Bashful' || Nature == 'Bold' || Nature == 'Calm' || Nature == 'Careful' || Nature == 'Gentle' || Nature == 'Lonely' || Nature == 'Mild' || Nature == 'Modest' || Nature == 'Quiet' || Nature == 'Relaxed' || Nature == 'Serious' || Nature == 'Timid') {
        if (ShinyMarker1 == '✦') {
          Image = 'https://files.jcink.net/uploads/risingandfalling/BW/shiny/toxtricity_lowkey.png'; 
            } else if (Color == 'strangely colored') {
          Image = 'https://files.jcink.net/uploads/risingandfalling/BW/special/toxtricity_lowkey.png'; } else {
          Image = 'https://files.jcink.net/uploads/risingandfalling/BW/toxtricity_lowkey.png'; } 
    }
  }
  
  
  var Type1 = pokemon.type[0];
  var Type2 = pokemon.type[1];
  var Type1bbc = '';
  var Type2bbc = '';
  
  if (Type1 == "Bug") { Type1 = '<img src="https://veekun.com/dex/media/types/en/bug.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/bug.png"]'; } 
  else if (Type1 == "Dark") { Type1 = '<img src="https://veekun.com/dex/media/types/en/dark.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/dark.png"]'; } 
  else if (Type1 == "Dragon") { Type1 = '<img src="https://veekun.com/dex/media/types/en/dragon.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/dragon.png"]'; }
  else if (Type1 == "Electric") { Type1 = '<img src="https://veekun.com/dex/media/types/en/electric.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/electric.png"]'; }
  else if (Type1 == "Fairy") { Type1 = '<img src="https://veekun.com/dex/media/types/en/fairy.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/fairy.png"]'; }
  else if (Type1 == "Fighting") { Type1 = '<img src="https://veekun.com/dex/media/types/en/fighting.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/fighting.png"]'; }
  else if (Type1 == "Fire") { Type1 = '<img src="https://veekun.com/dex/media/types/en/fire.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/fire.png"]'; }
  else if (Type1 == "Flying") { Type1 = '<img src="https://veekun.com/dex/media/types/en/flying.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/flying.png"]'; }
  else if (Type1 == "Ghost") { Type1 = '<img src="https://veekun.com/dex/media/types/en/ghost.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/ghost.png"]'; }
  else if (Type1 == "Grass") { Type1 = '<img src="https://veekun.com/dex/media/types/en/grass.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/grass.png"]'; }
  else if (Type1 == "Ground") { Type1 = '<img src="https://veekun.com/dex/media/types/en/ground.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/ground.png"]'; }
  else if (Type1 == "Ice") { Type1 = '<img src="https://veekun.com/dex/media/types/en/ice.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/ice.png"]'; }
  else if (Type1 == "Normal") { Type1 = '<img src="https://veekun.com/dex/media/types/en/normal.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/normal.png"]'; }
  else if (Type1 == "Poison") { Type1 = '<img src="https://veekun.com/dex/media/types/en/poison.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/poison.png"]'; }
  else if (Type1 == "Psychic") { Type1 = '<img src="https://veekun.com/dex/media/types/en/psychic.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/psychic.png"]'; }
  else if (Type1 == "Rock") { Type1 = '<img src="https://veekun.com/dex/media/types/en/rock.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/rock.png"]'; }
  else if (Type1 == "Steel") { Type1 = '<img src="https://veekun.com/dex/media/types/en/steel.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/steel.png"]'; }
  else if (Type1 == "Water") { Type1 = '<img src="https://veekun.com/dex/media/types/en/water.png">'; Type1bbc = '[img src="https://veekun.com/dex/media/types/en/water.png"]'; }
  
  if (Type2 == "Bug") { Type2 = '<img src="https://veekun.com/dex/media/types/en/bug.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/bug.png"]'; } 
  else if (Type2 == "Dark") { Type2 = '<img src="https://veekun.com/dex/media/types/en/dark.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/dark.png"]'; } 
  else if (Type2 == "Dragon") { Type2 = '<img src="https://veekun.com/dex/media/types/en/dragon.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/dragon.png"]'; }
  else if (Type2 == "Electric") { Type2 = '<img src="https://veekun.com/dex/media/types/en/electric.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/electric.png"]'; }
  else if (Type2 == "Fairy") { Type2 = '<img src="https://veekun.com/dex/media/types/en/fairy.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/fairy.png"]'; }
  else if (Type2 == "Fighting") { Type2 = '<img src="https://veekun.com/dex/media/types/en/fighting.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/fighting.png"]'; }
  else if (Type2 == "Fire") { Type2 = '<img src="https://veekun.com/dex/media/types/en/fire.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/fire.png"]'; }
  else if (Type2 == "Flying") { Type2 = '<img src="https://veekun.com/dex/media/types/en/flying.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/flying.png"]'; }
  else if (Type2 == "Ghost") { Type2 = '<img src="https://veekun.com/dex/media/types/en/ghost.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/ghost.png"]'; }
  else if (Type2 == "Grass") { Type2 = '<img src="https://veekun.com/dex/media/types/en/grass.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/grass.png"]'; }
  else if (Type2 == "Ground") { Type2 = '<img src="https://veekun.com/dex/media/types/en/ground.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/ground.png"]'; }
  else if (Type2 == "Ice") { Type2 = '<img src="https://veekun.com/dex/media/types/en/ice.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/ice.png"]'; }
  else if (Type2 == "Normal") { Type2 = '<img src="https://veekun.com/dex/media/types/en/normal.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/normal.png"]'; }
  else if (Type2 == "Poison") { Type2 = '<img src="https://veekun.com/dex/media/types/en/poison.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/poison.png"]'; }
  else if (Type2 == "Psychic") { Type2 = '<img src="https://veekun.com/dex/media/types/en/psychic.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/psychic.png"]'; }
  else if (Type2 == "Rock") { Type2 = '<img src="https://veekun.com/dex/media/types/en/rock.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/rock.png"]'; }
  else if (Type2 == "Steel") { Type2 = '<img src="https://veekun.com/dex/media/types/en/steel.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/steel.png"]'; }
  else if (Type2 == "Water") { Type2 = '<img src="https://veekun.com/dex/media/types/en/water.png">'; Type2bbc = '[img src="https://veekun.com/dex/media/types/en/water.png"]'; }
  
  if (Type2 == null) {Type2 = ''; Type2bbc = ''; }
  
  var Types = Type1 + Type2; 
  var TypesBBC = Type1bbc + Type2bbc;
  
 
  
  

   var Check = new Date();
        var Month = Check.getMonth();
        var Day = Check.getDate();
        var Season;
        
            if (Month < 3) {
            if (Month == 2 && Day > 20) {Season = "Spring"} else {Season = "Winter"} }
        else if (Month < 6) {
            if (Month == 5 && Day > 20) {Season = "Summer"} else {Season = "Spring"} }
        else if (Month < 9) {
            if (Month == 8 && Day > 20) {Season = "Autumn"} else {Season = "Summer"} }
        else if (Month > 8) {
            if (Month == 11 && Day > 20) {Season = "Winter"} else {Season = "Autumn"} }
        
        if (pokemon.name == "Deerling" && Season == "Winter") {
          if (ShinyRoll < 5) { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/deerling_winter.png"; ShinyMarker1 = '✦';  } else {
            Image = "http://files.jcink.net/uploads/risingandfalling/BW/deerling_winter.png" } }
        else if (pokemon.name == "Deerling" && Season == "Autumn") {
          if (ShinyRoll < 5) { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/deerling_autumn.png"; ShinyMarker1 = '✦';  } else {
            Image = "http://files.jcink.net/uploads/risingandfalling/BW/deerling_autumn.png" } }
        else if (pokemon.name == "Deerling" && Season == "Summer") {
          if (ShinyRoll < 5) { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/deerling_summer.png"; ShinyMarker1 = '✦';  } else {
            Image = "http://files.jcink.net/uploads/risingandfalling/BW/deerling_summer.png" } }
            
        if (pokemon.name == "Sawsbuck" && Season == "Winter") {
          if (ShinyMarker1 == '✦') { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/sawsbuck_winter.png" } else {
            Image = "http://files.jcink.net/uploads/risingandfalling/BW/sawsbuck_winter.png" } }
        else if (pokemon.name == "Sawsbuck" && Season == "Autumn") {
          if (ShinyMarker1 == '✦') { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/sawsbuck_autumn.png" } else {
            Image = "http://files.jcink.net/uploads/risingandfalling/BW/sawsbuck_autumn.png" } }
        else if (pokemon.name == "Sawsbuck" && Season == "Summer") {
          if (ShinyMarker1 == '✦') { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/sawsbuck_summer.png" } else {
            Image = "http://files.jcink.net/uploads/risingandfalling/BW/sawsbuck_summer.png" } }  
            



  if (ShinyMarker1 == "✦") { 
  
  if (pokemon.name == "Frillish" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/frillish_f.png"; }
  if (pokemon.name == "Jellicent" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/jellicent_f.png"; }
  if (pokemon.name == "Pyroar" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/pyroar_f.png"; } 
  if (pokemon.name == "Hippowdon" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/hippowdon_f.png"; }
  if (pokemon.name == "Hippopotas" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/hippopotas_f.png"; }
  if (pokemon.name == "Combee" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/combee_f.png"; }
  if (pokemon.name == "Unfezant" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/unfezant_f.png"; }
  if (pokemon.name == "Venusaur" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/venusaur_f.png"; }
  if (pokemon.name == "Butterfree" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/butterfree_f.png"; }
  if (pokemon.name == "Pikachu" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/pikachu_f.png"; }
  if (pokemon.name == "Gloom" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/gloom_f.png"; }
  if (pokemon.name == "Vileplume" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/vileplume_f.png"; }
  if (pokemon.name == "Kadabra" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/kadabra_f.png"; }
  if (pokemon.name == "Alakazam" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/alakazam_f.png"; }
  if (pokemon.name == "Doduo" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/doduo_f.png"; }
  if (pokemon.name == "Dodrio" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/dodrio_f.png"; }
  if (pokemon.name == "Hypno" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/hypno_f.png"; }
  if (pokemon.name == "Rhyhorn" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/rhyhorn_f.png"; }
  if (pokemon.name == "Rhydon" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/rhydon_f.png"; }
  if (pokemon.name == "Goldeen" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/goldeen_f.png"; }
  if (pokemon.name == "Seaking" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/seaking_f.png"; }
  if (pokemon.name == "Magikarp" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/magikarp_f.png"; }
  if (pokemon.name == "Gyarados" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/gyarados_f.png"; }
  if (pokemon.name == "Wooper" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/wooper_f.png"; }
  if (pokemon.name == "Wobbuffet" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/wobbuffet_f.png"; }
  if (pokemon.name == "Girafarig" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/girafarig_f.png"; }
  if (pokemon.name == "Steelix" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/steelix_f.png"; }
  if (pokemon.name == "Scizor" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/scizor_f.png"; }
  if (pokemon.name == "Heracross" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/heracross_f.png"; }
  if (pokemon.name == "Sneasel" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/sneasel_f.png"; }
  if (pokemon.name == "Ludicolo" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/ludicolo_f.png"; }
  if (pokemon.name == "Meditite" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/meditite_f.png"; }
  if (pokemon.name == "Medicham" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/medicham_f.png"; }
  if (pokemon.name == "Roselia" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/roselia_f.png"; }
  if (pokemon.name == "Cacturne" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/cacturne_f.png"; }
  if (pokemon.name == "Bidoof" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/bidoof_f.png"; }
  if (pokemon.name == "Bibarel" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/bibarel_f.png"; }
  if (pokemon.name == "Kricketune" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/kricketune_f.png"; }
  if (pokemon.name == "Gible" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/gible_f.png"; }
  if (pokemon.name == "Gabite" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/gabite_f.png"; }
  if (pokemon.name == "Garchomp" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/garchomp_f.png"; }
  if (pokemon.name == "Snover" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/snover_f.png"; }
  if (pokemon.name == "Abomasnow" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/abomasnow_f.png"; }
  if (pokemon.name == "Weavile" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/weavile_f.png"; }
  if (pokemon.name == "Tangrowth" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/shiny/tangrowth_f.png"; }
  if (pokemon.name == "Kangaskhan" && Gender == "Male") { Image = "https://files.jcink.net/uploads/risingandfalling/BW/shiny/kangaskhan_m.png"; }
  if (pokemon.name == "Jynx" && Gender == "Male") { Image = "https://files.jcink.net/uploads/risingandfalling/BW/shiny/jynx_m.png"; }
  
  } else if (Color == 'strangely colored') {
  
  if (pokemon.name == "Frillish" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/frillish_f.png"; }
  if (pokemon.name == "Jellicent" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/jellicent_f.png"; }
  if (pokemon.name == "Pyroar" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/pyroar_f.png"; } 
  if (pokemon.name == "Hippowdon" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/hippowdon_f.png"; }
  if (pokemon.name == "Hippopotas" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/hippopotas_f.png"; }
  if (pokemon.name == "Combee" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/combee_f.png"; }
  if (pokemon.name == "Unfezant" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/unfezant_f.png"; }
  if (pokemon.name == "Venusaur" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/venusaur_f.png"; }
  if (pokemon.name == "Butterfree" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/butterfree_f.png"; }
  if (pokemon.name == "Pikachu" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/pikachu_f.png"; }
  if (pokemon.name == "Gloom" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/gloom_f.png"; }
  if (pokemon.name == "Vileplume" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/vileplume_f.png"; }
  if (pokemon.name == "Kadabra" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/kadabra_f.png"; }
  if (pokemon.name == "Alakazam" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/alakazam_f.png"; }
  if (pokemon.name == "Doduo" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/doduo_f.png"; }
  if (pokemon.name == "Dodrio" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/dodrio_f.png"; }
  if (pokemon.name == "Hypno" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/hypno_f.png"; }
  if (pokemon.name == "Rhyhorn" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/rhyhorn_f.png"; }
  if (pokemon.name == "Rhydon" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/rhydon_f.png"; }
  if (pokemon.name == "Goldeen" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/goldeen_f.png"; }
  if (pokemon.name == "Seaking" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/seaking_f.png"; }
  if (pokemon.name == "Magikarp" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/magikarp_f.png"; }
  if (pokemon.name == "Gyarados" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/gyarados_f.png"; }
  if (pokemon.name == "Xatu" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/xatu_f.png"; }
  if (pokemon.name == "Wooper" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/wooper_f.png"; }
  if (pokemon.name == "Wobbuffet" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/wobbuffet_f.png"; }
  if (pokemon.name == "Girafarig" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/girafarig_f.png"; }
  if (pokemon.name == "Steelix" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/steelix_f.png"; }
  if (pokemon.name == "Scizor" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/scizor_f.png"; }
  if (pokemon.name == "Heracross" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/heracross_f.png"; }
  if (pokemon.name == "Sneasel" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/sneasel_f.png"; }
  if (pokemon.name == "Ludicolo" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/ludicolo_f.png"; }
  if (pokemon.name == "Meditite" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/meditite_f.png"; }
  if (pokemon.name == "Roselia" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/roselia_f.png"; }
  if (pokemon.name == "Cacturne" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/cacturne_f.png"; }
  if (pokemon.name == "Bidoof" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/bidoof_f.png"; }
  if (pokemon.name == "Bibarel" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/bibarel_f.png"; }
  if (pokemon.name == "Kricketot" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/kricketot_f.png"; }
  if (pokemon.name == "Kricketune" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/kricketune_f.png"; }
  if (pokemon.name == "Gible" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/gible_f.png"; }
  if (pokemon.name == "Gabite" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/gabite_f.png"; }
  if (pokemon.name == "Garchomp" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/garchomp_f.png"; }
  if (pokemon.name == "Snover" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/snover_f.png"; }
  if (pokemon.name == "Abomasnow" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/abomasnow_f.png"; }
  if (pokemon.name == "Weavile" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/weavile_f.png"; }
  if (pokemon.name == "Tangrowth" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/special/tangrowth_f.png"; }
  if (pokemon.name == "Kangaskhan" && Gender == "Male") { Image = "https://files.jcink.net/uploads/risingandfalling/BW/special/kangaskhan_m.png"; }
  if (pokemon.name == "Jynx" && Gender == "Male") { Image = "https://files.jcink.net/uploads/risingandfalling/BW/special/jynx_m.png"; }
  
  } else {
  
  if (pokemon.name == "Frillish" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/frillish_f.png"; }
  if (pokemon.name == "Jellicent" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/jellicent_f.png"; }
  if (pokemon.name == "Pyroar" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/pyroar_f.png"; } 
  if (pokemon.name == "Hippowdon" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/hippowdon_f.png"; }
  if (pokemon.name == "Hippopotas" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/hippopotas_f.png"; }
  if (pokemon.name == "Combee" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/combee_f.png"; }
  if (pokemon.name == "Unfezant" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/unfezant_f.png"; }
  if (pokemon.name == "Venusaur" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/venusaur_f.png"; }
  if (pokemon.name == "Butterfree" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/butterfree_f.png"; }
  if (pokemon.name == "Pikachu" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/pikachu_f.png"; }
  if (pokemon.name == "Gloom" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/gloom_f.png"; }
  if (pokemon.name == "Vileplume" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/vileplume_f.png"; }
  if (pokemon.name == "Kadabra" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/kadabra_f.png"; }
  if (pokemon.name == "Alakazam" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/alakazam_f.png"; }
  if (pokemon.name == "Doduo" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/doduo_f.png"; }
  if (pokemon.name == "Dodrio" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/dodrio_f.png"; }
  if (pokemon.name == "Hypno" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/hypno_f.png"; }
  if (pokemon.name == "Rhyhorn" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/rhyhorn_f.png"; }
  if (pokemon.name == "Rhydon" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/rhydon_f.png"; }
  if (pokemon.name == "Goldeen" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/goldeen_f.png"; }
  if (pokemon.name == "Seaking" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/seaking_f.png"; }
  if (pokemon.name == "Magikarp" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/magikarp_f.png"; }
  if (pokemon.name == "Gyarados" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/gyarados_f.png"; }
  if (pokemon.name == "Xatu" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/xatu_f.png"; }
  if (pokemon.name == "Wooper" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/wooper_f.png"; }
  if (pokemon.name == "Wobbuffet" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/wobbuffet_f.png"; }
  if (pokemon.name == "Girafarig" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/girafarig_f.png"; }
  if (pokemon.name == "Steelix" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/steelix_f.png"; }
  if (pokemon.name == "Scizor" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/scizor_f.png"; }
  if (pokemon.name == "Heracross" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/heracross_f.png"; }
  if (pokemon.name == "Sneasel" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/sneasel_f.png"; }
  if (pokemon.name == "Ludicolo" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/ludicolo_f.png"; }
  if (pokemon.name == "Meditite" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/meditite_f.png"; }
  if (pokemon.name == "Roselia" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/roselia_f.png"; }
  if (pokemon.name == "Cacturne" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/cacturne_f.png"; }
  if (pokemon.name == "Bidoof" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/bidoof_f.png"; }
  if (pokemon.name == "Bibarel" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/bibarel_f.png"; }
  if (pokemon.name == "Kricketot" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/kricketot_f.png"; }
  if (pokemon.name == "Kricketune" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/kricketune_f.png"; }
  if (pokemon.name == "Gible" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/gible_f.png"; }
  if (pokemon.name == "Gabite" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/gabite_f.png"; }
  if (pokemon.name == "Garchomp" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/garchomp_f.png"; }
  if (pokemon.name == "Snover" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/snover_f.png"; }
  if (pokemon.name == "Abomasnow" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/abomasnow_f.png"; }
  if (pokemon.name == "Weavile" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/weavile_f.png"; }
  if (pokemon.name == "Tangrowth" && Gender == "Female") { Image = "http://files.jcink.net/uploads/risingandfalling/BW/tangrowth_f.png"; }
  if (pokemon.name == "Kangaskhan" && Gender == "Male") { Image = "https://files.jcink.net/uploads/risingandfalling/BW/kangaskhan_m.png"; }
  if (pokemon.name == "Jynx" && Gender == "Male") { Image = "https://files.jcink.net/uploads/risingandfalling/BW/jynx_m.png"; }
  
  }

  
  var sizes = ["Tiny!", "Small", "Small", "Small", "Average", "Average", "Average", "Average", "Average", "Average", "Average", "Average", "Average", "Average", "Large", "Large", "Large", "Huge!"];
  var Size = sizes[Math.floor(Math.random() * sizes.length)];
 
  
  
 
  
  document.getElementById('output2').innerHTML = '<div align="center"><div style="width:340px;text-align:center;font-size:18px;font-family:Courgette;background-color:#255378;color:#ffffff;padding:10px;border-radius:20px 20px 0px 0px;">A ' + Color + ' ' + pokemon.name + ShinyMarker1 + ' appeared!</div><div style="width:350px;text-align:center;font-size:12px;font-family:Montserrat;background-color:#3E78A7;color:#ffffff;padding:5px;letter-spacing:2px;">What will you do?</div><div align="center"><table style="width:320px;text-align:center;border-collapse:separate;border-spacing:5px;"><tbody><tr><td style="height:100px;width:100px;padding:5px;border-bottom:#777 1px solid;border-right:#777 1px solid;" rowspan="4"><img src="' + Image + '" style="max-width:100%;"></td><td colspan="2" style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;"><b style="font-family:Courgette;font-size:14px;">' + pokemon.name + ShinyMarker1 + '</b> ' + GenderIcon + ' Lv' + Level + ' </td></tr><tr><td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;">' + Types + '</td><td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;">5 Energy </td></tr><tr><td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;">' + Size + '</td><td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;">' + Nature + '</td></tr><tr><td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;" colspan="2">' + Ability + '</td></tr><tr><td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;" colspan="3"><b>MOVES</b> </td></tr><tr><td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;vertical-align:top;" colspan="3"><div style="height:35px;overflow:auto;">' + EMchance + '<br><br></div></td></tr></tbody></table></div></div><br><br><textarea style="height:150px;width:400px;overflow-y:auto;overflow-x:hidden;" onclick="this.select()">[div align="center"][div style="width:340px;text-align:center;font-size:18px;font-family:Courgette;background-color:#255378;color:#ffffff;padding:10px;border-radius:20px 20px 0px 0px;"]A ' + Color + ' ' + pokemon.name + ShinyMarker1 + ' appeared![/div][div style="width:350px;text-align:center;font-size:12px;font-family:Montserrat;background-color:#3E78A7;color:#ffffff;padding:5px;letter-spacing:2px;"]What will you do?[/div][div align="center"][table style="width:320px;text-align:center;border-collapse:separate;border-spacing:5px;"][tbody][tr][td style="height:100px;width:100px;padding:5px;border-bottom:#777 1px solid;border-right:#777 1px solid;" rowspan="4"][img src="' + Image + '" style="max-width:100%;"][/td][td colspan="2" style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;"][b style="font-family:Courgette;font-size:14px;"]' + pokemon.name + ShinyMarker1 + '[/b] ' + GenderIconBBC + ' Lv' + Level + ' [/td][/tr][tr][td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;"]' + TypesBBC + '[/td][td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;"]5 Energy [/td][/tr][tr][td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;"]' + Size + '[/td][td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;"]' + Nature + '[/td][/tr][tr][td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;" colspan="2"]' + AbilityBBC + '[/td][/tr][tr][td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;" colspan="3"][b]MOVES[/b] [/td][/tr][tr][td style="padding:3px;border-bottom:#777 1px solid;border-right:#777 1px solid;vertical-align:top;" colspan="3"][div style="height:35px;overflow:auto;"]' + EM1 + '[br][br][/div][/td][/tr][/tbody][/table][/div][/div]</textarea>'; 
  
  
  }
