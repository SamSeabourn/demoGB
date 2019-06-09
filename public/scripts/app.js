const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dpl1ntt00/upload"
const CLOUDINARY_UPLOAD_PRESET = "zwh7r6rg"

console.log( "Hello world");


let fileUpload = document.getElementById('file-upload')

fileUpload.addEventListener('change', function(event) {
	var file = event.target.files[0]
	var formData = new FormData();
	formData.append('file',file);
	formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET );


	axios({
		url: CLOUDINARY_URL,
		method: 'post',
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
		data: formData
	}).then( function(res) {
		console.log( res.data.secure_url );
		let dataSend = res.data.secure_url
		document.getElementById('lol').value = dataSend

	}).catch(function(err) {
		console.log( "Error ");
		console.log( err );
	})


})
