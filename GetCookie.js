function getCookie(CookieName) {
	// create the real name; cookies have an =
	let CookieName = CookieName + "=";

	// decode the entire cookie string
	let decodedCookie = decodeURI(document.cookie);

	// split the cookie string
	// this separates the cookies
	// as ; is used to signify the end of a cookie

	let CookieArray = decodedCookie.split(';');

	// loop through each cookie
	for(let i = 0; i < CookieArray.length; i++) {
		let Cookie = CookieArray[i];
		while (Cookie.charAt(0) === ' ') {
			Cookie = Cookie.substring(1);
		}

		// if its the correct name
		if (Cookie.indexOf(name) === 0) {
			// return the value of the cookie
			return Cookie.substring(name.length, Cookie.length);
		}
	}
}