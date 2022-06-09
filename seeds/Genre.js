const { Genre } = require('../models');

//should be media type?
const genreData = [
{
    genre_type : 'Classic Rock'
},
{
    genre_type : 'Rap'
},
{
    genre_type : 'Country'
}, 
{
    genre_type : 'Pop'
}, 
{
    genre_type : 'Alternative'
}
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;