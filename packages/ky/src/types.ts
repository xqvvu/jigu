export type ErrorResult = {
  errcode: number;
  errmsg: string;
  status: "fail";
};

export type SuccessResult<T = unknown> = {
  message: string;
  status: "ok";
  code: number;
  data?: T;
};

export type Result<T = unknown> = ErrorResult | SuccessResult<T>;
