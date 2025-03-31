class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this.password.toUpperCase()
    }

    set password(value){
        this.password = value.toUpperCase()
    }
}

const hemil = new User("hemil@123","123")
console.log(hemil.password);