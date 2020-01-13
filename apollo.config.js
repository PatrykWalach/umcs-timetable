module.exports = {
  client: {
    includes: ['src/**/*.vue', '**/*.gql', 'src/**/*.js', '**/*.graphql'],
    service: {
      name: 'umcs-timetable',
      url: 'http://localhost:4000/graphql',
    },
    excludes: ['schema.gql']
  },
}
