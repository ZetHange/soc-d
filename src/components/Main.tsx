import { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";

export default function Main({
  title,
  children,
}: {
  title: string;
  children: ComponentChildren;
}) {
  useEffect(() => {
    document.title = `${title} :: SoC_D`;
  }, []);

  return (
    <>
      <main className="container mx-auto">{children}</main>
    </>
  );
}
