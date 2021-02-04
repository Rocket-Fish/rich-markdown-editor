import { toggleMark } from "prosemirror-commands";
import markInputRule from "../lib/markInputRule";
import Mark from "./Mark";

export default class DiffRed extends Mark {
  get name() {
    return "diffRed";
  }

  get schema() {
    return {
      parseDOM: [{ tag: "mark.red" }],
      toDOM: () => ["mark", {class: 'red'}],
    };
  }

  // inputRules({ type }) {
  //   return [markInputRule(/(?:==)([^=]+)(?:==)$/, type)];
  // }

  // keys({ type }) {
  //   return {
  //     "Mod-Ctrl-h": toggleMark(type),
  //   };
  // }

  get toMarkdown() {
    return {
      open: "!!",
      close: "!!",
      mixable: true,
      expelEnclosingWhitespace: true,
    };
  }

  parseMarkdown() {
    return { mark: "diffRed" };
  }
}
