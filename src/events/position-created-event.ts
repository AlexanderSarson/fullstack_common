import { Subjects } from './subjects';

interface PositionCreatedEvent {
  subject: Subjects.PositionCreated;
  data: {
    id: string;
    userId: string;
    coordinates: number[];
    expiresAt: string;
    version: number;
    isActive: boolean;
  };
}

export { PositionCreatedEvent };
