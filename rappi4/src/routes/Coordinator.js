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

export const goToProfile = (navigate) => {
  navigate("/profile");
};

export const goToCart = (navigate) => {
  navigate("/cart");
};

export const goToBack = (navigate) => {
  navigate(-1);
};

export const goToEditAddress = (navigate) => {
  navigate("/profile/edit-address");
};

export const goToEditProfile = (navigate) => {
  navigate("/profile/edit-profile");
};
