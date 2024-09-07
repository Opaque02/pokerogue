import { PokeballType } from "#enums/pokeball";
import Pokemon from "../field/pokemon";
import BattleScene from "../battle-scene";
import i18next from "i18next";

export { PokeballType };

export const MAX_PER_TYPE_POKEBALLS: integer = 99;

export function getPokeballAtlasKey(type: PokeballType): string {
  switch (type) {
  case PokeballType.POKEBALL:
    return "pb";
  case PokeballType.GREAT_BALL:
    return "gb";
  case PokeballType.ULTRA_BALL:
    return "ub";
  case PokeballType.ROGUE_BALL:
    return "rb";
  case PokeballType.MASTER_BALL:
    return "mb";
  case PokeballType.LUXURY_BALL:
    return "lb";
  }
}

export function getPokeballName(type: PokeballType): string {
  let ret: string;
  switch (type) {
  case PokeballType.POKEBALL:
    ret = i18next.t("pokeball:pokeBall");
    break;
  case PokeballType.GREAT_BALL:
    ret = i18next.t("pokeball:greatBall");
    break;
  case PokeballType.ULTRA_BALL:
    ret = i18next.t("pokeball:ultraBall");
    break;
  case PokeballType.ROGUE_BALL:
    ret = i18next.t("pokeball:rogueBall");
    break;
  case PokeballType.MASTER_BALL:
    ret = i18next.t("pokeball:masterBall");
    break;
  case PokeballType.LUXURY_BALL:
    ret = i18next.t("pokeball:luxuryBall");
    break;
  }
  return ret;
}

export function getPokeballCatchMultiplier(type: PokeballType, enemyPokemon?: Pokemon | null, getBoostedDescription?: boolean): number {
  const pokemon = enemyPokemon ?? null;
  const description = getBoostedDescription ?? false;
  switch (type) {
  case PokeballType.POKEBALL:
    return 1;
  case PokeballType.GREAT_BALL:
    return 1.5;
  case PokeballType.ULTRA_BALL:
    return 2;
  case PokeballType.ROGUE_BALL:
    /* making rogue balls have a higher chance to catch pokemon if they have a tinted pokeball (i.e. at least one thing is new for them)
       * you can also get the boosted type for a description (i.e. for modifier-type)
       */
    if (pokemon?.isTintedPokeball() || description) {
      return 5;
    }
    return 3;
  case PokeballType.MASTER_BALL:
    return -1;
  case PokeballType.LUXURY_BALL:
    return 1;
  }
}

export function getPokeballTintColor(type: PokeballType): number {
  switch (type) {
  case PokeballType.POKEBALL:
    return 0xd52929;
  case PokeballType.GREAT_BALL:
    return 0x94b4de;
  case PokeballType.ULTRA_BALL:
    return 0xe6cd31;
  case PokeballType.ROGUE_BALL:
    return 0xd52929;
  case PokeballType.MASTER_BALL:
    return 0xa441bd;
  case PokeballType.LUXURY_BALL:
    return 0xffde6a;
  }
}

export function doPokeballBounceAnim(scene: BattleScene, pokeball: Phaser.GameObjects.Sprite, y1: number, y2: number, baseBounceDuration: integer, callback: Function) {
  let bouncePower = 1;
  let bounceYOffset = y1;
  let bounceY = y2;
  const yd = y2 - y1;

  const doBounce = () => {
    scene.tweens.add({
      targets: pokeball,
      y: y2,
      duration: bouncePower * baseBounceDuration,
      ease: "Cubic.easeIn",
      onComplete: () => {
        scene.playSound("se/pb_bounce_1", { volume: bouncePower });

        bouncePower = bouncePower > 0.01 ? bouncePower * 0.5 : 0;

        if (bouncePower) {
          bounceYOffset = yd * bouncePower;
          bounceY = y2 - bounceYOffset;

          scene.tweens.add({
            targets: pokeball,
            y: bounceY,
            duration: bouncePower * baseBounceDuration,
            ease: "Cubic.easeOut",
            onComplete: () => doBounce()
          });
        } else if (callback) {
          callback();
        }
      }
    });
  };

  doBounce();
}
