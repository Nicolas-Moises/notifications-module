import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-1-recipient-id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-1-recipient-id' }),
        expect.objectContaining({ recipientId: 'example-1-recipient-id' }),
      ]),
    );
  });
});
