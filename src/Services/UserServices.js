const userService ={};

userService.getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");

}

export default userService;