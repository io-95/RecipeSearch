const Joi = require('joi');

const recipe = Joi.object({
    id: Joi.string()
        .alphanum()
        .pattern(new RegExp('^[0-9]{5}$'))
        .required(),

    mealName: Joi.string()
        .required(),

    instructions: Joi.string()
        .required(),

    thumbnail: Joi.string()
        .uri()
        .required(),
    
    ingredients: Joi.array()
        .items(
            Joi.string()
        ).min(1)
        .max(20)
        .required(),

    measure: Joi.array()
        .items(
            Joi.string()
            .min(1)
        ).min(1)
        .max(20)
        .required()
});

module.exports = { recipe }