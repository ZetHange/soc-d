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
    name: "Билд 0.108.1",
    code: "0.108.1",
    download: "https://builds.soc-d.ml/SOC_D_v0.1_build_108.1.apk",
    downloadYandex: "https://disk.yandex.ru/d/echKJkYwPsZqpQ",
    downloadGoogle:
      "https://drive.google.com/file/d/17JvGRmirmcs0nOgM1I-bZXsKGchTT7VS/view",
  },
  oldVersion: [
    {
      id: 3,
      name: "Билд 0.66.1",
      code: "0.66.1",
      download: "https://builds.soc-d.ml/SOC_D_v0.1_build_66.1[obb].apk",
    },
    {
      id: 2,
      name: "Билд 0.27.1",
      code: "0.27.1",
      download: "https://builds.stalker2d.ml/SOC_D_v0.1_build_27.2.apk",
    },
    {
      id: 1,
      name: "Билд 0.20.1",
      code: "0.20.1",
      download: "https://builds.stalker2d.ml/SOC_D_0.1.apk",
    },
  ],
};
