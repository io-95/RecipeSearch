const Joi = require('joi');

const recipe = Joi.object({
    id: Joi.string()
        .alphanum()
        .pattern(new RegExp('^[0-9]{5}$'))
        .required(),

    mealName: Joi.string()
        .alphanum()
        .required(),

    instraction: Joi.string()
        .alphanum()
        .required(),

    thumbnail: Joi.string()
        .uri()
        .required(),
});

module.exports = { recipe }