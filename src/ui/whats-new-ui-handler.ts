import BattleScene from "../battle-scene";
import { TextStyle, addTextObject } from "./text";
import { Mode } from "./ui";
import UiHandler from "./ui-handler";
import { addWindow } from "./ui-theme";
import { Button } from "#enums/buttons";
import i18next from "i18next";
import { Challenge } from "#app/data/challenge.js";
//import * as Utils from "../utils";
import BBCodeText from "phaser3-rex-plugins/plugins/bbcodetext";
import { Color, ShadowColor } from "#app/enums/color.js";
import { SelectStarterPhase } from "#app/phases/select-starter-phase.js";
import { TitlePhase } from "#app/phases/title-phase.js";

/**
 * Handles all the UI for choosing optional challenges.
 */
export default class WhatsNewUiHandler extends UiHandler {
  private whatsNewContainer: Phaser.GameObjects.Container;
  private valuesContainer: Phaser.GameObjects.Container;

  private scrollCursor: integer;

  private optionsBg: Phaser.GameObjects.NineSlice;

  // private difficultyText: Phaser.GameObjects.Text;

  private descriptionText: BBCodeText;

  private whatsNewLabels: Array<{ label: Phaser.GameObjects.Text }>;

  private cursorObj: Phaser.GameObjects.NineSlice | null;

  private startCursor: Phaser.GameObjects.NineSlice;

  private optionsWidth: number;

  private whatsNewText = i18next.getResourceBundle(i18next.resolvedLanguage, "whatsNew");

  private whatsNewOptions: OptionSelectItem[] = [];

  constructor(scene: BattleScene, mode: Mode | null = null) {
    super(scene, mode);
  }

