import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizeIndianPhoneNumber,
  validateEnquiryForm,
  buildWhatsAppEnquiryUrl,
  formatDisplayPhone
} from './appointmentUtils';

test('sanitizeIndianPhoneNumber handles standard 10-digit Indian numbers', () => {
  assert.equal(sanitizeIndianPhoneNumber('9654002800'), '9654002800');
  assert.equal(sanitizeIndianPhoneNumber('+91 96540 02800'), '9654002800');
  assert.equal(sanitizeIndianPhoneNumber('09654002800'), '9654002800');
  assert.equal(sanitizeIndianPhoneNumber('91-9654002800'), '9654002800');
});

test('validateEnquiryForm validates patient name, phone, and service', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  // Valid submission
  const validData = {
    fullName: 'Rahul Sharma',
    phoneNumber: '9654002800',
    serviceId: 'whole-body-ultrasound',
    preferredDate: tomorrowStr
  };
  const validResult = validateEnquiryForm(validData);
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);

  // Invalid submission: missing name, invalid phone, empty service
  const invalidData = {
    fullName: '',
    phoneNumber: '12345',
    serviceId: '',
    preferredDate: '2020-01-01'
  };
  const invalidResult = validateEnquiryForm(invalidData);
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phoneNumber);
  assert.ok(invalidResult.errors.serviceId);
  assert.ok(invalidResult.errors.preferredDate);
});

test('buildWhatsAppEnquiryUrl generates correct URL and contains patient details', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const data = {
    fullName: 'Pooja Verma',
    phoneNumber: '9876543210',
    serviceId: 'color-doppler',
    preferredDate: tomorrowStr,
    message: 'Prescribed by Dr. Kumar for left leg swelling'
  };

  const url = buildWhatsAppEnquiryUrl(data);
  assert.ok(url.startsWith('https://wa.me/919654002800?text='));
  assert.ok(url.includes(encodeURIComponent('Pooja Verma')));
  assert.ok(url.includes(encodeURIComponent('Color Doppler')));
  assert.ok(url.includes(encodeURIComponent('Dr. Kumar')));
});

test('formatDisplayPhone formats 10-digit number nicely', () => {
  assert.equal(formatDisplayPhone('9654002800'), '+91 96540 02800');
});
