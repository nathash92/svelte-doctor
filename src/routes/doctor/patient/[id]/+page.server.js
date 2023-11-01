/** @type {import('./$types').PageServerLoad} */
export function load() {
  return {
    pageTitle: 'Patient Details',
    breadcrumbs: [{
      name: 'Home',
      path: '/'
    }, {
      name: 'Patient Details',
    }]
  }
}