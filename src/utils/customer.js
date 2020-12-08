function register(customerName, address, creditCardInfo) {
  return { customerName, address, creditCardInfo };
}

function updateProfile(prevUser, nextUser) {
  const { customerName, address, creditCardInfo } = nextUser;
  return { customerName, address, creditCardInfo };
}

module.exports = {
  register,
  updateProfile,
};
