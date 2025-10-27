# HW_4: User Employment Status Checker

## Description
A JavaScript program that demonstrates all the topics covered in Task 2:
- Variables
- Data Types
- Comparison Operators
- Logical Operators
- Conditional Statements

## Topics Covered

### 1. Variables
- `name` - stores user's name
- `age` - stores user's age
- `isWorker` - stores work status
- `experience` - stores years of work experience

### 2. Data Types
- `string` - for name and work status
- `number` - for age and experience
- `boolean` - conditionally for work status validation

### 3. Comparison Operators
- `>=` - greater than or equal to
- `<` - less than
- `!==` - not equal to
- `>` - greater than
- `<=` - less than or equal to

### 4. Logical Operators
- `&&` - logical AND
- `||` - logical OR

### 5. Conditional Statements
- `if` - basic conditional
- `else if` - alternative conditions
- `else` - default case
- Nested conditionals for complex logic

## Files

### 1. `user_employment_checker.js` (Interactive Version)
- Prompts user for input through console
- Validates all inputs
- Supports Ukrainian language
- Run: `node user_employment_checker.js`

### 2. `user_employment_checker_simple.js` (Simple Version)
- Uses predefined constants for testing
- Easy to modify test values
- Run: `node user_employment_checker_simple.js`

## Logic Flow

1. **Input Collection:**
   - Name (string)
   - Age (number, validated)
   - Work status ("так"/"ні", validated)

2. **Age Validation:**
   - Must be a positive number
   - Must be less than 150

3. **Work Status Validation:**
   - Accepts: "так", "ні", "yes", "no", "y", "n"

4. **Output Messages:**
   - Age < 18: "Ви ще неповнолітній(я)."
   - Age ≥ 18 + Working: "Ви повнолітній працівник." + Experience level
   - Age ≥ 18 + Not working: "Ви повнолітній, але поки не працюєте."

5. **Experience Levels:**
   - < 3 years: "Ви — початківець. Все ще попереду!"
   - 3-9 years: "Ви — досвідчений працівник."
   - 10+ years: "Ви — справжній профі у своїй справі!"

## Example Usage

### Interactive Version:
```bash
node user_employment_checker.js
```
```
=== Перевірка статусу зайнятості ===

Як вас звати? Олександр Петренко
Скільки вам років? 25
Чи працюєте ви? (так/ні): так
Скільки років ви вже працюєте? 5

Привіт, Олександр Петренко!
Ви повнолітній працівник.
Ви — досвідчений працівник.
```

### Simple Version:
```bash
node user_employment_checker_simple.js
```
```
=== Перевірка статусу зайнятості (Проста версія) ===

Ім'я: Олександр Петренко
Вік: 25
Працює: так

Типи даних:
Ім'я (string): string
Вік (number): number
Працює (boolean): boolean

Привіт, Олександр Петренко!
Ви повнолітній працівник.
Ви — досвідчений працівник.
```

## Test Cases

### Test Case 1: Minor
- Age: 16, Working: ні
- Expected: "Ви ще неповнолітній(я)."

### Test Case 2: Adult Worker (Beginner)
- Age: 20, Working: так, Experience: 1
- Expected: "Ви повнолітній працівник." + "Ви — початківець..."

### Test Case 3: Adult Worker (Professional)
- Age: 35, Working: так, Experience: 12
- Expected: "Ви повнолітній працівник." + "Ви — справжній профі..."

### Test Case 4: Adult Not Working
- Age: 22, Working: ні
- Expected: "Ви повнолітній, але поки не працюєте."

## Code Examples

### Variables Declaration:
```javascript
let name;
let age;
let isWorker;
let experience;
```

### Data Types:
```javascript
const nameStr = String(name);
const ageNum = Number(age);
const isWorkerBool = (isWorker === 'так');
```

### Comparison Operators:
```javascript
if (age < 18) { ... }
if (age >= 18 && isWorker === 'так') { ... }
if (age !== 0) { ... }
```

### Logical Operators:
```javascript
if (age >= 18 && isWorker === 'так') { ... }
if (age < 18 || isWorker !== 'так') { ... }
```

### Conditional Statements:
```javascript
if (age < 18) {
    console.log('Ви ще неповнолітній(я).');
} else if (age >= 18 && isWorker === 'так') {
    console.log('Ви повнолітній працівник.');
} else if (age >= 18 && isWorker !== 'так') {
    console.log('Ви повнолітній, але поки не працюєте.');
}
```

## Author
Hupalo Yurii
