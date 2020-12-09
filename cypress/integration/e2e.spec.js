describe("음악 강좌 검색 후 수강 테스트", () => {
  it("Learn-air 접속에 성공한다", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.viewport("samsung-s10");
    cy.visit("http://localhost:3000");
  });
  it("카카오 로그인에 성공한다", () => {
    cy.get("#login").click();
    cy.get("#kakaoLogin").click();

    cy.get("#id_email_2").type(Cypress.env("id"), { force: true });
    cy.get("#id_password_3").type(Cypress.env("password"), { force: true });
    cy.get(
      "#login-form > fieldset > div.wrap_btn > button.btn_g.btn_confirm.submit"
    ).click({ force: true });

    cy.get("#acceptButton").click();
  });

  it("(기타) 키워드로 강좌를 검색하여 3개의 검색 결과를 얻는다", () => {
    cy.get("#search").type("기타", { force: true }).type("{enter}");
    cy.get("div.result").should("have.length", 3);
  });

  it("검색 결과의 첫번째 강좌 클릭에 성공한다", () => {
    cy.get("div.result").first().click();
  });

  it("지금 신청하기 버튼을 누른다", () => {
    cy.get("#apply").should("have.text", "지금 신청하기");
    cy.get("#apply").click();
  });

  it("줌 링크 접속에 성공한다", () => {
    cy.url().should("include", "zoom");
  });
});

describe("음악 카테고리 클릭 후 수강 테스트", () => {
  it("Learn-air 접속에 성공한다", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.viewport("samsung-s10");
    cy.visit("http://localhost:3000");
  });
  it("카카오 로그인에 성공한다", () => {
    cy.get("#login").click();
    cy.get("#kakaoLogin").click();

    cy.get("#acceptButton").click();
  });

  it("로그인을 한 튜티가 (음악) 카테고리를 클릭한다.", () => {
    cy.get("#music", { timeout: 15000 }).click({ force: true });
  });

  it("음악 카테고리 강좌 리스트의 첫번째 강좌 클릭에 성공한다", () => {
    cy.get("#best").click();
  });

  it("지금 신청하기 버튼을 누른다", () => {
    cy.get("#apply").should("have.text", "지금 신청하기");
    cy.get("#apply").click();
  });

  it("줌 링크 접속에 성공한다", () => {
    cy.url().should("include", "zoom");
  });
});
