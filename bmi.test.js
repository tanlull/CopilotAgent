// bmi.test.js - Unit tests for bmi.js health calculation functions
import assert from 'assert';
import {
  calculateBMI,
  getBMICategory,
  getCalories,
  getWaterIntake,
  getProtein,
  getBMR,
  getBodyFat
} from './bmi.js';

// Test BMI calculation
assert.strictEqual(calculateBMI(70, 170).toFixed(2), '24.22', 'BMI should be 24.22 for 70kg, 170cm');
assert.strictEqual(calculateBMI(50, 160).toFixed(2), '19.53', 'BMI should be 19.53 for 50kg, 160cm');
assert.strictEqual(calculateBMI(90, 180).toFixed(2), '27.78', 'BMI should be 27.78 for 90kg, 180cm');

// Test BMI category
assert.strictEqual(getBMICategory(17), 'Underweight', 'BMI 17 = Underweight');
assert.strictEqual(getBMICategory(21), 'Normal', 'BMI 21 = Normal');
assert.strictEqual(getBMICategory(24), 'Overweight', 'BMI 24 = Overweight');
assert.strictEqual(getBMICategory(28), 'Obese', 'BMI 28 = Obese');
assert.strictEqual(getBMICategory(32), 'Severely Obese', 'BMI 32 = Severely Obese');

// Test Calories (Mifflin-St Jeor)
assert.strictEqual(getCalories(70, 170, 30, 'male'), 1665, 'Calories for male');
assert.strictEqual(getCalories(55, 160, 25, 'female'), 1299, 'Calories for female');

// Test Water Intake
assert.strictEqual(getWaterIntake(70), 2.10, 'Water intake for 70kg');
assert.strictEqual(getWaterIntake(55), 1.65, 'Water intake for 55kg');

// Test Protein
assert.strictEqual(getProtein(70), 84.0, 'Protein for 70kg');
assert.strictEqual(getProtein(55), 66.0, 'Protein for 55kg');

// Test BMR
assert.strictEqual(getBMR(70, 170, 30, 'male'), 1665, 'BMR for male');
assert.strictEqual(getBMR(55, 160, 25, 'female'), 1299, 'BMR for female');

// Test Body Fat (Deurenberg)
assert.strictEqual(getBodyFat(24.22, 30, 'male'), 17.7, 'Body fat for male');
assert.strictEqual(getBodyFat(19.53, 25, 'female'), 19.7, 'Body fat for female');

console.log('All health calculation tests passed!');
