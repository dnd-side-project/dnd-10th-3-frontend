enum BaseColorKey {
    Gray = "gray",
    Black = "black",
    Blue = "blue",
    Purple = "purple",
    Red = "red",
    Primary = "primary",
    Current = "current",
}
  
  type ColorfulColorKey =
    | BaseColorKey.Blue
    | BaseColorKey.Purple
    | BaseColorKey.Red
    | BaseColorKey.Primary
  
  type GrayColorKey =
    | BaseColorKey.Gray
  
  export type ColorKey = ColorfulColorKey | GrayColorKey | `${BaseColorKey.Current}`;
  
  //모이다에서 이부분을 수정하여 
  export type ColorType = Record<ColorKey, Record<string,string> | string>;