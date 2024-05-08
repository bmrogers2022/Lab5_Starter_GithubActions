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
      
    });
  
    describe('Password Strength Validation', () => {
      
    });

    describe('Date Validation', () => {
      
    });
  
    describe('Hex Color Code Validation', () => {
      
    });
  });