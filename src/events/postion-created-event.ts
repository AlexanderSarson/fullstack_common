import { Subjects } from './subjects';

interface PositionCreatedEvent {
  subject: Subjects.PositionCreated;
  data: {
    id: string;
    userId: string;
    location: {
      type: string;
      coordinates: number[];
    };
    expiresAt: string;
    version: number;
  };
}

export { PositionCreatedEvent };
