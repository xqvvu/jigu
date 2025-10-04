import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";
import { CreateUserSchema } from "@jigu/shared/schema/users";

export class CreateUserDto extends createZodDto(
  extendApi(CreateUserSchema, {
    description: "用户注册接口参数",
  }),
) {}
