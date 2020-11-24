import { Subjects } from './subjects';

interface PositionDeletedEvent {
  subject: Subjects.PositionDeleted;
  data: {
    id: string;
  };
}

export { PositionDeletedEvent };
