import { tint, shade } from "polished";

export const generateColorRange = (baseColor: string) => {
    const lightestShade = tint(0.8, baseColor); // 80% lighter
    const lighterShade = tint(0.6, baseColor); // 60% lighter
    const lightShade = tint(0.4, baseColor); // 40% lighter
    const darkShade = shade(0.2, baseColor); // 20% darker
    const darkerShade = shade(0.4, baseColor); // 40% darker
    const darkestShade = shade(0.6, baseColor); // 60% darker
  
    return [
      {
        color: lightestShade,
        name: `80% lighter (${baseColor})`,
      },
      {
        color: lighterShade,
        name: `60% lighter (${baseColor})`,
      },
      {
        color: lightShade,
        
        name: `40% lighter (${baseColor})`,
      },
      {
        color: darkShade,
        name: `20% darker (${baseColor})`,
      },
      {
        color: darkerShade,
        name: `40% darker (${baseColor})`,
      },
      {
        color: darkestShade,
        name: `60% darker (${baseColor})`,
      },
      {
        color: baseColor,
        name: `Normal 100% (${baseColor})`,
      },
    ];
  };