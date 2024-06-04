import { LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return { userId };
};

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to dashboard</h1>
    </div>
  );
}
