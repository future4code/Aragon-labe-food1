export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToSignup = (navigate) => {
  navigate("/signup");
};

export const goToFeed = (navigate) => {
  navigate("/feed");
};

export const goToAddress = (navigate) => {
  navigate("/address");
};

export const goToResultPage = (navigate, restaurantId) => {
  navigate(`/feed/restaurant/${restaurantId}`);
};
