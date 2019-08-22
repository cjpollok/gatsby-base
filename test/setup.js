const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
}
