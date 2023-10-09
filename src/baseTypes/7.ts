/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  Monday = 'monday',
   Tuesday = 'tuesday',
   Wednesday = 'wednesday',
   Thursday = 'thursday',
   Friday = 'friday',
   Saturday = 'saturday',
   Sunday = 'sunday'
 }

 function isWeekend(weekday: Weekdays): boolean {
  return weekday === Weekdays.Saturday || weekday === Weekdays.Sunday;
}