const MUSEUM_SCHEDULE = {
  1: null,
  2: null,
  3: { open: '10:00', close: '17:00' },
  4: { open: '10:00', close: '17:00' },
  5: { open: '12:00', close: '19:00' },
  6: { open: '11:00', close: '18:00' },
  0: { open: '10:00', close: '17:00' },
};

export const checkMuseumStatus = () => {
  const now = new Date();
  const currentDay = now.getDay();

  const todaySchedule = MUSEUM_SCHEDULE[currentDay];

  if (!todaySchedule) {
    return { isOpen: false };
  }

  const { open, close } = todaySchedule;

  return { isOpen: true, schedule: `${open} - ${close}` };
};
