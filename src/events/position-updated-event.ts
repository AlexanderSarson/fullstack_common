import { Subjects } from './subjects';

interface PositionUpdatedEvent {
  subject: Subjects.PositionUpdated;
  data: {
    id: string;
    userId: string;
    coordinates: number[];
    expiresAt: string;
    version: number;
  };
}

export { PositionUpdatedEvent };
