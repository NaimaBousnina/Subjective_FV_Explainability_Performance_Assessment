async function main() {

    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const session = require('express-session');
    const mongoose = require('mongoose');
    const MongoDBStore = require('connect-mongodb-session')(session);
    const MongoClient = require('mongodb').MongoClient;

    const app = express();
    const Pairs = require("./models/Pairs");
    const Sessions = require("./models/Sessions");
    const Trains = require("./models/Trains");

    var tools = require('./tools');

    const connectDB = require("./db");
    const { Session } = require('inspector');
    const { render } = require('pug');
    connectDB();

    const uri = 'mongodb://localhost:27017/test_1';

    // Number of test pairs and train pairs
    const nPairs = await Pairs.countDocuments({});
    const nTrain = await Trains.countDocuments({});

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use("/public", express.static(path.join(__dirname, 'public')));

    app.use(session({
        secret: '2Ayuj5hb#m3rd6x_&zbSA[wTC[Z-Vy',
        resave: false,
        saveUninitialized: true,
    }));

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');

    const pairs_ref = await Pairs.find({}, { '_id': 0, 'A': 0, 'B': 0 });
    console.log(typeof pairs_ref[0]);


    app.get('/', (req, res) => {
        // console.log(req.query.err)
        if (req.query.err == 'true')
            res.render('full_screen', { errorCont: req.query.err });
        else
            res.render('full_screen', { errorCont: false });
    })

    app.post('/Start1', (req, res) => {
        res.render('index');
    })

    app.get('/index', (req, res) => {
        res.render('index');
    })

    app.post('/Next1', (req, res) => {
        res.render('index_1');
    })

    app.get('/index_1', (req, res) => {
        res.render('index_1');
    })

    app.post('/Next2', (req, res) => {
        res.render('start_train');
    })

    app.get('/start_train', (req, res) => {
        res.render('start_train');
    })

    app.post('/start_train', (req, res) => {
        res.redirect(303, '/train_1');
    })

    app.get('/train_1', (req, res) => {
        Trains.findOne(function(err, pair) {
            if (err || pair == null){
                console.log('Error: ', err);
                res.redirect(303, '/error');
                    }
            else{
                res.render('train_1', {Probe_img: './public/images/train/Probe/Probe_1.png', Gallery_img : './public/images/train/Gallery/Gallery_1.png', First_HM : './public/images/train/HM_1/HM1_1.png', Second_HM : './public/images/train/HM_2/HM2_1.png',
                });
            }
        })
    })

    app.post('/train_1', (req, res) => {
        res.redirect(303, '/train_2');
    })

    app.get('/train_2', (req, res) => {
        Trains.findOne(function(err, pair) {
            if (err || pair == null){
                console.log('Error: ', err);
                res.redirect(303, '/error');
                }
            else{
                res.render('train_2', {Probe_img: './public/images/train/Probe/Probe_2.png', Gallery_img : './public/images/train/Gallery/Gallery_2.png', First_HM : './public/images/train/HM_1/HM1_2.png', Second_HM : './public/images/train/HM_2/HM2_2.png',
                });
            }
        })
    })

    app.post('/train_2', (req, res) => {
        res.redirect(303, '/train_3');
    })

    app.get('/train_3', (req, res) => {
        Trains.findOne(function(err, pair) {
            if (err || pair == null){
                console.log('Error: ', err);
                res.redirect(303, '/error');
                }
            else{
                res.render('train_3', {Probe_img: './public/images/train/Probe/Probe_3.png', Gallery_img : './public/images/train/Gallery/Gallery_3.png', First_HM : './public/images/train/HM_1/HM1_3.png', Second_HM : './public/images/train/HM_2/HM2_3.png',
                });
                }
                })
    })

    app.post('/train_3', (req, res) => {
        res.redirect(303, '/train_4');
    })

    app.get('/train_4', (req, res) => {
        Trains.findOne(function(err, pair) {
            if (err || pair == null){
                console.log('Error: ', err);
                res.redirect(303, '/error');
                }
            else{
                res.render('train_4', {Probe_img: './public/images/train/Probe/Probe_4.png', Gallery_img : './public/images/train/Gallery/Gallery_4.png', First_HM : './public/images/train/HM_1/HM1_4.png', Second_HM : './public/images/train/HM_2/HM2_4.png',
                });
                }
                })
    })

    app.post('/train_4', (req, res) => {
        res.redirect(303, '/consent');
    })

    app.get('/consent', (req, res) => {
        res.render('consent');
    })

    app.post('/consent', (req, res) => {
        res.redirect(303, '/Registration');
    })

    app.get('/Registration', (req, res) => {
        res.render('Registration');
    })
    
    app.post('/start', (req, res) => {
        console.log('New client: ', req.session.id);

        const client = new Sessions({
            id: req.session.id,
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            order: tools.get_order(pairs_ref),
            time: Date(),
            display: req.body.display,
            resolution: req.body.resolution.split(','),
            current: 0,
            dict: pairs_ref, 
        });
        client.save(function (err, _) {
            if (err) {
                console.log('Error: ', err)
                res.redirect(303, '/error');
            }
            else
                res.render('start_test');
        });
    })

    app.get('/start_test', (req, res) => {
        res.render('start_test');
    })

    app.post('/start_test', (req, res) => {
        Sessions.findOne({ 'id': req.session.id }, function (err, sess) {
            if (err || sess == null) {
                console.log('Error: ', err);
                res.redirect(303, '/error');
            }
            else {
                Sessions.updateOne({
                    'id': req.session.id
                },
                    { $push: { 'time': Date() } },
                    function (err, _) {
                        if (err) {
                            console.log('Error: ', err);
                            res.redirect(303, '/error');
                        }
                        else
                            res.redirect(303, '/test');
                    });
            }
        });
    })

    app.get('/test', (req, res) => {
        Sessions.findOne({ 'id': req.session.id }, function (err, sess) {
            if (err || sess == null) {
                console.log('Error: ', err);
                res.redirect(303, '/error');
            }
            else {
                Pairs.findOne({ 'id': sess.order[sess.current] }, function (err, pair) {
                    if (err || pair == null) {
                        console.log('Error: ', err);
                        res.redirect(303, '/error');
                    }
                    else {
                        res.render('test', {Probe_img: path.join('./public/images/pairs/Probe', pair.Probe), Gallery_img : path.join('./public/images/pairs/Gallery', pair.Gallery), First_HM : path.join('./public/images/pairs/HMs', pair.HM_1), Second_HM : path.join('./public/images/pairs/HMs', pair.HM_2),
                            current: sess.current, nPairs: nPairs
                        });
                    }
                })
            }
        });
    });

    app.post('/test', (req, res) => {
        Sessions.findOne({ 'id': req.session.id }, function (err, sess) {
            if (err || sess == null) {
                console.log('Error: ', err);
                res.redirect(303, '/error');
            }
            else {
                if (sess.current < 0) {
                    res.redirect(303, '/end')
                }
                if (sess.current >= nPairs - 1) {
                    Sessions.updateOne({
                        'id': req.session.id
                    }, 
                    
                        {   
                            $set: { 'current': 0 },
                            $push: {
                                'time': Date(),
                                'judgments': req.body.value,
                            }
                        },
                        
                        function (err, _) {
                            if (err) {
                                console.log('Error: ', err);
                                res.redirect(303, '/error');
                            }
                            else
                                res.redirect(303, '/end');
                                
                        }
                    );
                }
                else {
                    Sessions.updateOne({
                        'id': req.session.id
                    },
                        {
                            $push: {
                                'time': Date(),
                                'judgments': req.body.value,
                            },
                            $inc: { 'current': 1 }
                        },
                        function (err, _) {
                            if (err) {
                                console.log('Error: ', err);
                                res.redirect(303, '/error');
                            }
                            else
                                res.redirect(303, '/test');

                        });
                }
            }
        });
    })

    app.get('/end', (req, res) => {
        res.render('end');
    })

    app.post('/close', (req, res) => {

        res.setHeader('Clear-Site-Data', '"cache", "cookies"');
        res.send("<script>window.close();</script > ");
    })

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port} ... `));
}

main();