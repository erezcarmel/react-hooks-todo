// const SERVER_URL = 'http://exmaple.com';
const http = {
	call: (method, data = null) => {
		// const request = new XMLHttpRequest();

		return new Promise(function (resolve, reject) {
			// request.onreadystatechange = () => {
			// 	if (request.readyState !== 4) return;
			//
			// 	if (request.status >= 200 && request.status < 300) {
			// 		resolve(request);
			// 	} else {
			// 		reject({
			// 			status: request.status,
			// 			statusText: request.statusText
			// 		});
			// 	}
			// };
			//
			// request.open(method || 'GET', SERVER_URL, true);
			// request.send(data);
			resolve(data);
		});
	}
};

export default http;