module.exports = {
  client: {
    includes: ['src/**/*.vue', '**/*.gql', 'src/**/*.js', '**/*.graphql'],
    service: {
      name: 'umcs-timetable',
      url: 'http://localhost:80/graphql',
    },
    excludes: ['schema.gql']
  },
}
