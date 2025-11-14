import { e as s, x as t, d as a, __tla as __tla_0 } from "./index-XYoOAQ19.js";
import { d as o, __tla as __tla_1 } from "./index-C7tKhyx7.js";
let g, l, d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  l = {
    choice1: {
      id: "choice1",
      criteria: {
        currentState: a.DIALOG_CHOICE_1
      },
      triggerDialog: null,
      choiceStateKey: "dialogChoice1",
      prompt: null,
      choices: [
        {
          text: "Someone who made a mistake.",
          responseType: t.EMPATH,
          dialog: o.dialogChoice1Empath
        },
        {
          text: "Someone who was never taught better.",
          responseType: t.PSYCHOLOGIST,
          dialog: o.dialogChoice1Psychologist
        },
        {
          text: "Someone with stolen property.",
          responseType: t.LAWFUL,
          dialog: o.dialogChoice1Lawful
        }
      ],
      onSelect: (e, i) => ({
        currentState: a.DIALOG_CHOICE_1
      })
    },
    catChoice: {
      id: "catChoice",
      criteria: {
        currentState: a.CAT_DIALOG_CHOICE
      },
      triggerDialog: null,
      choiceStateKey: "catDialogChoice",
      prompt: null,
      choices: [
        {
          text: "Good kitty.",
          responseType: t.CAT_GOOD_KITTY,
          dialog: o.coleGoodKitty
        },
        {
          text: "Damn cats.",
          responseType: t.CAT_DAMN_CATS,
          dialog: o.coleDamnCats
        }
      ],
      onSelect: (e, i) => ({})
    },
    cat2Choice: {
      id: "cat2Choice",
      criteria: {
        currentState: a.CAT_DIALOG_CHOICE_2
      },
      triggerDialog: null,
      choiceStateKey: "catDialogChoice2",
      prompt: null,
      choices: [
        {
          text: "Hey, there's my friend.",
          responseType: t.CAT_MY_FRIEND,
          dialog: o.cat2DialogFriend
        },
        {
          text: "You again? Git!",
          responseType: t.CAT_GIT,
          dialog: o.cat2DialogGit
        }
      ],
      onSelect: (e, i) => ({})
    },
    choice2: {
      id: "choice2",
      criteria: {
        currentState: a.DIALOG_CHOICE_2
      },
      triggerDialog: null,
      choiceStateKey: "dialogChoice2",
      prompt: null,
      choices: [
        {
          text: "We've caught the Czar red-handed!",
          responseType: t.EMPATH,
          dialog: o.dialogChoice2Empath
        },
        {
          text: "I can't say who's responsible yet...",
          responseType: t.PSYCHOLOGIST,
          dialog: o.dialogChoice2Psychologist
        },
        {
          text: "How do I know this isn't some ruse?",
          responseType: t.LAWFUL,
          dialog: o.dialogChoice2Lawful
        }
      ],
      onSelect: (e, i) => ({
        currentState: a.DIALOG_CHOICE_2
      })
    }
  };
  g = function(e) {
    return {
      id: e.id,
      prompt: e.prompt || null,
      stateKey: e.choiceStateKey,
      choices: e.choices.map((i) => ({
        text: i.text,
        responseType: i.responseType,
        responseDialog: i.dialog || null,
        onSelect: e.onSelect
      }))
    };
  };
  d = function(e, i = /* @__PURE__ */ new Set()) {
    const n = Object.values(l), r = [];
    for (const c of n) i.has(c.id) || c.criteria && !s(e, c.criteria) || r.push(g(c));
    return r;
  };
});
export {
  __tla,
  g as buildChoiceData,
  l as default,
  l as dialogChoices,
  d as getChoicesForState
};
