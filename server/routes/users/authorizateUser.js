import ERRORS from '../../constants/errors';

export default function(app, db) {
    app.put('/login', (req, res) => {
        const { login, password } = req.body;
        
        if (login && password) {
            db.collection('users').find({ login: login, password: password }).toArray()
                .then(result => {
                    if (result.length === 1) {
                        const { _id, loginStatus } = result[0];

                        if (loginStatus) {
                            res.send(res.send(ERRORS.USERS.USER_STATUS_IS_SAME.message));
                        } else {
                            db.collection('users').updateOne({ _id: _id }, { $set: { loginStatus: true } })
                                .then(() => {
                                    res.send('OK');
                                });
                        }
                    } else {
                        res.send(res.send(ERRORS.USERS.USER_NOT_FOUND.message));
                    }
                });
        } else {
            res.send(login, password);
        }
    });
}
