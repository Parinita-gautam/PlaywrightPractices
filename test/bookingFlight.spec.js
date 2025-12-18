import { test, expect } from '@playwright/test';
import { BookingFlight } from '../page/bookingFlight';


test('test', async ({ page }) => {
    const bookingFlight = new BookingFlight(page);
  await bookingFlight.gotoPage();
  await bookingFlight.flight();
});