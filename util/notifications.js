import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';

const NOTIFICATIONS_KEY = 'NOTIFICATIONS_KEY';

const getReminderNotification = () => ({
  title: 'Study!',
  body: 'Don\'t forget to study your decks!',
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
});

export const clearNotificationReminder = () => {
  return AsyncStorage
    .removeItem(NOTIFICATIONS_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
};

export const setNotificationReminder = () => {
  return AsyncStorage.getItem(NOTIFICATIONS_KEY)
    .then(JSON.parse)
    .then((notification) => {
      const wasNotificationSet = notification !== null;

      if (wasNotificationSet) {
        return;
      }

      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(20)
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(
              getReminderNotification(),
              {
                time: tomorrow,
                repeat: 'day'
              }
            );

            return AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true));
          }
        });
    });
};
