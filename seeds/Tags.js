const { Tag } = require('../models');

const tagData = [
{
    tag_name : 'Classic Rock'
},
{
    tag_name : 'Rap'
},
{
    tag_name : 'Country'
}, 
{
    tag_name : 'Pop'
}, 
{
    tag_name : 'Alternative'
}
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;