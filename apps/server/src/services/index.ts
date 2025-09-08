import { scriptsService } from "@/services/scripts";

export { BaseService } from "@/services/base";
export { ScriptsService, scriptsService } from "@/services/scripts";

export const services = {
  scripts: scriptsService,
} as const;
