import { CommandList, EnvEncrypt, EnvPlane, Result } from "./_components";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10">
      <EnvPlane />
      <EnvEncrypt />
      <Result />
      <CommandList />
    </main>
  );
}
