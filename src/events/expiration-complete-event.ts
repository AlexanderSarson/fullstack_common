import { Subjects } from './subjects';

interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    positionId: string;
  };
}

export { ExpirationCompleteEvent };
