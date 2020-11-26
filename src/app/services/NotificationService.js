import Notification from '../models/Notification'

class NotificationService {

  async create(notification) {
    await Notification.create(notification);
  }

}

export default NotificationService;
