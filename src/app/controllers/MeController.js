const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                const haveCourses = courses.filter(course => !(course.deleted === true));
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(haveCourses)
                }
            )})
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        console.log(req.body);

        Course.find({})
            .then(courses => {
                console.log(courses);
                const deletedCourses = courses.filter(course => course.deleted === true);
                console.log(deletedCourses);
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(deletedCourses)
                });
            })
            .catch(next);
    }

}

module.exports = new MeController();
