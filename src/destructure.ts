// object destructuring
const user = {
    id: "123",
    name: {
        firstName: "Jubair",
        middleName: "Alam",
        lastName: "Alif"
    }, 
    gender: "male",
    favouriteColor: "black"
}

// not destructuring
// const myFavouriteColor = user.favouriteColor
// const myMiddleName = user.name.middleName

// destructure methods

const { favouriteColor: myFavouriteColor, name: {middleName: myMiddleName} } = user // name alias, you cannot define type here

// console.log(myFavouriteColor)
// console.log(myMiddleName)


// array destrcturing

const friends = ["karim", "Rahim", "Mahim"]

// const myBestFriend = friends[1]

const [, , myBestFriend] = friends // skip values

console.log(myBestFriend)