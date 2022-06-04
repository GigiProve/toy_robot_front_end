export class Snackbar {
	constructor() {}

	private static showMessage(id: string) {
		const doc = document.getElementById(id ? id : 'snackbar');
		doc!.className = 'show';
		setTimeout(() => {
			doc!.className = doc!.className.replace('show', '');
		}, 3000);
	}

	static showErrorMessage(message: string) {
		Snackbar.cleanIds();
		const container = document.getElementById('snackbar-container');
		container!.innerHTML = `<div id="snackbar-error">${message}</div>`;
		Snackbar.showMessage('snackbar-error');
	}

	static showSuccessMessage(message: string) {
		Snackbar.cleanIds();
		const container = document.getElementById('snackbar-container');
		container!.innerHTML = `<div id="snackbar">${message}</div>`;
		Snackbar.showMessage('snackbar');
	}

	private static cleanIds() {
		if (document.getElementById('snackbar') != null) {
			document.getElementById('snackbar')?.remove();
		}
		if (document.getElementById('snackbar-error') != null) {
			document.getElementById('snackbar-error')?.remove();
		}
	}
}
