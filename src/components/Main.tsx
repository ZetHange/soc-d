import { ComponentChildren } from "preact";

export default function Main({
  children,
}: {
  children: ComponentChildren;
}) {

  return (
    <>
      <main className="container mx-auto">{children}</main>
    </>
  );
}
