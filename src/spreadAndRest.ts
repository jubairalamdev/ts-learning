// spread operator

//array spread
const friends = ["Rahim", "Karim"]

const schoolFriends = ["Pintu", "Chintu", "Bulbul"]

const collegeFriends = ["Mr. Smart", "Mr. very Smart"]

friends.push(...schoolFriends)
friends.push(...collegeFriends)

// console.log(friends);


// object spread

const user = {name: "Mezba", phoneNo: "017000000"};

const otherInfo = {hobby: "outing", favouriteColor: "Black"};

const userInfo = {...user, ...otherInfo};

// console.log(userInfo)


// rest opearator

const sendInvite = (...friends: string[]) => {
    friends.forEach(friend => {
        console.log("Send Invite to ", friend)
    });
}

sendInvite("Pintu", "Chintu", "Bulbul", "Mezba")