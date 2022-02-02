
export interface Track{
  duration: number
  id: number
  title: string
  album:{
    duration?: string
    id?: number
    title: string
    cover_medium:string
    type?: string
  }
  artist:{
    id: number;
    name: string;
    picture_medium: string;
    type: string;
  }
}
