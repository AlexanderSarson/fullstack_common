import { Subjects } from './subjects';

interface PositionUpdatedEvent {
  subject: Subjects.PositionUpdated;
  data: {
    id: string;
    userId: string;
    longitude: number;
    latitude: number;
  };
}

export { PositionUpdatedEvent };