  setup() {
    const ui = this.getUi();

    this.whatsNewContainer = this.scene.add.container(1, -(this.scene.game.canvas.height / 6) + 1);
    this.whatsNewContainer.setName("whats-new");

    this.whatsNewContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.scene.game.canvas.width / 6, this.scene.game.canvas.height / 6), Phaser.Geom.Rectangle.Contains);

    const bgOverlay = this.scene.add.rectangle(-1, -1, this.scene.scaledCanvas.width, this.scene.scaledCanvas.height, 0x424242, 0.8);
    bgOverlay.setName("rect-whats-new-overlay");
    bgOverlay.setOrigin(0, 0);
    this.whatsNewContainer.add(bgOverlay);

    // TODO: Change this back to /9 when adding in difficulty
    const headerBg = addWindow(this.scene, 0, 0, (this.scene.game.canvas.width / 6), 24);
    headerBg.setName("window-header-bg");
    headerBg.setOrigin(0, 0);

    const headerText = addTextObject(this.scene, 0, 0, "What's new?", TextStyle.SETTINGS_LABEL); // TODO: change this to an i18 key for the text
    headerText.setName("text-header");
    headerText.setOrigin(0, 0);
    headerText.setPositionRelative(headerBg, 8, 4);

    this.optionsWidth = this.scene.scaledCanvas.width * 0.5;
    this.optionsBg = addWindow(this.scene, 0, headerBg.height, this.optionsWidth, this.scene.scaledCanvas.height - headerBg.height - 2);
    this.optionsBg.setName("window-options-bg");
    this.optionsBg.setOrigin(0, 0);

    const descriptionBg = addWindow(this.scene, 0, headerBg.height, this.scene.scaledCanvas.width - this.optionsWidth, this.scene.scaledCanvas.height - headerBg.height);
    descriptionBg.setName("window-desc-bg");
    descriptionBg.setOrigin(0, 0);
    descriptionBg.setPositionRelative(this.optionsBg, this.optionsBg.width, 0);

    this.descriptionText = new BBCodeText(this.scene, descriptionBg.x + 6, descriptionBg.y + 4, "", {
      fontFamily: "emerald",
      fontSize: 84,
      color: Color.ORANGE,
      padding: {
        bottom: 6
      },
      wrap: {
        mode: "word",
        width: (descriptionBg.width - 12) * 6,
      }
    });
    this.descriptionText.setName("text-desc");
    this.scene.add.existing(this.descriptionText);
    this.descriptionText.setScale(1 / 6);
    this.descriptionText.setShadow(4, 5, ShadowColor.ORANGE);
    this.descriptionText.setOrigin(0, 0);

    this.startCursor = this.scene.add.nineslice(0, 0, "summary_moves_cursor", undefined, descriptionBg.width - 8, 16, 1, 1, 1, 1);
    this.startCursor.setName("9s-start-cursor");
    this.startCursor.setOrigin(0, 0);
    this.startCursor.setPositionRelative(this.descriptionText, 4, 3);
    this.startCursor.setVisible(false);

    this.valuesContainer = this.scene.add.container(0, 0);
    this.valuesContainer.setName("values");

    this.whatsNewLabels = [];

    for (let i = 0; i < 9; i++) {
      const label = addTextObject(this.scene, 8, 28 + i * 16, "", TextStyle.SETTINGS_LABEL);
      label.setName(`text-challenge-label-${i}`);
      label.setOrigin(0, 0);

      this.valuesContainer.add(label);

      this.whatsNewLabels[i] = {
        label: label
      };
    }

    this.whatsNewContainer.add(headerBg);
    this.whatsNewContainer.add(headerText);
    this.whatsNewContainer.add(this.optionsBg);
    this.whatsNewContainer.add(descriptionBg);
    this.whatsNewContainer.add(this.descriptionText);
    this.whatsNewContainer.add(this.startCursor);
    this.whatsNewContainer.add(this.valuesContainer);

    ui.add(this.whatsNewContainer);

    this.setCursor(0);
    this.setScrollCursor(0);

    this.whatsNewContainer.setVisible(false);
  }

  /**
   * Adds the default text color to the description text
   * @param text text to set to the BBCode description
   */
  setDescription(text: string): void {
    this.descriptionText.setText(`[color=${Color.ORANGE}][shadow=${ShadowColor.ORANGE}]${text}`);
  }

  /**
   * initLabels
   * init all challenge labels
   */
  initLabels(): void {
    const updateText = this.getTextFromIndex(0); // gets the first thing in the update log
    this.setDescription(i18next.t(updateText["description"]));
    for (let i = 0; i < 9; i++) {
      if (i < Object.keys(this.whatsNewText).length) {
        this.whatsNewLabels[i].label.setVisible(true);
      }
    }
  }

  /* This converts an index value into an output from this.whatsNewText
   */
  getTextFromIndex(index: number) {
    return this.whatsNewText[Object.keys(this.whatsNewText)[index]];
  }

  /**
   * update the text the cursor is on
   */
  updateText(): void {
    const currentUpdate = this.getTextFromIndex(this.cursor);
    this.setDescription(i18next.t(currentUpdate["description"]));
    for (let i = 0; i < Math.min(9, Object.keys(this.whatsNewText).length); i++) {
      const updateText = this.getTextFromIndex(i);
      this.whatsNewLabels[i].label.setText(i18next.t(updateText["name"]));
    }
  }

  show(args: any[]): boolean {
    super.show(args);

    this.startCursor.setVisible(false);
    this.whatsNewContainer.setVisible(true);
    this.setCursor(0);

    this.initLabels();
    this.updateText();

    this.getUi().moveTo(this.whatsNewContainer, this.getUi().length - 1);

    this.getUi().hideTooltip();

    return true;
  }

  /**
   * Processes input from a specified button.
   * This method handles navigation through a UI menu, including movement through menu items
   * and handling special actions like cancellation. Each button press may adjust the cursor
   * position or the menu scroll, and plays a sound effect if the action was successful.
   *
   * @param button - The button pressed by the user.
   * @returns `true` if the action associated with the button was successfully processed, `false` otherwise.
   */
  processInput(button: Button): boolean {
    const ui = this.getUi();
    // Defines the maximum number of rows that can be displayed on the screen.
    const rowsToDisplay = 9;

    const numberOfUpdates = Object.keys(this.whatsNewText).length;

    let success = false;

    if (button === Button.CANCEL) {
      if (this.startCursor.visible) {
        this.startCursor.setVisible(false);
        this.cursorObj?.setVisible(true);
      } else {
        this.scene.clearPhaseQueue();
        this.scene.pushPhase(new TitlePhase(this.scene));
        this.scene.getCurrentPhase()?.end();
      }
      success = true;
    } else if (button === Button.SUBMIT || button === Button.ACTION) {
      if (this.startCursor.visible) {
        const totalDifficulty = this.scene.gameMode.challenges.reduce((v, c) => v + c.getDifficulty(), 0);
        const totalMinDifficulty = this.scene.gameMode.challenges.reduce((v, c) => v + c.getMinDifficulty(), 0);
        if (totalDifficulty >= totalMinDifficulty) {
          this.scene.unshiftPhase(new SelectStarterPhase(this.scene));
          this.scene.getCurrentPhase()?.end();
          success = true;
        } else {
          success = false;
        }
      } else {
        this.startCursor.setVisible(true);
        this.cursorObj?.setVisible(false);
        success = true;
      }
    } else {
      switch (button) {
      case Button.UP:
        if (this.cursor === 0) {
          if (this.scrollCursor === 0) {
            // When at the top of the menu and pressing UP, move to the bottommost item.
            if (numberOfUpdates > rowsToDisplay) { // If there are more than 9 challenges, scroll to the bottom
              // First, set the cursor to the last visible element, preparing for the scroll to the end.
              const successA = this.setCursor(rowsToDisplay - 1);
              // Then, adjust the scroll to display the bottommost elements of the menu.
              const successB = this.setScrollCursor(numberOfUpdates - rowsToDisplay);
              success = successA && successB; // success is just there to play the little validation sound effect
            } else { // If there are 9 or less challenges, just move to the bottom one
              success = this.setCursor(numberOfUpdates - 1);
            }
          } else {
            success = this.setScrollCursor(this.scrollCursor - 1);
          }
        } else {
          success = this.setCursor(this.cursor - 1);
        }
        if (success) {
          this.updateText();
        }
        break;
      case Button.DOWN:
        if (this.cursor === rowsToDisplay - 1) {
          if (this.scrollCursor < numberOfUpdates - rowsToDisplay) {
            // When at the bottom and pressing DOWN, scroll if possible.
            success = this.setScrollCursor(this.scrollCursor + 1);
          } else {
            // When at the bottom of a scrolling menu and pressing DOWN, move to the topmost item.
            // First, set the cursor to the first visible element, preparing for the scroll to the top.
            const successA = this.setCursor(0);
            // Then, adjust the scroll to display the topmost elements of the menu.
            const successB = this.setScrollCursor(0);
            success = successA && successB; // success is just there to play the little validation sound effect
          }
        } else if (numberOfUpdates < rowsToDisplay && this.cursor === numberOfUpdates - 1) {
          // When at the bottom of a non-scrolling menu and pressing DOWN, move to the topmost item.
          success = this.setCursor(0);
        } else {
          success = this.setCursor(this.cursor + 1);
        }
        if (success) {
          this.updateText();
        }
        break;
      }
    }

    // Plays a select sound effect if an action was successfully processed.
    if (success) {
      ui.playSelect();
    }

    return success;
  }

  setCursor(cursor: integer): boolean {
    let ret = super.setCursor(cursor);

    if (!this.cursorObj) {
      this.cursorObj = this.scene.add.nineslice(0, 0, "summary_moves_cursor", undefined, this.optionsWidth - 8, 16, 1, 1, 1, 1);
      this.cursorObj.setOrigin(0, 0);
      this.valuesContainer.add(this.cursorObj);
    }

    ret ||= !this.cursorObj.visible;
    this.cursorObj.setVisible(true);

    this.cursorObj.setPositionRelative(this.optionsBg, 4, 4 + (this.cursor + this.scrollCursor) * 16);

    return ret;
  }

  setScrollCursor(scrollCursor: integer): boolean {
    if (scrollCursor === this.scrollCursor) {
      return false;
    }

    this.scrollCursor = scrollCursor;

    this.setCursor(this.cursor);

    return true;
  }

  getActiveChallenge(): Challenge {
    return this.scene.gameMode.challenges[this.cursor + this.scrollCursor];
  }

  clear() {
    super.clear();
    this.whatsNewContainer.setVisible(false);
    this.eraseCursor();
  }

  eraseCursor() {
    if (this.cursorObj) {
      this.cursorObj.destroy();
    }
    this.cursorObj = null;
  }
}
