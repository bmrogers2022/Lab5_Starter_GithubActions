// unit.test.js

import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
  } from '../code-to-unit-test/unit-test-me';
  
  describe('Testing', () => {
    
    describe('Phone Number Validation', () => {
      test('Accepts full phone number', () => {
        expect(isPhoneNumber('+1 (123) 456-7890')).toBe(true);
      });
      test('Accepts my number', () => {
        expect(isPhoneNumber('305-7878')).toBe(true);
      });
      test('Invalid symbols test', () => {
        expect(isPhoneNumber('$%^&*')).toBe(false);
      });
      test('Rejects letters', () => {
        expect(isPhoneNumber('ABC-7838')).toBe(false);
      });
    });
  
    describe('Email Validation', () => {
      test('Accepts valid email', () => {
        expect(isEmail('correct@example.com')).toBe(true);
      });
      test('Rejects invalid email', () => {
        expect(isEmail('notvalidemail')).toBe(false);
      });
      test('Rejects email without "@" symbol', () => {
        expect(isEmail('alsonotvalid.com')).toBe(false);
      });
    });
  
    describe('Password Strength Validation', () => {
      test('Accepts strong password', () => {
        expect(isStrongPassword('StrongPassword12#')).toBe(true);
      });
      test('Rejects weak password', () => {
        expect(isStrongPassword('notstrong')).toBe(false);
      });
    });

    describe('Date Validation', () => {
      test('Accepts valid date', () => {
        expect(isDate('2024-05-07')).toBe(true);
      });
      test('Rejects invalid date format', () => {
        expect(isDate('May 7, 2024')).toBe(false);
      });
      test('Rejects invalid date value', () => {
        expect(isDate('2024-34-50')).toBe(false);
      });
    });
  
    describe('Hex Color Code Validation', () => {
      test('Accepts valid hex color code', () => {
        expect(isHexColor('#ff0000')).toBe(true);
      });
      test('Rejects invalid hex color code', () => {
        expect(isHexColor('#xyz123')).toBe(false);
      });
    });
  });
