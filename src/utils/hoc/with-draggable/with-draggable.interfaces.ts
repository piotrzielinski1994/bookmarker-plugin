export interface WithDraggableInterface {
  onDragStart: (event: any) => void;
  onDragEnd: (event: any) => void;
}

export interface WithDraggableState {
  isDragging: boolean;
}
