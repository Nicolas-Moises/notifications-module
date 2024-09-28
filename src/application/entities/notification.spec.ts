import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação'),
      category: '',
      recipientId: 'user123',
    });

    expect(notification).toBeTruthy();
  });

  it('should not be able to create a notification with less than 5 characters', () => {
    //...
  });

  it('should not be able to create a notification with more than 255 characters', () => {
    //...
  });
});
