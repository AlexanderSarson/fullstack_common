import { Subjects } from './subjects';

interface UserDeletedEvent {
  subject: Subjects.UserDeleted;
  data: {
    id: string;
    userName: string;
  };
}

export { UserDeletedEvent };
