class AuthService {

  settoken(token)
  {
    localStorage.setItem("dashboardapp",token);
  }

  logout() {
    localStorage.removeItem("dashboardapp");
  }
 
  getCurrentUser() {
    return localStorage.getItem('dashboardapp');
  }
}
export default new AuthService();