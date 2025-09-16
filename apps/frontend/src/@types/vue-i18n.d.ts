import type zhCN from "@jigu/frontend/locales/zh_cn.json";

type Messages = typeof zhCN;

declare module "vue-i18n" {
  export interface DefineLocaleMessage extends Messages {}
}
