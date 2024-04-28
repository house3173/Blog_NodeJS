const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');
const slugify = require('slugify');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// mongoose.plugin(slug)

const Course = new Schema({
    name: { type: String, required: true, },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    // slug: { type: String, slug: 'name', unique: true },
    slug: { type: String, unique: true, index: true },
    videoId: { type: String, required: true, },
}, {
    timestamps: true,
});

// Add plugin
Course.plugin(mongooseDelete, { 
    deletedAt: true,
    // overrideMethods: true,
});

Course.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

module.exports = mongoose.model('Course', Course);
