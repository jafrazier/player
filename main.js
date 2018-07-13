class Character {
  constructor(name){
    this.name = name;
    this.atk = 100;
    this.health = 150;
    this.illusion = 0;
    this.alteration = 0;
    this.conjuration = 0;
    this.destruction = 0;
    this.enchanting = 0;
    this.restoration = 0;
    this.lockpicking = 0;
    this.lightArmor = 0;
    this.pickpocket= 0;
    this.sneak = 0;
    this.alchemy = 0;
    this.speech = 0;

    }
}
class Altmer extends Character {
  constructor(name){
    super(name);
    this.name = name;
    this.atk += 25;
    this.health -= 25;
    this.illusion += 10;
    this.alteration += 5;
    this.conjuration += 5;
    this.destruction += 5;
    this.enchanting += 5;
    this.restoration += 5;
    create(this);
    }
  }
class Argonian extends Character {
  constructor(name){
    super(name);
    this.name = name;
    this.atk -= 25;
    this.health -= 50;
    this.alteration += 5;
    this.restoration += 5;
    this.lockpicking += 10;
    this.lightArmor += 5;
    this.sneak += 5;
    this.pickpocket += 5;
    create(this);
  }

}
class Breton extends Character {
  constructor(name){
    super(name);
    this.name = name;
    this.atk += 20;
    this.health -= 25;
    this.conjuration += 10;
    this.alchemy += 5;
    this.alteration += 5;
    this.illusion += 5;
    this.restoration += 5;
    this.Speech += 5;
    create(this);
  }

}
function create(player) {
  var div = document.createElement('div');
  div.className = 'playerInfo';
  var h = document.createElement('h3');
  h.innerHTML = 'Name: ' + test.name;
  div.appendChild(h);
  var atk = document.createElement('p');
  atk.innerHTML = 'Attack: '+ test.atk ;
  div.appendChild(atk);
  var health = document.createElement('p');
  health.innerHTML = 'Health: ' + test.health ;
  div.appendChild(health);
  var illusion = document.createElement('p');
  illusion.innerHTML = 'Illusion: + ' + test.illusion ;
  div.appendChild(illusion);
  var alteration = document.createElement('p');
  alteration.innerHTML = 'Alteration: + ' + test.alteration ;
  div.appendChild(alteration);
  var conjuration = document.createElement('p');
  conjuration.innerHTML = 'Conjuration: + ' + test.conjuration ;
  div.appendChild(conjuration);
  var destruction = document.createElement('p');
  destruction.innerHTML = 'Destrction: + ' + test.destruction ;
  div.appendChild(destruction);
  var enchanting = document.createElement('p');
  enchanting.innerHTML = 'Enchanting: + ' + test.enchanting ;
  div.appendChild(enchanting);
  var restoration = document.createElement('p');
  restoration.innerHTML = 'Restoration: + ' + test.restoration ;
  div.appendChild(restoration);
  var lockpicking = document.createElement('p');
  lockpicking.innerHTML = 'Lockpicking: + ' + test.lockpicking ;
  div.appendChild(lockpicking);
  var lightArmor = document.createElement('p');
  lightArmor.innerHTML = 'Light Armor: + ' + test.lightArmor ;
  div.appendChild(lightArmor);
  var pickpocket = document.createElement('p');
  pickpocket.innerHTML = 'Pickpocket: + ' + test.pickpocket ;
  div.appendChild(pickpocket);
  var sneak = document.createElement('p');
  sneak.innerHTML = 'Sneak: + ' + test.sneak ;
  div.appendChild(sneak);
  var alchemy = document.createElement('p');
  alchemy.innerHTML = 'Alchemy: + ' + test.alchemy ;
  div.appendChild(alchemy);
  var speech = document.createElement('p');
  speech.innerHTML = 'Speech: + ' + test.speech ;
  div.appendChild(speech);
  var b = document.createElement('br');
  div.appendChild(b);
  div.appendChild(b);
  document.getElementById('display').appendChild(div);
}
