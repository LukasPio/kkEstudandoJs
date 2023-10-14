class Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    this.name = nome;
    this.lifepoints = pontosDeVida;
    this.damagePoints = pontosDeAtaque;
    this.defensePoints = pontosDeDefesa;
  }

  atacar(Character) {
    const dano = this.damagePoints - Character.defensePoints;
    dano >= 0 ? (Character.lifepoints -= dano) : (Character.lifepoints -= 0);
  }
}

class Thief extends Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
  }

  atacar(Character) {
    const dano = (this.damagePoints - Character.defensePoints) * 2;
    dano >= 0 ? (Character.lifepoints -= dano) : (Character.lifepoints -= 0);
  }
}

class Mage extends Character {
  constructor(
    nome,
    pontosDeVida,
    pontosDeAtaque,
    pontosDeDefesa,
    pontosDeMagia
  ) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
    this.magicPoints = pontosDeMagia;
  }

  atacar(Character) {
    const dano = (this.damagePoints + this.magicPoints - Character.defensePoints);
    dano >= 0 ? (Character.lifepoints -= dano) : (Character.lifepoints -= 0);
  }

  curar(Character) {
    const cura = this.magicPoints * 2
    Character.lifepoints += cura
  }
}

class Warrior extends Character{
    constructor(pontosDeAtaque, pontosDeDefesa, pontosDeVida, pontosDeEscudo)
}