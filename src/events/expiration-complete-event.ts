import { Subjects } from './subjects';

interface ExpirationCompletedEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    positionId: string;
  };
}

export { ExpirationCompletedEvent };
