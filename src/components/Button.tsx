import { ComponentChildren } from "preact";

export default function Button({
  children,
  link,
}: {
  children: ComponentChildren;
  link: string;
}) {
  return (
    <a className="mr-2 ml-2 p-2 bg-yellow-300 text-slate-800 text-center rounded-xl" href={link}>
      {children}
    </a>
  );
}
