export const mapUserFromDatabaseUserResponse = ({ _id: id, login, name, loginStatus }) => {
    return id && login && name && (loginStatus !== undefined)
        ? { id: id, login: login, name: name, loginStatus: loginStatus }
        : undefined;
};
