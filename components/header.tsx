import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between p-8 border-b h-20">
      <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
        Duolingo
      </h1>

      <div className="flex items-center gap-4">
        <Button variant="secondary">Login</Button>
      </div>
    </header>
  );
}
