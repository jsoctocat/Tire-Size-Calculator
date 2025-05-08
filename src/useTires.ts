import tireSizes from "./data/tireSizes";

export interface Tire {
  width: string;
  aspectRatio: string;
  diameter: string;
}

const useTireSizes = () => ({ data: tireSizes });

export default useTireSizes;
