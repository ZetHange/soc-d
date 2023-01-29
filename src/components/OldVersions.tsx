import { useState } from "preact/hooks";
import { exampleVersions, Version } from "../types/versions";
import Button from "./Button";

export default function OldVersions(path: any) {
  const [oldVersions, setOldVersions] = useState<Version>(exampleVersions);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    fetch("/versions.json")
      .then((response) => response.json())
      .then((data) => {
        setOldVersions(data);
        setIsLoaded(true);
      });
  }
  
  return (
    <div className="mx-auto">
    <div className="mx-auto grid gap-2 mt-2 rounded-lg bg-slate-50 max-md:w-auto md:w-[500px]">
      <p className="text-center mt-2 text-gray-500">Старые версии:</p>
      {oldVersions.oldVersion.map((version) => (
        <Button link={version.download} key={version.id}>
          {version.name}
        </Button>
      ))}
    </div>
  </div>
  );
}
