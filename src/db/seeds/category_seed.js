exports.seed = function (knex, Promise) {
  return knex('category').del()
    .then(function () {
      return knex('category').insert([
        {
          name: '编程',
          url: '/programing',
          order_weight: 1,
          create_time: new Date()
        },
        {
          name: '写作',
          url: '/writing',
          order_weight: 2,
          create_time: new Date()
        },
      ])
    })
}
