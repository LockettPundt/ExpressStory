'use strict'
const express = require('express'),
router = express.Router();

const story4Text = `<p>
<em>I watched the man live his life happily,</em>
</p>
<p class="p2">
    <em>knowing that he was free of me until
    he was notified</em>
</p>
<p class="p3">
    He fell gravely ill, however he was still resolute in his
    safety. He recovered from his sickness and resumed his carefree life, living
    day to day. I came to him one last time... 
</p>`;

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Story 4',
            nextPage: 'localhost:4444/story5',
            story4Text: story4Text
        },
        partials: {
            partial: 'partial-story4'
        }
    })
})



module.exports = router;