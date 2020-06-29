export interface DragButtonProps {
  onDragStart: (event: any) => void;
  onDragEnd: (event: any) => void;
}

export interface StyledWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {}
