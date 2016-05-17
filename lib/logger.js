/**
 * Author: 笑翟 <gindis.wx>
 * Logger
 */


class Logger {
	cLog() {
		let arg = arguments
		if (typeof arg[0] == 'object') {
			console.log(arg[0])
			return
		}
		if (arg[0] && arg[1]) {
			console.log('%cRN DEBUGGER, ' + arg[0] + ': %c'  + arg[1], 'font-family:PingFang SC Light, Arial,sans-serif;color:#42B983;line-height:2em;', 'font-family:cursor,monospace;color:#333;')
		} else {
			console.log('%cRN DEBUGGER: %c'  + arg[0], 'font-family:PingFang SC Light, Arial,sans-serif;color:#42B983;line-height:2em;', 'font-family:cursor,monospace;color:#333;')
		}
  }
}

const logger = new Logger();

module.exports = logger;
