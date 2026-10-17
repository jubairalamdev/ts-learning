// enum

// set of foxed string literal ek jaygay rakhe

// type UserRoles = "Admin" | "Editor" | "Viewer";

enum UserRoles {
    Admin = 'Admin',
    Editor = 'Editor',
    Voewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
    if ( role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
}

const isEditPermissible = canEdit("Admin");
console.log(isEditPermissible)