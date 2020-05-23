export interface Bookmark {
  id: number;
  title: string;
  href?: string;
  items?: Array<Bookmark> | undefined;
}
