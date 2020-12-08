function reviewTutor(review) {
  const { ratingValue, evaluateForm } = review;
  return { ratingValue, evaluateForm };
}

function evaluateTutee(review) {
  const { ratingValue, evaluateForm } = review;
  return { ratingValue, evaluateForm };
}

module.exports = { reviewTutor, evaluateTutee };
