import {userInfoFill} from './UserInfoFill'

describe('userInfoFill', () => {
	it('should replace the values of a string with %userinfo% with the user info value', () => {
		expect(userInfoFill("this is a sample string %userinfo%", "test_string")).toEqual('this is a sample string test_string')
	})
})