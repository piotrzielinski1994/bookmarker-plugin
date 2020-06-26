export interface WithDroppableInterface {
  isDragOver: boolean;
  onDragOver: (event: any) => void;
  onDragLeave: (event: any) => void;
  onDrop: (event: any) => void;
}

export interface WithDroppableState {
  isDragOver: boolean;
}
