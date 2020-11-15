import { Subjects } from './subjects';

interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    userName: string;
    name: string;
  };
}

export { UserCreatedEvent };
