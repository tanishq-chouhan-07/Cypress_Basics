Here’s a **complex but doable Cypress automation practice task** that mirrors what you’d face in real-world test automation (forms, auth, API, UI state, async behavior, and data handling).

---

## 🧪 Cypress Practice Project: End-to-End E-Commerce Automation

### 🌐 Application Under Test (AUT)

Use a **public demo site** (stable & Cypress-friendly):

**[https://www.saucedemo.com/](https://www.saucedemo.com/)**
(Username: `standard_user`, Password: `secret_sauce`)

---

## 🎯 Goal

Build a **robust Cypress test suite** that covers:

* Authentication
* UI validation
* Dynamic content
* Network interception
* Data-driven testing
* Custom commands
* Page Object Model
* API + UI integration

---

## 📌 TASK BREAKDOWN

---

## 1️⃣ Authentication Flow (Advanced)

### Requirements

* Validate login with:

  * Valid credentials
  * Invalid password
  * Locked user
* Assert:

  * Error message text
  * Error icon presence
  * URL change after success

### Challenges

* Use **custom Cypress commands**
* Avoid hardcoded waits

### Expectations

```js
cy.login('standard_user', 'secret_sauce')
cy.login('locked_out_user', 'secret_sauce')
```

---

## 2️⃣ Product Listing Page Validation

### Requirements

* Assert:

  * Product count = 6
  * Each product has:

    * Name
    * Price
    * Image
    * Add to Cart button
* Validate product price format (e.g. `$29.99`)

### Challenges

* DOM traversal
* Iterating elements with `.each()`

---

## 3️⃣ Sorting & Filtering (UI + Logic)

### Requirements

* Sort products by:

  * Price (low → high)
  * Name (Z → A)
* Validate sorting logic programmatically

### Challenges

* Extract text → convert to numbers
* Compare arrays

---

## 4️⃣ Cart Management (Stateful Testing)

### Requirements

* Add **multiple products** to cart
* Remove one product
* Validate:

  * Cart badge count
  * Correct items in cart page
  * Button text changes (`Add to Cart → Remove`)

### Challenges

* State verification
* Conditional assertions

---

## 5️⃣ Checkout Flow (Form + Validation)

### Requirements

* Fill checkout form
* Validate:

  * Mandatory fields
  * Error messages
  * Successful order confirmation

### Bonus

* Use **fixture data** for user info

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "zip": "12345"
}
```

---

## 6️⃣ Network Interception (API + UI)

### Requirements

* Intercept product API call
* Assert:

  * Response status = 200
  * Products count from API matches UI

### Cypress Feature

```js
cy.intercept('GET', '**/inventory*').as('products')
cy.wait('@products')
```

---

## 7️⃣ Session & Cookie Handling

### Requirements

* Preserve session between tests
* Validate:

  * Auth cookie exists
  * User remains logged in on refresh

### Use

```js
cy.session()
```

---

## 8️⃣ Visual & Accessibility Checks (Optional Advanced)

### Requirements

* Validate:

  * Broken images
  * Button visibility
  * Color contrast (basic)
  * Keyboard navigation (Tab)

---

## 🧱 Framework Expectations

### Project Structure

```
cypress/
 ├── e2e/
 │   ├── auth.cy.js
 │   ├── products.cy.js
 │   ├── cart.cy.js
 │   └── checkout.cy.js
 ├── fixtures/
 │   └── user.json
 ├── support/
 │   ├── commands.js
 │   └── pageObjects/
```

---

## 🧠 Advanced Bonus Tasks (Real Interview Level)

* Retry logic for flaky tests
* Environment-based config
* Headless execution in CI
* Generate HTML reports
* Tag tests (`@smoke`, `@regression`)
* Parallel execution

---

## ✅ What You’ll Learn

✔ Real-world Cypress patterns
✔ Handling async UI + APIs
✔ Clean test architecture
✔ Interview-ready automation skills

---
