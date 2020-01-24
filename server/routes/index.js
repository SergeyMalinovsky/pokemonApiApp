import getUser from './users/getUser';
import authorizateUser from './users/authorizateUser';
import logOutUser from './users/logOutUser';

export default function(app, db) {
    getUser(app, db);
    authorizateUser(app, db);
    logOutUser(app, db);
}
