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

export const clearNotificationReminder = async () => {
  const _ = await AsyncStorage.removeItem(NOTIFICATIONS_KEY);
  return Notifications.cancelAllScheduledNotificationsAsync();
};

export const setNotificationReminder = () => {
  try {
    const notificationJSON = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
    const notification = JSON.parse(notificationJSON);

    const wasNotificationSet = notification !== null;

    if (wasNotificationSet) {
      return;
    }

    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted') {
      return;
    }

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
  } catch (error) {
    console.log('An error ocurred while setting notification', error);
  }
};
