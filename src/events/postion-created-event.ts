import { Subjects } from './subjects';

interface PositionCreatedEvent {
  subject: Subjects.PositionCreated;
  data: {
    id: string;
    userId: string;
    longitude: number;
    latitude: number;
  };
}

export { PositionCreatedEvent };