import { mapUserFromDatabaseUserResponse } from '../../services/user';

import ERRORS from '../../constants/errors';

export default function(app, db) {
    app.post('/getUser', (req, res) => {
        const { login } = req.body;

        db.collection('users').find({ login: login }).toArray()
            .then(result => {
                if (result.length === 1) {
                    const user = result[0];

                    res.send(mapUserFromDatabaseUserResponse(user));
                } else {
                    res.send(res.send(ERRORS.USER.USER_NOT_FOUND.message));
                }
            });
    });
}
