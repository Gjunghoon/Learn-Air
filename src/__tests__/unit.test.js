const { register, updateProfile } = require("../utils/customer");
const { recommendClass } = require("../utils/recommendation");
const { reviewTutor, evaluateTutee } = require("../utils/review");
const { searchClass } = require("../utils/search");

describe("Customer TEST", () => {
  test("회원가입에 성공한다.", () => {
    const newCustomer = register("권중훈", "서울특별시 양천구", "하나카드");

    expect(newCustomer.customerName).toEqual("권중훈");
    expect(newCustomer.address).toEqual("서울특별시 양천구");
    expect(newCustomer.creditCardInfo).toEqual("하나카드");
  });

  test("개인정보 수정에 성공한다.", () => {
    const prevCustomer = {
      customerName: "권중훈",
      address: "서울특별시 양천구",
      creditCardInfo: "하나카드",
    };

    const patchedCustomer = updateProfile(prevCustomer, {
      customerName: "한태우",
      address: "서울특별시 양천구",
      creditCardInfo: "국민카드",
    });

    expect(patchedCustomer.customerName).toEqual("한태우");
    expect(patchedCustomer.address).toEqual("서울특별시 양천구");
    expect(patchedCustomer.creditCardInfo).toEqual("국민카드");
  });
});

describe("Recommendation TEST", () => {
  test("음악 카테고리 튜터를 추천받는다.", () => {
    const recommendedClass = recommendClass("music");
    expect(recommendedClass).toHaveLength(2);
    expect(recommendedClass[0].title).toEqual("어쿠스틱 기타 연주");
  });
});

describe("Review TEST", () => {
  test("튜티가 튜터에게 리뷰 작성에 성공한다.", () => {
    const review = {
      ratingValue: 10,
      evaluateForm: "덕분에 기타의 신이 되었습니다",
    };
    const createdReview = reviewTutor(review);

    expect(createdReview.ratingValue).toEqual(review.ratingValue);
    expect(createdReview.evaluateForm).toEqual(review.evaluateForm);
  });
  test("튜터가 튜터에게 리뷰 작성에 성공한다.", () => {
    const review = {
      ratingValue: 10,
      evaluateForm: "덕분에 기타의 신이 되었습니다",
    };
    const createdReview = evaluateTutee(review);

    expect(createdReview.ratingValue).toEqual(review.ratingValue);
    expect(createdReview.evaluateForm).toEqual(review.evaluateForm);
  });
});

describe("Search TEST", () => {
  test("악기(기타) 강좌 리스트를 (기타) 키워드로 검색시 반환한다", () => {
    const classes = searchClass("기타");

    expect(classes).toHaveLength(3);
    expect(classes[0].category).toEqual("기타");
    expect(classes[1].category).toEqual("기타");
    expect(classes[2].category).toEqual("기타");
  });
});
