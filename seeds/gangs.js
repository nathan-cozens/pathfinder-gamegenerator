
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gangs').del()
    .then(function () {
      // Inserts seed entries
      return knex('gangs').insert([
        {id: 1, name: 'The Enigma Syndicate', power: '3'},
        {id: 2, name: 'The Jade Pistols', power: '3'},
        {id: 3, name: 'The Crimson Lotus', power: '3'}
      ]);
    });
};
