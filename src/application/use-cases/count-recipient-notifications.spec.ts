import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'example-1-recipient-id',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'example-1-recipient-id',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'example-2-recipient-id',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-1-recipient-id',
    });

    expect(count).toEqual(2);
  });
});
