// bmi.js - Logic functions for BMI and health calculations

export function calculateBMI(weight, heightCm) {
  if (!weight || !heightCm) return null;
  const heightM = heightCm / 100;
  return weight / (heightM * heightM);
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 23) return 'Normal';
  if (bmi < 25) return 'Overweight';
  if (bmi < 30) return 'Obese';
  return 'Severely Obese';
}

export function getCalories(weight, height, age, gender) {
  // Mifflin-St Jeor Equation
  if (gender === 'male') {
    return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  } else {
    return Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  }
}

export function getWaterIntake(weight) {
  return +(weight * 0.03).toFixed(2);
}

export function getProtein(weight) {
  return +(weight * 1.2).toFixed(1); // 1.2g per kg as a general guideline
}

export function getBMR(weight, height, age, gender) {
  // Mifflin-St Jeor Equation
  if (gender === 'male') {
    return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  } else {
    return Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  }
}

export function getBodyFat(bmi, age, gender) {
  // Deurenberg formula
  if (gender === 'male') {
    return +(1.20 * bmi + 0.23 * age - 16.2).toFixed(1);
  } else {
    return +(1.20 * bmi + 0.23 * age - 5.4).toFixed(1);
  }
}
