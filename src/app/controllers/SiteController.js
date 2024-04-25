const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res) {
        // Course.find({})
        //     .exec()
        //     .then((courses) => {
        //         res.json(courses);
        //     })
        //     .catch((err) => {
        //         res.status(400).json({ error: 'ERROR!!!' });
        //     });

        Course.find({})
            .exec()
            .then((courses) => {
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                    title: 'HOME PAGE',
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => {
                res.status(400).json({ error: 'ERROR!!!' });
            });

        //res.render('Home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
