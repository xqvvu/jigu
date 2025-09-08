import type en from "#/en.json";

type Messages = typeof en;

declare module "vue-i18n" {
  export interface DefineLocaleMessage extends Messages {}
}
