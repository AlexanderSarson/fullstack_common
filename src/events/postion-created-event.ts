import { Subjects } from './subjects';

interface PositionCreatedEvent {
  subject: Subjects.PositionCreated;
  data: {
    id: string;
    userId: string;
    coordinates: number[];
    version: number;
  };
}

export { PositionCreatedEvent };
