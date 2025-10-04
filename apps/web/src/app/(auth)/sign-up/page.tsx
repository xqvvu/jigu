import { uuidv4 } from "@jigu/shared/lib/uuid";
import SignUpForm from "@/app/(auth)/sign-up/sign-up-form";

export default function SignUp() {
  return (
    <div>
      <div>{uuidv4()}</div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}
