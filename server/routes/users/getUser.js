export default function(app, db) {
    app.post('/getUser', (req, res) => {
        const { login, password } = req.body;
        db.collection('users').find({ login: login, password: password }).toArray()
            .then(result => {
                if (result.length === 1) {
                    res.send(result);
                } else {
                    res.send({ message: 'Not found' });
                }
            })
            .catch();
    });
}
