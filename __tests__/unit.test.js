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
      test('Accepts gmails', () => {
        expect(isEmail('valid@gmails.com')).toBe(true);
      });
    });
  
    describe('Password Strength Validation', () => {
      test('Accepts strong password', () => {
        expect(isStrongPassword('StrongPass12')).toBe(true);
      });
      test('Rejects weak password', () => {
        expect(isStrongPassword('notstrongbecuaselength')).toBe(false);
      });
      test('Rejects weak password', () => {
        expect(isStrongPassword('1a@1')).toBe(false);
      });
      test('Accepts strong password', () => {
        expect(isStrongPassword('aaaaaaaaa')).toBe(true);
      });
    });

    describe('Date Validation', () => {
      test('Accepts valid date', () => {
        expect(isDate('5/7/2004')).toBe(true);
      });
      test('Rejects invalid date format', () => {
        expect(isDate('May 7, 2024')).toBe(false);
      });
      test('Rejects invalid date value', () => {
        expect(isDate('2024-12-12')).toBe(false);
      });
      test('Accepts old date', () => {
        expect(isDate('10/10/1001')).toBe(true);
      });
    });
  
    describe('Hex Color Code Validation', () => {
      test('Accepts valid hex color code', () => {
        expect(isHexColor('#ff0000')).toBe(true);
      });
      test('Rejects invalid hex color code', () => {
        expect(isHexColor('#xyz123')).toBe(false);
      });
      test('Accepts valid hex color code', () => {
        expect(isHexColor('#ffffff')).toBe(true);
      });
      test('Rects long hex color code', () => {
        expect(isHexColor('#fffffff')).toBe(false);
      });
    });
  });
