import 'chai/register-should'
import { skip, slow, suite, test, timeout } from 'mocha-typescript'
import { Route, RouteTest, RouteContext } from '../src'

class DemoRoute extends Route {
  static method = 'GET'
  static path = '/'
  static async handler(this: RouteContext) {
    return this.text('demo route')
  }
}
@suite('Route::Registration')
export class Test extends RouteTest {
  route = DemoRoute

  @test
  async 'can register to app object'() {
    const handlers: any[] = []
    const app = { get: (path: string, fn: any) => handlers.push({ path, fn }) }
    this.route.register(app as any)
    handlers.length.should.be.equal(1)
    handlers[0].path.should.be.equal('/')
  }
}
