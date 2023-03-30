class Student {
  login: any;
  fullName: String;
  id: any;
  constructor(login: String, fullName: String, id: any) {
    this.id = id;
    this.login = login;
    this.fullName = fullName;
  }

}

export default Student;
