const { Tag } = require('../models');

//should be media type?
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