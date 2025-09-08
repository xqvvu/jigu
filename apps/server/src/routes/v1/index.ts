import { Hono } from "hono";
import scripts from "@/routes/v1/scripts";

const v1 = new Hono();

v1.route("/scripts", scripts);

export default v1;
