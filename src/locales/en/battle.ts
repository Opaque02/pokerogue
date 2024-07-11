import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} appeared.",
  "trainerAppeared": "{{trainerName}}\nwould like to battle!",
  "trainerAppearedDouble": "{{trainerName}}\nwould like to battle!",
  "trainerSendOut": "{{trainerName}} sent out\n{{pokemonName}}!",
  "singleWildAppeared": "A wild {{pokemonName}} appeared!",
  "multiWildAppeared": "A wild {{pokemonName1}}\nand {{pokemonName2}} appeared!",
  "playerComeBack": "Come back, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} withdrew {{pokemonName}}!",
  "playerGo": "Go! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} sent out {{pokemonName}}!",
  "switchQuestion": "Will you switch\n{{pokemonName}}?",
  "trainerDefeated": "You defeated\n{{trainerName}}!",
  "moneyWon": "You got\n₽{{moneyAmount}} for winning!",
  "moneyPickedUp": "You picked up ₽{{moneyAmount}}!",
  "pokemonCaught": "{{pokemonName}} was caught!",
  "addedAsAStarter": "{{pokemonName}} has been\nadded as a starter!",
  "partyFull": "Your party is full.\nRelease a Pokémon to make room for {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Go! {{pokemonName}}!",
  "hitResultCriticalHit": "A critical hit!",
  "hitResultSuperEffective": "It's super effective!",
  "hitResultNotVeryEffective": "It's not very effective…",
  "hitResultNoEffect": "It doesn't affect {{pokemonName}}!",
  "hitResultOneHitKO": "It's a one-hit KO!",
  "attackFailed": "But it failed!",
  "attackMissed": "{{pokemonNameWithAffix}} avoided the attack!",
  "attackHitsCount": "Hit {{count}} time(s)!",
  "rewardGain": "You received\n{{modifierName}}!",
  "expGain": "{{pokemonName}} gained\n{{exp}} EXP. Points!",
  "levelUp": "{{pokemonName}} grew to\nLv. {{level}}!",
  "learnMove": "{{pokemonName}} learned\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} wants to learn the\nmove {{moveName}}.",
  "learnMoveLimitReached": "However, {{pokemonName}} already\nknows four moves.",
  "learnMoveReplaceQuestion": "Should a move be forgotten and\nreplaced with {{moveName}}?",
  "learnMoveStopTeaching": "Stop trying to teach\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} did not learn the\nmove {{moveName}}.",
  "learnMoveForgetQuestion": "Which move should be forgotten?",
  "learnMoveForgetSuccess": "{{pokemonName}} forgot how to\nuse {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, and@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}Poof!",
  "learnMoveAnd": "And…",
  "levelCapUp": "The level cap\nhas increased to {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} is not yet implemented and cannot be selected.",
  "moveNoPP": "There's no PP left for\nthis move!",
  "moveDisabled": "{{moveName}} is disabled!",
  "noPokeballForce": "An unseen force\nprevents using Poké Balls.",
  "noPokeballTrainer": "You can't catch\nanother trainer's Pokémon!",
  "noPokeballMulti": "You can only throw a Poké Ball\nwhen there is one Pokémon remaining!",
  "noPokeballStrong": "The target Pokémon is too strong to be caught!\nYou need to weaken it first!",
  "noEscapeForce": "An unseen force\nprevents escape.",
  "noEscapeTrainer": "You can't run\nfrom a trainer battle!",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nprevents {{escapeVerb}}!",
  "runAwaySuccess": "You got away safely!",
  "runAwayCannotEscape": "You can't escape!",
  "escapeVerbSwitch": "switching",
  "escapeVerbFlee": "fleeing",
  "notDisabled": "{{pokemonName}}'s {{moveName}} is disabled\nno more!",
  "turnEndHpRestore": "{{pokemonName}}'s HP was restored.",
  "hpIsFull": "{{pokemonName}}'s\nHP is full!",
  "skipItemQuestion": "Are you sure you want to skip taking an item?",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "Use IV Scanner on {{pokemonName}}?",
  "wildPokemonWithAffix": "Wild {{pokemonName}}",
  "foePokemonWithAffix": "Foe {{pokemonName}}",
  "useMove": "{{pokemonNameWithAffix}} used {{moveName}}!",
  "drainMessage": "{{pokemonName}} had its\nenergy drained!",
  "regainHealth": "{{pokemonName}} regained\nhealth!",
  "stealEatBerry": "{{pokemonName}} stole and ate\n{{targetName}}'s {{berryName}}!",
  "fainted": "{{pokemonNameWithAffix}} fainted!",
  "statRose": "{{pokemonNameWithAffix}}'s {{stats}} rose!",
  "statSharplyRose": "{{pokemonNameWithAffix}}'s {{stats}} sharply rose!",
  "statRoseDrastically": "{{pokemonNameWithAffix}}'s {{stats}} rose drastically!",
  "statWontGoAnyHigher": "{{pokemonNameWithAffix}}'s {{stats}} won't go any higher!",
  "statFell": "{{pokemonNameWithAffix}}'s {{stats}} fell!",
  "statHarshlyFell": "{{pokemonNameWithAffix}}'s {{stats}} harshly fell!",
  "statSeverelyFell": "{{pokemonNameWithAffix}}'s {{stats}} severely fell!",
  "statWontGoAnyLower": "{{pokemonNameWithAffix}}'s {{stats}} won't go any lower!",
  "retryBattle": "Would you like to retry from the start of the battle?",
  "unlockedSomething": "{{unlockedThing}}\nhas been unlocked.",
  "congratulations": "Congratulations!",
  "beatModeFirstTime": "{{speciesName}} beat {{gameMode}} Mode for the first time!\nYou received {{newModifier}}!",
  "ppReduced": "It reduced the PP of {{targetName}}'s\n{{moveName}} by {{reduction}}!",
  "battlerTagsRechargingLapse": "{{pokemonNameWithAffix}} must\nrecharge!",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}} can no\nlonger escape!",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}} was freed\nfrom {{moveName}}!",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}} flinched!",
  "battlerTagsConfusedOnAdd": "{{pokemonNameWithAffix}} became\nconfused!",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}} snapped\nout of confusion!",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}} is\nalready confused!",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}} is\nconfused!",
  "battlerTagsConfusedLapseHurtItself": "It hurt itself in its\nconfusion!",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}} is unaffected\nby the effects of Destiny Bond.",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}} took\n{{pokemonNameWithAffix2}} down with it!",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}} fell in love\nwith {{sourcePokemonName}}!",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}} is\nalready in love!",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}} is in love\nwith {{sourcePokemonName}}!",
  "battlerTagsInfatuatedLapseImmobilize": "{{pokemonNameWithAffix}} is\nimmobilized by love!",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}} got over\nits infatuation.",
  "battlerTagsSeededOnAdd": "{{pokemonNameWithAffix}} was seeded!",
  "battlerTagsSeededLapse": "{{pokemonNameWithAffix}}'s health is\nsapped by Leech Seed!",
  "battlerTagsSeededLapseShed": "{{pokemonNameWithAffix}}'s Leech Seed\nsucked up the liquid ooze!",
  "battlerTagsNightmareOnAdd": "{{pokemonNameWithAffix}} began\nhaving a Nightmare!",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}} is\nalready locked in a Nightmare!",
  "battlerTagsNightmareLapse": "{{pokemonNameWithAffix}} is locked\nin a Nightmare!",
  "battlerTagsEncoreOnAdd": "{{pokemonNameWithAffix}} got\nan Encore!",
  "battlerTagsEncoreOnRemove": "{{pokemonNameWithAffix}}'s Encore\nended!",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}} is ready to\nhelp {{pokemonName}}!",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}} absorbed\nnutrients with its roots!",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}} planted its roots!",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}} surrounded\nitself with a veil of water!",
  "battlerTagsAquaRingLapse": "{{moveName}} restored\n{{pokemonName}}'s HP!",
  "battlerTagsDrowsyOnAdd": "{{pokemonNameWithAffix}} grew drowsy!",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}} is hurt\nby {{moveName}}!",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}} was squeezed by\n{{sourcePokemonName}}'s {{moveName}}!",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}} was Wrapped\nby {{sourcePokemonName}}!",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}} was trapped\nin the vortex!",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}} Clamped\n{{pokemonName}}!",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}} became trapped\nby {{moveName}}!",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}} became trapped\nby swirling magma!",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}} got trapped\nby a snap trap!",
  "battlerTagsThunderCageOnTrap": "{{sourcePokemonNameWithAffix}} trapped\n{{pokemonNameWithAffix}}!",
  "battlerTagsInfestationOnTrap": "{{pokemonNameWithAffix}} has been afflicted \nwith an infestation by {{sourcePokemonNameWithAffix}}!",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}}\nprotected itself!",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}}\nprotected itself!",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}} braced\nitself!",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}} endured\nthe hit!",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}} endured\nthe hit!",
  "battlerTagsPerishSongLapse": "{{pokemonNameWithAffix}}'s perish count fell to {{turnCount}}.",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}} is\nloafing around!",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}} can't\nget it going!",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}} finally\ngot its act together!",
  "battlerTagsHighestStatBoostOnAdd": "{{pokemonNameWithAffix}}'s {{statName}}\nwas heightened!",
  "battlerTagsHighestStatBoostOnRemove": "The effects of {{pokemonNameWithAffix}}'s\n{{abilityName}} wore off!",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}} is getting\npumped!",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}} relaxed.",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}} is being salt cured!",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}} is hurt by {{moveName}}!",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}} cut its own HP and put a curse on the {{pokemonName}}!",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}} is afflicted by the Curse!"
} as const;
