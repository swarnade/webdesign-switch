function getUserPreference() {
    return localStorage.getItem('theme');
  }
  function saveUserPreference(userPreference) {
    localStorage.setItem('theme', userPreference);
  }
  
  function getAppliedMode(userPreference) {
    if (userPreference === 'light') {
      return 'light';
    }
    if (userPreference === 'dark') {
      return 'dark';
    }
  }
  
  function setAppliedMode(mode) {
    document.documentElement.dataset.appliedMode = mode;
  }
  
  function rotatePreferences(userPreference) {
    if (userPreference === 'light') {
      return 'dark';
    }
    if (userPreference === 'dark') {
      return 'light';
    }
  }
  
  const themeDisplay = document.getElementById('mode');
  const themeToggler = document.getElementById('color_mode');
  
  let userPreference = getUserPreference();
  setAppliedMode(getAppliedMode(userPreference));
  themeDisplay.innerText = userPreference;
  
  themeToggler.onclick = () => {
    const newUserPref = rotatePreferences(userPreference);
    userPreference = newUserPref;
    saveUserPreference(newUserPref);
    themeDisplay.innerText = newUserPref;
    setAppliedMode(getAppliedMode(newUserPref));
  }