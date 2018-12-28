const mongoose = require('../dbConnect.js');

var documentSchema = mongoose.Schema({ 
	title: {
		type: String,
		required: true,
		default: ''
	},
	content: {
		type: String,
		required: true,
		default: ''
	}
}, {
    timestamps: true
});

var Document = mongoose.model('Document', documentSchema);
Document.on('index', function(err) {
    if (err) {
        console.error('Document index error: %s', err);
    } else {
        console.info('Document indexing complete');
    }
});

module.exports = Document;