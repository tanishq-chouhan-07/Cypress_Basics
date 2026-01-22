describe("login automation" , ()=>{
    it("Visit the Login Automation Page ",()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username")
        .click()
        .type("student");
        cy.get("#password")
        .click()
        .fill("Password123");
        cy.get("#submit")
        .click()
        cy.url()
    })

})

//cy.url;
//cy.intercept
//cy.fill'