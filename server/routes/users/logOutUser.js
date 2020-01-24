import { ObjectId } from 'mongodb';

import ERRORS from '../../constants/errors';

export default function(app, db) {
    app.put('/logout', (req, res) => {
        const { id } = req.body;
        
        if (id) {
            db.collection('users').find({ _id: ObjectId(id) }).toArray()
                .then(result => {
                    if (result.length === 1) {
                        const { _id, loginStatus } = result[0];

                        if (!loginStatus) {
                            res.send(res.send(ERRORS.USERS.USER_STATUS_IS_SAME.message));
                        } else {
                            db.collection('users').updateOne({ _id: _id }, { $set: { loginStatus: false } })
                                .then(() => {
                                    res.send('OK');
                                });
                        }
                    } else {
                        res.send(res.send(ERRORS.USERS.USER_NOT_FOUND.message));
                    }
                })
                .catch();
        } else {
            res.send(id);
        }
    });
}
