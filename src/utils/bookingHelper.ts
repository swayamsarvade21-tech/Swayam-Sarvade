import { BookingFormState, Car } from '../types';

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppMessage(
  booking: Partial<BookingFormState>,
  car?: Car,
  estimatedCost?: number
): string {
  const parts = [
    `*🚕 NEW CAB BOOKING ENQUIRY - Samartha Tours & Travels*`,
    `----------------------------------------`,
    `*👤 Name:* ${booking.fullName || 'Valued Customer'}`,
    `*📞 Phone:* ${booking.phone || 'Not specified'}`,
    `*📍 Pickup:* ${booking.pickupLocation || 'Ambernath East'}`,
    `*🎯 Drop / Destination:* ${booking.dropLocation || 'Not specified'}`,
    `*📅 Date:* ${booking.pickupDate || 'Earliest available'}`,
    `*⏰ Time:* ${booking.pickupTime || 'Immediate / As per schedule'}`,
    `*🚗 Car Preferred:* ${car?.name || booking.selectedCarId || 'Any Available'} (${booking.acPreference || 'AC'})`,
    `*🛣️ Trip Type:* ${booking.tripType ? booking.tripType.toUpperCase().replace('-', ' ') : 'Outstation / Local'}`,
  ];

  if (estimatedCost && estimatedCost > 0) {
    parts.push(`*💰 Estimated Fare:* Approx ${formatINR(estimatedCost)} (excl. actual toll/parking)`);
  }

  if (booking.specialRequests) {
    parts.push(`*📝 Special Requests:* ${booking.specialRequests}`);
  }

  parts.push(`----------------------------------------`);
  parts.push(`_Please confirm cab availability and best rate. Thank you!_`);

  return parts.join('\n');
}

export function openWhatsAppChat(
  phone: string = '917021751532',
  message: string
) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

export function makePhoneCall(phone: string) {
  window.location.href = `tel:${phone}`;
}
