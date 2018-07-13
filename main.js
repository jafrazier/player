class Character {
  constructor(atk,health,illusion,alteration,conjuration,destruction,enchanting,restoration,lockpicking,lightArmor,pickpocket,sneak,alchemy,speech){
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
    super();
    this.name = name;
    this.atk =+ 25;
    this.health =- 25;
    this.illusion =+ 10;
    this.alteration =+ 5;
    this.conjuration =+ 5;
    this.destruction =+ 5;
    this.enchanting =+ 5;
    this.restoration =+ 5;

  }

}

class Argonian extends Character {
  constructor(name){
    super();
    this.name = name;
    this.atk =+ 25;
    this.health =- 25;
    this.alteration =+ 5;
    this.restoration =+ 5;
    this.lockpicking =+ 10;
    this.lightArmor =+ 5;
    this.sneak =+ 5;
    this.pickpocket =+ 5;

  }

}

class Breton extends Character {
  constructor(name){
    super();
    this.name = name;
    this.atk =+ 25;
    this.health =- 25;
    this.conjuration =+ 10;
    this.alchemy =+ 5;
    this.alteration =+ 5;
    this.illusion =+ 5;
    this.restoration =+ 5;
    this.Speech =+ 5;

  }

}
