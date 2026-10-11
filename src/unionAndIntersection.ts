// union type => |

type UserRole = 'admin' | 'user' | 'guests'

const getDashboard = (role : UserRole) => {
    if(role === 'admin'){
        return 'Admin dashboard'
    } else if (role === 'user') {
        return "User Dashboard"
    } else {
        return "Guest Dashboard"
    }
}

getDashboard('user')

// intersection type => &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager

const ChowdhuryShaheb: EmployeeManager = {
    name: "Chowdhury Shaheb",
    id: '123',
    phoneNo: "01777",
    designation:"Developer",
    teamSize: 20
}