import { WithDroppableInterface } from 'utils/hoc/with-droppable/with-droppable.interfaces';

export interface ListProps extends WithDroppableInterface {}

export interface StyledWrapperProps {
  isDragOver: boolean;
}
