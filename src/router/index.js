import App from '../App'

const helloworld = r => require.ensure([], () => r(require('../views/counter/list')), 'helloworld')

export default [{
	path: '/',
	component: App,
	children: [
		{
			path: '',
			redirect: '/helloworld'
		},
		{
			path: '/helloworld',
			component: helloworld
		}
	]
}]
