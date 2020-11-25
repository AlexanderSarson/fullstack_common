import { Subjects } from './subjects';

interface PositionExpiredEvent {
  subject: Subjects.PositionExpired;
  data: {
    id: string;
  };
}

export { PositionExpiredEvent };
