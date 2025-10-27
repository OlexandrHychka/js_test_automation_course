# HW_3: User Questionnaire

## Description
A JavaScript program that collects user information and provides feedback based on age and employment status.

## Features
- Collects user name, age, and work status
- Validates input data
- Provides age-appropriate messages
- For working adults, asks about work experience and provides experience level feedback

## Files

### 1. `user_questionnaire.js` (Interactive Version)
- Prompts user for input through console
- Validates all inputs
- Supports multiple languages (English/Ukrainian)
- Run: `node user_questionnaire.js`

### 2. `user_questionnaire_simple.js` (Simple Version)
- Uses predefined constants for testing
- Easy to modify test values
- Run: `node user_questionnaire_simple.js`

## Logic Flow

1. **Input Collection:**
   - Name (string)
   - Age (number, validated)
   - Work status ("yes"/"no", validated)

2. **Age Validation:**
   - Must be a positive number
   - Must be less than 150

3. **Work Status Validation:**
   - Accepts: "yes", "no", "так", "ні", "y", "n"

4. **Output Messages:**
   - Age < 18: "You are still a minor."
   - Age ≥ 18 + Working: "You are an adult worker." + Experience level
   - Age ≥ 18 + Not working: "You are an adult, but currently not working."

5. **Experience Levels:**
   - < 3 years: "You are a beginner. There's still a lot ahead!"
   - 3-9 years: "You are an experienced worker."
   - 10+ years: "You are a true professional in your field!"

## Example Usage

### Interactive Version:
```bash
node user_questionnaire.js
```
```
=== User Questionnaire ===

What is your name? John Doe
What is your age? 25
Are you working? (yes/no): yes
How many years have you been working? 5

Hello, John Doe!
You are an adult worker.
You are an experienced worker.
```

### Simple Version:
```bash
node user_questionnaire_simple.js
```
```
=== User Questionnaire (Simple Version) ===

Name: John Doe
Age: 25
Working: yes

Hello, John Doe!
You are an adult worker.
You are an experienced worker.
```

## Test Cases

### Test Case 1: Minor
- Age: 16, Working: no
- Expected: "You are still a minor."

### Test Case 2: Adult Worker (Beginner)
- Age: 20, Working: yes, Experience: 1
- Expected: "You are an adult worker." + "You are a beginner..."

### Test Case 3: Adult Worker (Professional)
- Age: 35, Working: yes, Experience: 12
- Expected: "You are an adult worker." + "You are a true professional..."

### Test Case 4: Adult Not Working
- Age: 22, Working: no
- Expected: "You are an adult, but currently not working."

## Author
Hupalo Yurii
