const { Media } = require('../models');


const mediaData = [
{
    media_type : 'Album'
},
{
    media_type : 'CD'
},
{
    media_type : 'Tape'
}, 

];

const seedMedia = () => Media.bulkCreate(mediaData);

module.exports = seedMedia;