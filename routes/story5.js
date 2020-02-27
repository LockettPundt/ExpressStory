'use strict'
const express = require('express'),
router = express.Router();

const story5Text = `<p>"Follow me.<br>
<em>The hour of your departure from this world has come."</em>
</p>
<p class="p2">
    <em>With his face flush and body trembling,</em>
</p>
<p class="p3">
    he accused me of breaking my word.
    That I had not sent any messengers ahead of my arrival. I assured him of his
    misunderstanding. 
</p>`;

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Story 5',
            nextPage: 'localhost:4444/story6',
            story5Text: story5Text
        },
        partials: {
            partial: 'partial-story5'
        }
    })
})



module.exports = router;