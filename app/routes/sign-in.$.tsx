import { Particles } from "~/components/landing/Particles";
import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Particles className="absolute inset-0 -z-10" />

      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#161616",
            colorText: "#161616",
          },
        }}
      />
    </div>
  );
}
