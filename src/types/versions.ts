type oldVersion = {
  id: number;
  name: string;
  code: string;
  download: string;
};

export type Version = {
  lastVersion: {
    name: string;
    code: string;
    download: string;
    downloadYandex: string;
    downloadGoogle: string;
  };
  oldVersion: oldVersion[];
};

export const exampleVersions = {
  lastVersion: {
    name: "",
    code: "",
    download: "",
    downloadYandex: "",
    downloadGoogle: "",
  },
  oldVersion: [
    {
      id: 1,
      name: "",
      code: "",
      download: "",
    },
  ],
};
