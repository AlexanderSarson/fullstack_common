import { Subjects } from './subjects';

interface PositionExpiredEvent {
  subject: Subjects.PositionExpired;
  data: {
    id: string;
    version: number;
  };
}

export { PositionExpiredEvent };
