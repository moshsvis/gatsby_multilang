const pages = [ '404', 'contact-success', 'team', 'kontakt' ];
const pathBuilder = (_meta) => {
	// console.log(_meta,"data2");
	// if (pages.includes(_meta.uid)) {
	// 	return `/${_meta.uid}`;
	// }

	if (localStorage.getItem('lang') && localStorage.getItem('lang') !== 'de-ch') {
		return `/${localStorage.getItem('lang')}/${_meta.uid}`;
	}

	return `/${_meta.uid}`;
};

module.exports = pathBuilder;
